import {expect} from 'chai'

describe('list command', () => {
  it('should load without errors', async () => {
    const List = (await import('../../src/commands/list')).default
    expect(List).to.exist
    expect(List.description).to.be.a('string')
  })

  it('should have correct metadata', async () => {
    const List = (await import('../../src/commands/list')).default
    expect(List.description).to.include('List')
    expect(List.examples).to.be.an('array')
  })
})
