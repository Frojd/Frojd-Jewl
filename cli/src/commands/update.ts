import {Command} from '@oclif/core'
import {REPO_PATH} from '../constants'
import {Repository} from 'nodegit'
import {getConfig, JewlConfig} from '../utils/config'

export default class Update extends Command {
  static description = 'Sync the latest changes from the Jewl Component Library'

  static examples = [
    '$ jewl-cli update',
  ]

  async run() {
    let config: JewlConfig

    try {
      config = getConfig()
    } catch {
      this.error('No local configuration file found. Try "jewl-cli init"')
    }

    try {
      const repo: Repository = await Repository.open(REPO_PATH)

      this.log('Updating component library from remote...')
      await repo.mergeBranches(config.repositoryBranch, 'origin/' + config.repositoryBranch)

      this.log('Local repository updated!')
    } catch (error) {
      this.error(`Failed to update repository. Is project initialized? (jewl-cli init): ${error}`)
    }
  }
}
