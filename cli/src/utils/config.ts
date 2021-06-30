import * as fs from 'fs'
import * as path from 'path'

import {CONFIG_FILE_NAME} from '../constants'

interface JewlLocalConfig {
  componentPath: string;
}

export interface JewlConfig {
  componentPath: string;
  repository: string;
  repositoryBranch: string;
  repositoryComponentPath: string;
}

class LocalConfigMissing extends Error {}

function _findAndGetLocalConfig(basePath?: string): JewlLocalConfig {
  if (!basePath) {
    basePath = process.cwd()
  }

  const absPath = path.join(basePath, CONFIG_FILE_NAME)

  if (fs.existsSync(absPath)) {
    return JSON.parse(fs.readFileSync(absPath, {encoding: 'utf-8'}))
  }

  if (basePath === path.sep) {
    throw new LocalConfigMissing('No local config found')
  }

  return _findAndGetLocalConfig(path.dirname(basePath))
}

export function getConfig(): JewlConfig {
  const defaultConfig = {
    repository: 'https://github.com/Frojd/Frojd-Jewl.git',
    repositoryBranch: 'develop',
    repositoryComponentPath: 'component-library/app/components',
  }

  const localConfig = _findAndGetLocalConfig()

  if (!localConfig) {
    throw new LocalConfigMissing('No local config found')
  }

  return {...defaultConfig, ...localConfig}
}

export function storeConfig(options: object): JewlConfig {
  fs.writeFileSync(CONFIG_FILE_NAME, JSON.stringify(options))
  return getConfig()
}
