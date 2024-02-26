import {expect, test} from '@oclif/test'
import {getConfig} from '../../src/utils/config'
import * as fs from 'node:fs'
import {CONFIG_FILE_NAME} from '../../src/constants'

describe('Config module', () => {
  test.it('Raise no local override config found when uninitialized', () => {
    expect(getConfig).to.throw('No local config found')
  })

  describe('With config existant', () => {
    before(() => {
      fs.writeFileSync(CONFIG_FILE_NAME, JSON.stringify({
        componentPaths: {
          components: 'components/path',
          containers: 'containers/path',
          layouts: 'layouts/path',
        },
      }))
    })
    after(() => {
      fs.unlinkSync(CONFIG_FILE_NAME)
    })

    test.it('Merge local and default config', () => {
      const config = getConfig()
      expect(config.componentPaths.components).to.equal('components/path')
    })
  })
})
