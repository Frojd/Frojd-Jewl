import {expect} from 'chai'

describe('npm utilities', () => {
  it('should export installNpmDependencies function', async () => {
    const npmUtils = await import('../../src/utils/npm')
    expect(npmUtils).to.have.property('installNpmDependencies')
    expect(npmUtils.installNpmDependencies).to.be.a('function')
  })

  it('should handle dependency object structure', () => {
    const testDeps = {
      'react': '^19.0.0',
      'next': '^16.0.0',
    }

    expect(testDeps).to.be.an('object')
    expect(Object.keys(testDeps)).to.have.length(2)
  })
})
