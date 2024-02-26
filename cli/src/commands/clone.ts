import { Command, Args, Flags} from '@oclif/core'
import * as fse from 'fs-extra'
import * as path from 'node:path'
import { addDependency, installDependencies } from 'nypm'

import {
  LocalConfigMissing,
  getRepositoryComponentPath,
  getLocalComponentPath,
  addComponentMapping,
  getComponentLocalNames,
  getAvailableComponents,
} from '../utils/config'

export default class Clone extends Command {
  static description = 'Clone components from the Jewl Component Library to your local project'

  static args = {
    componentName: Args.string({ required: true, description: '(required) The name of the component in the Jewl Component Library'}),
    newName: Args.string({ required: false, description: 'The name of the newly created component. Defaults to COMPONENTNAME' }),
  }

  static flags = {
    help: Flags.help(),
    container: Flags.boolean(),
    layout: Flags.boolean(),
  }

  static examples = [
    '$ jewl clone Header',
    '$ jewl clone Header HeaderLarge',
    '$ jewl clone NotFound NotFoundPage --container',
    '$ jewl clone Base BasePage --layout',
  ]

  async run() {
    const {args, flags} = await this.parse(Clone)
    const {componentName, newName} = args

    const directoryName = flags.container ? 'containers' : (
      flags.layout ? 'layouts' : 'components'
    );

    try {
      await this.clone(directoryName, componentName, newName ? newName : componentName)
    } catch (error) {
      if (error instanceof LocalConfigMissing) {
        this.error('Jewl not initialized. Try `jewl init`')
      }

      this.error('Unexpected Error: ' + error)
    }
  }

  private async clone(directoryName:string, componentName: string, newName: string) {
    const componentAbsPath = path.join(getRepositoryComponentPath(directoryName), componentName)
    const componentDestinationAbsPath = path.join(getLocalComponentPath(directoryName), newName)

    if (getAvailableComponents(directoryName).filter((name: string) => name === componentName).length === 0) {
      this.error(`No component named ${componentName} found in local repository. Try "jewl list" to see available components`)
    }

    if (fse.existsSync(componentDestinationAbsPath)) {
      this.error(`The path ${componentDestinationAbsPath} does already exist. Aborting...`)
    }

    const _package = await fse.readJson(path.join(componentAbsPath, 'package.json')).catch(error => {
      this.error(`Component "${componentName}" package.json file unreadable or non existing: ` + error)
    })

    // TODO: Ask if dependency should be installed
    if (_package.dependencies) {
      await this.installDependencies(_package.dependencies)
    }

    // TODO: Ask if dependency should be installed
    if (_package.jewlDependencies) {
      await this.installJewlDependencies(_package.jewlDependencies, newName)
    }

    this.log(`Installing ${componentName}...`)
    addComponentMapping(componentName, newName)
    fse.copySync(componentAbsPath, componentDestinationAbsPath)
  }

  private async installJewlDependencies(dependencies: Array<string>, currentLocalName: string) {
    dependencies.map(async (dep: string) => {
      const paths = dep.split('/')
      const depDir = paths.length > 1 ? paths[0] : 'components';
      const depName = paths.length > 1 ? paths[1] : paths[0];
      const localNames = getComponentLocalNames(dep)
      if (localNames.length > 0) {
        this.warn(`Jewl dependencie "${dep}" is required for this component: ${currentLocalName}.` +
          ' It is already installed under the following name/names: ' + localNames.join(', ') +
          '. After the installation is complete, make sure to update this components imports and usages if needed')
      } else {
        this.log(`Installing dependency "${dep}"...`)
        await this.clone(depDir, depName, depName)
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

    // TODO: Changed from lmify install to nypm installDependencies, make sure it works
    addDependency(install)
    installDependencies()
  }
}
