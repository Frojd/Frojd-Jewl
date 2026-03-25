import {expect} from 'chai'
import * as path from 'node:path'
import * as fse from 'fs-extra'

describe('clone command', () => {
  const testDir = path.join(__dirname, '../tmp/clone-test')

  beforeEach(() => {
    fse.ensureDirSync(testDir)
  })

  afterEach(() => {
    fse.removeSync(testDir)
  })

  it('should load without errors', async () => {
    const Clone = (await import('../../src/commands/clone')).default
    expect(Clone).to.exist
    expect(Clone.description).to.be.a('string')
  })

  it('should have required arguments', async () => {
    const Clone = (await import('../../src/commands/clone')).default
    expect(Clone.args).to.exist
    expect(Clone.args).to.have.property('componentName')
    expect(Clone.args.componentName.required).to.be.true
  })

  it('should have correct metadata', async () => {
    const Clone = (await import('../../src/commands/clone')).default
    expect(Clone.description).to.include('Clone')
    expect(Clone.examples).to.be.an('array')
    expect(Clone.examples.length).to.be.greaterThan(0)
  })

  it('should have help flag', async () => {
    const Clone = (await import('../../src/commands/clone')).default
    expect(Clone.flags).to.exist
    expect(Clone.flags).to.have.property('help')
  })
})
