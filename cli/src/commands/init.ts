import {Command, ux} from '@oclif/core'

import * as git from 'isomorphic-git'
import http from 'isomorphic-git/http/node'
import * as fs from "fs";

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
      basePath: "app",
    }

    try {
      _config = getConfig()
      this.log('Found config in project, using as default values...')
    } catch {
      this.log('Initializing Jewl...')
    }

    const basePath = await ux.prompt('Base path for jewl (where your components-folder is located)?', {default: _config.basePath})

    const config: JewlConfig = storeConfig({..._config, basePath: basePath})

    if (fs.existsSync(REPO_PATH)) {
      this.log('Local repository exists, refreshing...')
      fs.rmSync(REPO_PATH, {recursive: true, force: true})
    }

    try {
      this.log('Cloning from remote repository...')

      await git.clone({fs, http, dir: REPO_PATH, url: config.repository})

      this.log(`Jewl initialized: "${CONFIG_FILE_NAME}" has been created/updated in current working directory and local repository updated.`)
      this.log(`${CONFIG_FILE_NAME} should be checked in to you repository and ${REPO_PATH} should be in your .gitignore`)
    } catch (e:unknown) {
      this.error('Failed to clone repository: ' + e)
    }
  }
}
