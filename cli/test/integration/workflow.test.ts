import {expect} from 'chai'
import * as path from 'node:path'
import * as fse from 'fs-extra'
import {storeConfig, getConfig} from '../../src/utils/config'

describe('integration: full workflow', () => {
  const testDir = path.join(__dirname, '../tmp/integration-test')
  const configFile = path.join(testDir, 'jewlconfig.json')
  let originalCwd: string

  beforeEach(() => {
    originalCwd = process.cwd()
    fse.ensureDirSync(testDir)
    process.chdir(testDir)
  })

  afterEach(() => {
    process.chdir(originalCwd)
    fse.removeSync(testDir)
  })

  it('should complete init workflow', () => {
    // Simulate init command creating config
    storeConfig({
      basePath: 'app',
    })

    // Verify config was created
    expect(fse.existsSync(configFile)).to.be.true

    // Verify config can be read back
    const readConfig = getConfig()
    expect(readConfig.basePath).to.equal('app')
  })

  it('should have correct config after init', () => {
    storeConfig({
      basePath: 'src/components',
    })

    const config = getConfig()

    // Verify essential config properties
    expect(config).to.have.property('basePath')
    expect(config).to.have.property('repository')
    expect(config).to.have.property('repositoryPaths')

    // Verify repository paths structure
    expect(config.repositoryPaths).to.have.property('basePath')
    expect(config.repositoryPaths).to.have.property('root')
  })

  it('should maintain config persistence across reads', () => {
    const originalConfig = storeConfig({
      basePath: 'test/path',
    })

    // Read config multiple times
    const read1 = getConfig()
    const read2 = getConfig()

    // All should be identical
    expect(read1.basePath).to.equal(originalConfig.basePath)
    expect(read2.basePath).to.equal(originalConfig.basePath)
    expect(read1.basePath).to.equal(read2.basePath)
  })
})
