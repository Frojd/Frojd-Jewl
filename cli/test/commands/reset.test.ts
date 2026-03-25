import {expect} from 'chai'

describe('reset command', () => {
  it('should load without errors', async () => {
    const Reset = (await import('../../src/commands/reset')).default
    expect(Reset).to.exist
    expect(Reset.description).to.be.a('string')
  })

  it('should have correct metadata', async () => {
    const Reset = (await import('../../src/commands/reset')).default
    expect(Reset.description).to.include('Reset')
    expect(Reset.description).to.include('WARNING')
    expect(Reset.examples).to.be.an('array')
    expect(Reset.examples).to.have.length.greaterThan(0)
  })

  it('should have force flag', async () => {
    const Reset = (await import('../../src/commands/reset')).default
    expect(Reset.flags).to.have.property('force')
    expect(Reset.flags.force).to.have.property('char', 'f')
  })
})
