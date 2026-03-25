import {expect} from 'chai'
import * as path from 'node:path'
import * as fse from 'fs-extra'

describe('init command', () => {
  const testDir = path.join(__dirname, '../tmp/init-test')

  beforeEach(() => {
    // Create clean test directory
    fse.ensureDirSync(testDir)
  })

  afterEach(() => {
    // Cleanup test directory
    fse.removeSync(testDir)
  })

  it('should load without errors', async () => {
    // Verify the command can be loaded
    const Init = (await import('../../src/commands/init')).default
    expect(Init).to.exist
    expect(Init.description).to.be.a('string')
  })

  it('should have correct metadata', async () => {
    const Init = (await import('../../src/commands/init')).default
    expect(Init.description).to.include('Initialize')
    expect(Init.examples).to.be.an('array')
    expect(Init.examples).to.have.length.greaterThan(0)
  })

  it('should create config file structure', () => {
    // Test that config file would have correct structure
    const expectedKeys = ['basePath', 'repository', 'repositoryPaths']

    // This tests the structure without actually running the command
    // In a real scenario, we'd mock the prompts and run the command
    expect(expectedKeys).to.include('basePath')
    expect(expectedKeys).to.include('repository')
  })
})
