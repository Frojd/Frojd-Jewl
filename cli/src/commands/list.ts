import {Command} from '@oclif/command'
import * as fs from 'fs'
import {LocalConfigMissing, getRepositoryComponentPath} from '../utils/config'

export default class List extends Command {
  static description = 'Lists available components'

  static examples = [
    '$ jewl list',
  ]

  async run() {
    try {
      const componentPath = getRepositoryComponentPath()
      if (!fs.existsSync(componentPath)) {
        this.error(`The path ${componentPath} does not exist`)
      }

      const dir = fs.readdirSync(componentPath)
      this.log(`Found ${dir.length} components:`)
      dir.map(x => this.log('  ' + x))
    } catch (error) {
      if (error instanceof LocalConfigMissing) {
        this.error('Jewl not initialized. Try `jewl init`')
      }
      this.error('Unexpected Error: ' + error)
    }
  }
}
