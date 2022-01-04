import {Command} from '@oclif/command'
import * as fse from 'fs-extra'
import * as path from 'path'
import * as lmify from 'lmify'

import {
  LocalConfigMissing,
  getRepositoryComponentPath,
  getLocalComponentPath,
  addComponentMapping,
  getComponentLocalNames,
} from '../utils/config'

export default class List extends Command {
  static description = 'Clone components'

  static args = [
    {name: 'componentName', required: true},
    {name: 'newName', required: false},
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

    if (fse.existsSync(componentDestinationAbsPath)) {
      this.error(`The path ${componentDestinationAbsPath} does already exist. Aborting...`)
    }

    const _package = await fse.readJson(path.join(componentAbsPath, 'package.json')).catch(error => {
      this.error(`Component "${componentName}" package.json file unreadable or non existing: ` + error)
    })

    if (_package.dependencies) {
      await this.installDependencies(_package.dependencies)
    }

    if (_package.jewlDependencies) {
      await this.installJewlDependencies(_package.jewlDependencies, newName)
    }

    this.log(`Installing ${componentName}...`)
    addComponentMapping(componentName, newName)
    fse.copySync(componentAbsPath, componentDestinationAbsPath)
  }

  private async installJewlDependencies(dependencies: Array<string>, currentLocalName: string) {
    dependencies.map(async (dep: string) => {
      const localNames = getComponentLocalNames(dep)
      if (localNames.length > 0) {
        this.warn(`Jewl dependencie "${dep}" is required for this component: ${currentLocalName}.` +
          ' It is already installed under the following name/names: ' + localNames.join(', ') +
          '. After the installation is complete, make sure to update this components imports and usages if needed')
      } else {
        this.log(`Installing dependency "${dep}"...`)
        await this.clone(dep, dep)
      }
    })
  }

  private async installDependencies(dependencies: Array<string>) {
    const install = []
    for (const dep in dependencies) {
      if (Object.prototype.hasOwnProperty.call(dependencies, dep)) {
        install.push(dep + '@' + dependencies[dep])
      }
    }

    this.log('Installing npm dependencies...')

    lmify.setPackageManager('npm')
    lmify.install(install)
  }
}
