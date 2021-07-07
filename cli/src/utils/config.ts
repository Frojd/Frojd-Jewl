import * as fs from 'fs'
import * as path from 'path'

import {CONFIG_FILE_NAME, REPO_PATH} from '../constants'

interface JewlLocalConfig {
  componentPath: string;
}

export interface JewlConfig {
  componentPath: string;
  repository: string;
  repositoryBranch: string;
  repositoryComponentPath: string;
}

export class LocalConfigMissing extends Error {}

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
  const _path = path.join(getBasePath(), CONFIG_FILE_NAME)
  return JSON.parse(fs.readFileSync(_path, {encoding: 'utf-8'}))
}

export function getConfig(): JewlConfig {
  const defaultConfig = {
    repository: 'https://github.com/Frojd/Frojd-Jewl.git',
    repositoryBranch: 'develop',
    repositoryComponentPath: 'component-library/app/components',
  }

  const localConfig = _getLocalConfig()

  if (!localConfig) {
    throw new LocalConfigMissing('No local config found')
  }

  return {...defaultConfig, ...localConfig}
}

export function getRepositoryComponentPath(): string {
  return path.join(getBasePath(), REPO_PATH, getConfig().repositoryComponentPath)
}

export function storeConfig(options: object): JewlConfig {
  fs.writeFileSync(CONFIG_FILE_NAME, JSON.stringify(options))
  return getConfig()
}
