import {expect} from 'chai'
import * as path from 'node:path'
import * as fs from 'fs'
import * as fse from 'fs-extra'
import {getConfig, storeConfig, LocalConfigMissing} from '../../src/utils/config'

describe('config utilities', () => {
  const testDir = path.join(__dirname, '../tmp/config-test')
  const configFile = path.join(testDir, 'jewlconfig.json')
  const parentConfigFile = path.join(__dirname, '../../jewlconfig.json')
  const parentConfigBackup = path.join(__dirname, '../../jewlconfig.json.test-backup')
  let originalCwd: string

  beforeEach(() => {
    // Save original working directory
    originalCwd = process.cwd()

    // Temporarily rename parent config if it exists (to test error conditions)
    if (fs.existsSync(parentConfigFile)) {
      fs.renameSync(parentConfigFile, parentConfigBackup)
    }

    // Create clean test directory
    fse.ensureDirSync(testDir)

    // Change to test directory
    process.chdir(testDir)
  })

  afterEach(() => {
    // Restore original working directory
    process.chdir(originalCwd)

    // Restore parent config if it was renamed
    if (fs.existsSync(parentConfigBackup)) {
      fs.renameSync(parentConfigBackup, parentConfigFile)
    }

    // Cleanup test directory
    fse.removeSync(testDir)
  })

  describe('storeConfig', () => {
    it('should create config file with correct structure', () => {
      const config = storeConfig({
        basePath: 'app',
      })

      expect(fs.existsSync(configFile)).to.be.true
      expect(config).to.have.property('basePath', 'app')
      expect(config).to.have.property('repository')
      expect(config).to.have.property('repositoryPaths')
    })

    it('should contain required repository path', () => {
      const config = storeConfig({
        basePath: 'src',
      })

      expect(config.repository).to.be.a('string')
      expect(config.repository).to.include('github.com')
    })

    it('should persist config to disk', () => {
      storeConfig({
        basePath: 'components',
      })

      const fileContent = fs.readFileSync(configFile, 'utf-8')
      const parsed = JSON.parse(fileContent)

      expect(parsed).to.have.property('basePath', 'components')
    })
  })

  describe('getConfig', () => {
    it('should throw LocalConfigMissing when no config exists', () => {
      expect(() => getConfig()).to.throw(LocalConfigMissing, 'No local config found')
    })

    it('should read existing config', () => {
      // First create a config
      storeConfig({
        basePath: 'app',
      })

      // Then read it
      const config = getConfig()
      expect(config).to.have.property('basePath', 'app')
    })

    it('should return valid config structure', () => {
      storeConfig({
        basePath: 'test',
      })

      const config = getConfig()
      expect(config).to.have.property('basePath')
      expect(config).to.have.property('repository')
      expect(config).to.have.property('repositoryPaths')
      expect(config.repositoryPaths).to.have.property('basePath')
      expect(config.repositoryPaths).to.have.property('root')
    })
  })
})
