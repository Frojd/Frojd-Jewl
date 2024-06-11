import { Args, Command, Flags} from '@oclif/core'
import * as fse from 'fs-extra'
import * as path from 'node:path'
import { installNpmDependencies } from '../utils/npm'

import {
  LocalConfigMissing,
  addComponentMapping,
  getAvailableComponents,
  getComponentLocalNames,
  getLocalComponentPath,
  getRepositoryComponentPath,
} from '../utils/config'
import * as fs from "fs";

export default class Clone extends Command {
  static args = {
    componentName: Args.string({ description: '(required) The name of the component in the Jewl Component Library', required: true}),
    newName: Args.string({ description: 'The name of the newly created component. Defaults to COMPONENTNAME', required: false }),
  }

  static description = 'Clone components from the Jewl Component Library to your local project'

  static examples = [
    '$ jewl clone Header',
    '$ jewl clone Header HeaderLarge',
  ]

  static flags = {
    help: Flags.help(),
  }

  private depsForInstallation: {[p: string]: string} = {}

  async run() {
    const {args} = await this.parse(Clone)
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

  private async clone(componentName: string, newName: string, isRootLevel: boolean = true) {
    let directoryName = "";

    for (const x of ["components", "containers", "layouts"]) {
      if (getAvailableComponents(x).filter((name: string) => name === componentName).length !== 0) {
        directoryName = x
        break
      }
    }

    if (!directoryName) {
      this.error(`No component named ${componentName} found in local repository. Try "jewl list" to see available components`)
    }

    const componentAbsPath = path.join(getRepositoryComponentPath(directoryName), componentName)
    const componentDestinationAbsPath = path.join(getLocalComponentPath(directoryName), newName)


    const _package = await fse.readJson(path.join(componentAbsPath, 'package.json')).catch(error => {
      this.error(`Component "${componentName}" package.json file unreadable or non existing: ` + error)
    })

    if (fse.existsSync(componentDestinationAbsPath)) {
      this.log(`The path ${componentDestinationAbsPath} does already exist. Skipping...`)
      return
    }

    this.log(`Installing ${componentName}...`)
    fse.copySync(componentAbsPath, componentDestinationAbsPath)
    addComponentMapping(componentName, directoryName, newName)

    if (componentName != newName) {
      this.searchReplaceFiles(componentDestinationAbsPath, componentName, newName)
    }

    // TODO: Ask if dependency should be installed
    if (_package.jewlDependencies) {
      this.log(`Installing subcomponents (jewl dependencies)...`)
      await this.installJewlDependencies(_package.jewlDependencies, newName)
    }

    if (_package.dependencies) {
      for (const dep of Object.keys(_package.dependencies)) {
        this.depsForInstallation[dep] = _package.dependencies[dep]
      }

      if (isRootLevel) {
        this.log(`Installing npm dependencies: ` + Object.keys(this.depsForInstallation).join(","))
        await installNpmDependencies(this.depsForInstallation, false, this)
      }
    }
  }

  private searchReplaceFiles(componentPath: string, componentName: string, newName: string) {

    fs.readdirSync(componentPath).forEach(originalFileName => {
      const originalFilePath = path.join(componentPath, originalFileName)

      // Update contents
      const contents = fs.readFileSync(originalFilePath, "utf8", )
      fs.rmSync(originalFilePath)
      fs.writeFileSync(originalFilePath, contents.replaceAll(componentName, newName))

      // Rename file
      const newFileName = originalFileName.replace(componentName, newName)
      if (newFileName != originalFileName) {
        fse.moveSync(originalFilePath, path.join(componentPath, newFileName))
      }
    })
  }

  private async installJewlDependencies(dependencies: Array<string>, currentLocalName: string) {
    for (const dep of dependencies) {
      const paths = dep.split('/')
      const depDir = paths.length > 1 ? paths[0] : 'components';
      const depName = paths.length > 1 ? paths[1] : paths[0];
      const localNames = getComponentLocalNames(depName, depDir)

      if (localNames.length > 0) {
        this.warn(`Jewl dependency "${dep}" is required for this component: ${currentLocalName}.` +
          ' It is already installed under the following name/names: ' + localNames.join(', ') +
          '. After the installation is complete, make sure to update this components imports and usages if needed')
      } else {
        this.log(`Installing Jewl dependency "${dep}"...`)
        await this.clone(depName, depName, false)
      }
    }
  }
}
