import {Command, ux} from '@oclif/core'
import {CONFIG_FILE_NAME, REPO_PATH} from '../constants'
import * as Git from 'nodegit'
import {getConfig, storeConfig, JewlConfig} from '../utils/config'

export default class Init extends Command {
  static description = 'Initialize or update settings for your Jewl project. ' +
    'Creates a config file in your current working directory. If file already exists, this command ' +
    'overwrites the properties changed in the interactive cli interface'

  static examples = [
    '$ jewl-cli init',
  ]

  async run() {
    let _config = {componentPath: 'app/components'}

    try {
      _config = getConfig()
      this.log('Found config in project, using as default values...')
    } catch {
      this.log('Initializing Jewl...')
    }

    const componentPath = await ux.prompt('Relative component path?', {default: _config.componentPath})

    const config: JewlConfig = storeConfig({..._config, componentPath})

    try {
      const repo: Git.Repository = await Git.Repository.open(REPO_PATH)
      this.log('Local repository exists, getting latest changes...')
      await repo.mergeBranches(config.repositoryBranch, 'origin/' + config.repositoryBranch)

      this.log('Local repository updated!')
    } catch {
      try {
        this.log('No local repository found. Cloning from remote repository...')

        await Git.Clone(config.repository, REPO_PATH, {
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
