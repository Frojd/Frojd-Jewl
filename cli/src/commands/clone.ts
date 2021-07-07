import {Command} from '@oclif/command'
import * as fs from 'fs'
import * as fse from 'fs-extra'
import * as path from 'path'
import {LocalConfigMissing, getRepositoryComponentPath, getLocalComponentPath} from '../utils/config'

export default class List extends Command {
  static description = 'Clone components'
  static args = [
    {name: 'componentName', required: true},
    {name: 'newName', required: false}
  ]

  static examples = [
    '$ jewl clone Header',
    '$ jewl clone Header HeaderLarge',
  ]

  async run() {
    const {args} = this.parse(List)
    const {componentName, newName} = args

    try {
      await this.clone(componentName, newName ? newName : componentName)
    } catch (error) {
      if (error instanceof LocalConfigMissing) {
        this.error('Jewl not initialized. Try `jewl init`')
      }
      this.error('Unexpected Error: ' + error)
    }
  }

  private async clone(componentName: string, newName: string) {
    const componentAbsPath = path.join(getRepositoryComponentPath(), componentName)
    const componentDestinationAbsPath = path.join(getLocalComponentPath(), newName)

    const _package = await fse.readJson(path.join(componentAbsPath, 'package.json')).catch( error => {
      this.error(`Component "${componentName}" has no package.json file. This is required`)
    })

    this.log(`Cloning ${componentName}...`)
    //fse.copySync(componentAbsPath, componentDestinationAbsPath)
    console.log(_package)

    console.log(componentAbsPath, componentDestinationAbsPath)
  }
}
