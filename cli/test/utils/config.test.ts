import {expect, test} from '@oclif/test'
import {getConfig} from '../../src/utils/config'
import * as fs from 'fs'
import {CONFIG_FILE_NAME} from '../../src/constants'

describe('config', () => {
  test.it('Raise no local override config found when uninitialized', () => {
    expect(getConfig).to.throw('No local config found')
  })

  describe('with config', () => {
    before(() => {
      fs.writeFileSync(CONFIG_FILE_NAME, JSON.stringify({componentPath: 'component/path'}))
    })
    after(() => {
      fs.unlinkSync(CONFIG_FILE_NAME)
    })

    test.it('Merge local and default config', () => {
      const config = getConfig()
      expect(config.componentPath).to.equal('component/path')
    })
  })
})
