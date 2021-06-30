import {expect, test} from '@oclif/test'

describe('list', () => {
  test
  .stdout()
  .command(['list'])
  // .command(['hello', '--name', 'jeff'])
  .it('lists components', ctx => {
    // console.log(ctx.stdout)
    expect(ctx.stdout).to.contain('hello world')
  })
})
