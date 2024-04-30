import * as fs from 'node:fs'
import * as path from 'node:path'

import {CONFIG_FILE_NAME, REPO_PATH} from '../constants'

interface JewlLocalConfig {
  componentPaths: JewlComponentPaths;
}

interface JewlComponentMapping {
  jewlDirectory: string;
  jewlName: string;
  localName: string;
}

interface JewlComponentPaths {
  components: string;
  containers: string;
  layouts: string;
}

export interface JewlConfig {
  basePath: string
  repository: string;
  repositoryPaths: JewlComponentPaths;
  componentMapping: Array<JewlComponentMapping>
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

export function getConfig(): JewlConfig {
  const defaultConfig = {
    componentMapping: [],
    basePath: "app",
    repository: 'https://github.com/Frojd/Frojd-Jewl.git',
    repositoryPaths: {
      components: 'component-library/app/components',
      containers: 'component-library/app/containers',
      layouts: 'component-library/app/layouts',
    },
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
  } catch{
    throw new ComponentsDirectoryMissing(`Components directory ${directory} is missing`)
  }
}

export function getLocalComponentPath(directory: string): string {
  return path.join(path.join(getBasePath(), getConfig().basePath), directory)
}

export function getComponentLocalNames(jewlName: string, jewlDirectory: string): Array<string> {
  const _return: Array<string> = []
  for (const mapping of getConfig().componentMapping) {
    if (mapping.jewlName === jewlName && mapping.jewlDirectory === jewlDirectory) {
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

export function addComponentMapping(jewlName: string, jewlDirectory: string, localName: string) {
  const config = getConfig()
  const exists = [...config.componentMapping].find((mapping) => mapping.localName === localName);
  if(!exists) {
    config.componentMapping = [...config.componentMapping, {jewlDirectory, jewlName, localName}]
    storeConfig(config)
  }
}
