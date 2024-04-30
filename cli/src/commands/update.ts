import {Command} from '@oclif/core'

import {REPO_PATH} from '../constants'
import {JewlConfig, getConfig} from '../utils/config'
import * as git from 'isomorphic-git'
import http from 'isomorphic-git/http/node'
import * as fs from "fs";


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
      this.log('Updating component library from remote...')

      if (fs.existsSync(REPO_PATH)) {
        this.log('Local repository exists, refreshing...')
        fs.rmSync(REPO_PATH, {recursive: true, force: true})
      }

      try {
        this.log('Cloning from remote repository...')

        await git.clone({fs, http, dir: REPO_PATH, url: config.repository})
        this.log('Local repository updated!')

      } catch {
        this.error('Failed to clone repository')
      }

    } catch (error) {
      this.error(`Failed to update repository. Is project initialized? (jewl-cli init): ${error}`)
    }
  }
}
