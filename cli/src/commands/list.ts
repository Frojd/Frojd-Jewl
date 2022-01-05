import {Command} from '@oclif/core'
import {LocalConfigMissing, getAvailableComponents} from '../utils/config'

export default class List extends Command {
  static description = 'Lists available components in the Jewl Component Library'

  static examples = [
    '$ jewl list',
  ]

  async run() {
    try {
      const components = getAvailableComponents()

      this.log(`Found ${components.length} components:`)
      components.map(x => this.log('  ' + x))
    } catch (error) {
      if (error instanceof LocalConfigMissing) {
        this.error('Jewl not initialized. Try `jewl init`')
      }

      this.error('Unexpected Error: ' + error)
    }
  }
}
