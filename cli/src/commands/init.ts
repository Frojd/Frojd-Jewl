import {Command, ux} from '@oclif/core'
import {Repository, Clone as clone} from "nodegit";

import {CONFIG_FILE_NAME, REPO_PATH} from '../constants'
import {JewlConfig, getConfig, storeConfig} from '../utils/config'

export default class Init extends Command {
  static description = 'Initialize or update settings for your Jewl project. ' +
    'Creates a config file in your current working directory. If file already exists, this command ' +
    'overwrites the properties changed in the interactive cli interface'

  static examples = [
    '$ jewl-cli init',
  ]

  async run() {
    let _config = {
      componentPaths: {
        components: 'app/components',
        containers: 'app/containers',
        layouts: 'app/layouts',
      },
    }

    try {
      _config = getConfig()
      this.log('Found config in project, using as default values...')
    } catch {
      this.log('Initializing Jewl...')
    }

    const componentsPath = await ux.prompt('Relative components path?', {default: _config.componentPaths.components})
    const containersPath = await ux.prompt('Relative containers path?', {default: _config.componentPaths.containers})
    const layoutsPath = await ux.prompt('Relative layouts path?', {default: _config.componentPaths.layouts})

    const config: JewlConfig = storeConfig({..._config, componentPaths: {
      components: componentsPath,
      containers: containersPath,
      layouts: layoutsPath,
    }})

    try {
      const repo: Repository = await Repository.open(REPO_PATH)
      this.log('Local repository exists, getting latest changes...')
      await repo.mergeBranches(config.repositoryBranch, 'origin/' + config.repositoryBranch)

      this.log('Local repository updated!')
    } catch {
      try {
        this.log('No local repository found. Cloning from remote repository...')

        await clone(config.repository, REPO_PATH, {
          checkoutBranch: config.repositoryBranch,
        })

        this.log(`Jewl initialized: "${CONFIG_FILE_NAME}" has been created/updated in current working directory and local repository updated.`)
        this.log(`${CONFIG_FILE_NAME} should be checked in to you repository and ${REPO_PATH} should be in your .gitignore`)
      } catch {
        this.error('Failed to clone repository')
      }
    }
  }
}
