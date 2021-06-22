import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
import {CONFIG_FILE_NAME} from '../constants'
import {loadJSON} from "@oclif/config/lib/util";
var fs = require('fs')

export default class Init extends Command {
  static description = 'Initialize or update settings for your jewl project. Creates/updates config file in your current working directory'

  static examples = [
    `$ jewl-cli init`,
  ]

  async run() {
    let config = {
      componentPath: "app/components"
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

    fs.writeFileSync(CONFIG_FILE_NAME, JSON.stringify({componentPath}))
    this.log(`Jewl initialized, "${CONFIG_FILE_NAME}" created/updated in current working directory. This file should be checked in to your repository`)
  }
}
