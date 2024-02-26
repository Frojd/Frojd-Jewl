import * as fs from 'node:fs'
import * as path from 'node:path'

import {CONFIG_FILE_NAME, REPO_PATH} from '../constants'

interface JewlLocalConfig {
  componentPaths: JewlComponentPaths;
}

interface JewlComponentMapping {
  remoteName: string;
  localName: string;
}

interface JewlComponentPaths {
  components: string;
  containers: string;
  layouts: string;
}

export interface JewlConfig {
  componentPaths: JewlComponentPaths;
  repository: string;
  repositoryBranch: string;
  repositoryPaths: JewlComponentPaths;
  componentMapping: Array<JewlComponentMapping>;
}

export class ComponentsDirectoryMissing extends Error {}
export class LocalConfigMissing extends Error {}
export class LocalRepositoryMissing extends Error {}

export function getBasePath(_path?: string): string {
  if (!_path) {
    _path = process.cwd()
  }

  if (_path === path.sep) {
    throw new LocalConfigMissing('No local config found')
  }

  if (fs.existsSync(path.join(_path, CONFIG_FILE_NAME))) {
    return _path
  }

  return getBasePath(path.dirname(_path))
}

function _getLocalConfig(): JewlLocalConfig {
  const _path: string = path.join(getBasePath(), CONFIG_FILE_NAME)
  return JSON.parse(fs.readFileSync(_path).toString('utf8'))
}

function _getDirectoryPath() {

}

export function getConfig(): JewlConfig {
  const defaultConfig = {
    repository: 'https://github.com/Frojd/Frojd-Jewl.git',
    repositoryBranch: 'develop',
    repositoryPaths: {
      components: 'component-library/app/components',
      containers: 'component-library/app/containers',
      layouts: 'component-library/app/layouts',
    },
    componentPaths: {
      components: 'app/components',
      containers: 'app/containers',
      layouts: 'app/layouts',
    },
    componentMapping: [],
  }

  const localConfig = _getLocalConfig()

  if (!localConfig) {
    throw new LocalConfigMissing('No local config found')
  }

  return {...defaultConfig, ...localConfig}
}

export function getRepositoryComponentPath(directory: string): string {
  const dirPath = getConfig().repositoryPaths[directory as keyof JewlComponentPaths];
  try {
    const componentPath = path.join(getBasePath(), REPO_PATH, dirPath)
    return componentPath
  } catch(error) {
    throw new ComponentsDirectoryMissing(`Components directory ${directory} is missing`)
  }
  return ''
}

export function getLocalComponentPath(directory: string): string {
  return path.join(getBasePath(), getConfig().componentPaths[directory as keyof JewlComponentPaths])
}

export function getComponentLocalNames(remoteName: string): Array<string> {
  const _return: Array<string> = []
  for (const mapping of getConfig().componentMapping) {
    if (mapping.remoteName === remoteName) {
      _return.push(mapping.localName)
    }
  }

  return _return
}

export function getAvailableComponents(directory: string): Array<string> {
  const componentsPath = getRepositoryComponentPath(directory)
  if (!fs.existsSync(componentsPath)) {
    throw new LocalRepositoryMissing(`The path ${componentsPath} does not exist. Check your jewlconfig or reinitialize project`)
  }

  return fs.readdirSync(componentsPath)
}

export function storeConfig(options: object): JewlConfig {
  fs.writeFileSync(CONFIG_FILE_NAME, JSON.stringify(options, null, 2))
  return getConfig()
}

export function addComponentMapping(remoteName: string, localName: string) {
  const config = getConfig()
  config.componentMapping = [...config.componentMapping, {remoteName, localName}]
  storeConfig(config)
}
