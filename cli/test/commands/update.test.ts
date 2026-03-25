import {expect} from 'chai'

describe('update command', () => {
  it('should load without errors', async () => {
    const Update = (await import('../../src/commands/update')).default
    expect(Update).to.exist
    expect(Update.description).to.be.a('string')
  })

  it('should have correct metadata', async () => {
    const Update = (await import('../../src/commands/update')).default
    expect(Update.description).to.include('Sync')
    expect(Update.examples).to.be.an('array')
  })
})
