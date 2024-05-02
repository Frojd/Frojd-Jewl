import {Command, ux} from '@oclif/core'

import * as git from 'isomorphic-git'
import http from 'isomorphic-git/http/node'
import * as fs from "fs";
import * as fse from 'fs-extra'
import * as path from 'node:path'

import {CONFIG_FILE_NAME, REPO_PATH} from '../constants'
import {JewlConfig, getConfig, storeConfig} from '../utils/config'
import {installNpmDependencies} from "../utils/npm";
import {glob} from "glob";

export default class Init extends Command {
  static description = 'Initialize or update settings for your Jewl project. ' +
    'Creates a config file in your current working directory. If file already exists, this command ' +
    'overwrites the properties changed in the interactive cli interface'

  static examples = [
    '$ jewl-cli init',
  ]

  async run() {
    // Write config

    let _config = {
      basePath: "app",
    }

    try {
      _config = getConfig()
      this.log('Found config in project, using as default values...')
    } catch {
      this.log('Initializing Jewl...')
    }

    const basePath = await ux.prompt('Base path for jewl-components (Where your components-folder is located. Set "." for root-folder)?', {default: _config.basePath})

    const config: JewlConfig = storeConfig({..._config, basePath: basePath})

    await this.maybeCloneRepo(config)
    await this.maybeUpdateGitignore()
    await this.maybeInstallNPMDeps()

    await this.maybeReplaceFolders([
      "_styleguide",
      "assets",
      "i18n",
      "styles"
    ], config.basePath, config.repositoryPaths.basePath)

    await this.maybeReplaceFolders([
      ".storybook",
    ], ".", config.repositoryPaths.root, true)


    // Print success message
    this.log(`Jewl initialized: "${CONFIG_FILE_NAME}" has been created/updated in current working directory and local repository updated.`)
    this.log(`${CONFIG_FILE_NAME} should be checked in to you repository and ${REPO_PATH} should be in your .gitignore: This cli just added it for you`)
  }

  private async maybeCloneRepo(config: JewlConfig) {
    if (fs.existsSync(REPO_PATH)) {
      this.log('Local repository exists, refreshing...')
      fs.rmSync(REPO_PATH, {recursive: true, force: true})
    } else {
      this.log('Cloning from remote repository...')
    }

    try {
      await git.clone({fs, http, dir: REPO_PATH, url: config.repository})
    } catch (e:unknown) {
      this.error('Failed to clone repository: ' + e)
    }
  }

  private async maybeUpdateGitignore() {
    if (fs.existsSync(".gitignore")) {
      const gitignore = fs.readFileSync(".gitignore")
      if (gitignore.indexOf(".jewl-repo") == -1) {
        this.log('Appending .gitignore')
        fs.appendFileSync(".gitignore", "#Added by jewl-cli\n.jewl-repo")
      } else {
        this.log('.gitignore contains .jewl-repo. Skipping...')
      }
    } else {
      this.log('Creating .gitignore')
      fs.writeFileSync(".gitignore", "#Added by jewl-cli\n.jewl-repo")
    }
  }

  private async maybeInstallNPMDeps() {
    const devDeps = {
      "@storybook/addon-a11y": "^7.6.17",
      "@storybook/addon-actions": "^7.6.17",
      "@storybook/addon-essentials": "^7.6.17",
      "@storybook/addon-links": "^7.6.17",
      "@storybook/nextjs": "^7.6.17",
      "@storybook/react": "^7.6.17",
      "@svgr/webpack": "*",
      "@whitespace/storybook-addon-html": "*",
      "@emotion/is-prop-valid": "*",
      "storybook": "^7.6.17",
      "sass": "*",
    }

    await installNpmDependencies(devDeps, true, this)
  }

  private async maybeReplaceFolders(folders: Array<string>, localPath: string, repoPath: string, replaceBasePath= false) {
    const config = getConfig()

    for (const x of folders) {
      const fullLocalPath = path.join(localPath, x)
      let shouldReplace = "y"
      let exists = fs.existsSync(fullLocalPath)

      if (exists) {
        shouldReplace = await ux.prompt(`${fullLocalPath} already exists in your repo. Should Jewl replace it? (y/n)?`, {default: shouldReplace})

        if (shouldReplace == "y") {
          this.log(`Purging existing ${fullLocalPath}...`)
          fs.rmSync(fullLocalPath, {recursive: true, force: true})
        }
      }

      if (shouldReplace != "y") {
        continue
      }

      this.log(`Installing ${fullLocalPath}...`)
      fse.copySync(path.join(REPO_PATH, path.join(repoPath, x)), fullLocalPath)

      if (replaceBasePath) {
        const jsfiles = await glob(fullLocalPath + '/**/*.{js,ts,scss}', { ignore: 'node_modules/**' })
        for (const file of jsfiles) {

          this.log(`Replacing base-paths in ${file}...`)
          const data = fs.readFileSync(file);
          fs.rmSync(file)

          data.toString().split("\r\n").forEach(function(line) {
            line = line.replaceAll("/app/", `/${config.basePath}/`);

            fs.appendFileSync(file, line)
          });
        }
      }
    }
  }
}
