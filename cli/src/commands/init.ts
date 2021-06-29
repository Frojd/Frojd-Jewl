import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
import {CONFIG_FILE_NAME, REPO_PATH} from '../constants'
import {loadJSON} from "@oclif/config/lib/util"
import {Clone, Repository} from 'nodegit'
var fs = require('fs')

export default class Init extends Command {
  static description = 'Initialize or update settings for your jewl project. Creates/updates config file in your current working directory'

  static examples = [
    `$ jewl-cli init`,
  ]

  async run() {
    let config = {
      componentPath: "app/components",
      repository: "git@github.com:Frojd/Frojd-Jewl.git",
      repositoryBranch: 'develop',
      repositoryComponentPath: "component-library/app/components"
    }

    try {
      const jsonFile = await loadJSON(CONFIG_FILE_NAME)
      config = {...config, ...jsonFile}
      this.log(`Found config in project, using as default values...`)
    } catch (e) {
      this.log(`Initializing Jewl...`)
    }

    const defaultPath = "app/components"
    const componentPath = await cli.prompt(`Relative component path?`, {default: config.componentPath})

    fs.writeFileSync(CONFIG_FILE_NAME, JSON.stringify({...config, componentPath}))

    try {
      const repo: Repository = await Repository.open(REPO_PATH)
      this.log(`Local repository exists, getting latest changes...`)
      repo.fetch("origin")
      this.log(`Local repository updated!`)
    } catch (e) {
      try {
        this.log(`No local repository found. Cloning from remote repository...`)
        const repository: Repository = await Clone.clone(config.repository, REPO_PATH, {
          checkoutBranch: config.repositoryBranch,
        })
        this.log(`Jewl initialized: "${CONFIG_FILE_NAME}" has been created/updated in current working directory and local repository updated.`)
        this.log(`${CONFIG_FILE_NAME} should be check in to you repository and ${REPO_PATH} should be in your .gitignore`)
      } catch (e) {
        this.error("Failed to clone repository: " + e.message)
      }

    }
  }
}
