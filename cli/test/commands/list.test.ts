import {expect, test} from '@oclif/test'
import * as fs from 'node:fs'
import * as path from 'node:path'
import {CONFIG_FILE_NAME, REPO_PATH} from '../../src/constants'

describe('List with config and repo', () => {
  before(() => {
    fs.writeFileSync(CONFIG_FILE_NAME, JSON.stringify({
      componentPaths: {
        components: 'components/path',
        containers: 'containers/path',
        layouts: 'layouts/path',
      },
      repositoryPaths: {
        components: '',
        containers: '',
        layouts: '',
      },
    }))
    fs.mkdirSync(path.join(REPO_PATH))
    fs.mkdirSync(path.join(REPO_PATH, 'Component1'))
    fs.mkdirSync(path.join(REPO_PATH, 'Component2'))
  })

  after(() => {
    fs.unlinkSync(CONFIG_FILE_NAME)
    fs.readdirSync(REPO_PATH).map(x => fs.rmdirSync(path.join(REPO_PATH, x)))
    fs.rmdirSync(REPO_PATH)
  })

  test
  .stdout()
  .command(['list'])
  .it('Lists components', ctx => {
    expect(ctx.stdout).to.contain('Component1')
    expect(ctx.stdout).to.contain('Component2')
  })
})
