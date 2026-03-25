import {Command, Flags} from '@oclif/core'
import {confirm} from '@inquirer/prompts'
import * as fse from 'fs-extra'
import * as path from 'node:path'

import {
  JewlConfig,
  getConfig,
  getLocalComponentPath,
  getRepositoryComponentPath,
  getBasePath,
} from '../utils/config'
import {REPO_PATH} from '../constants'

export default class Reset extends Command {
  static description = 'Reset all cloned components by overwriting them with the versions from the Jewl Component Library. WARNING: This will permanently delete any local changes you have made to these components.'

  static examples = [
    '$ jewl-cli reset',
    '$ jewl-cli reset --force',
  ]

  static flags = {
    force: Flags.boolean({
      char: 'f',
      description: 'Skip confirmation prompts and sync all components',
      default: false,
    }),
  }

  async run() {
    const {flags} = await this.parse(Reset)
    let config: JewlConfig

    try {
      config = getConfig()
    } catch {
      this.error('No local configuration file found. Try "jewl-cli init"')
    }

    // Shared directories that should be reset
    const sharedDirs = ['_styleguide', 'styles', 'i18n', 'assets']

    this.warn('⚠️  WARNING: This command will permanently delete any local changes to:')
    this.log('')
    this.log('Shared directories:')
    for (const dir of sharedDirs) {
      this.log(`  - ${dir}/`)
    }

    if (config.componentMapping && config.componentMapping.length > 0) {
      this.log('')
      this.log('Components:')
      for (const mapping of config.componentMapping) {
        this.log(`  - ${mapping.localName} (from ${mapping.jewlDirectory}/${mapping.jewlName})`)
      }
    }
    this.log('')

    if (!flags.force) {
      const shouldContinue = await confirm({
        message: 'Are you sure you want to RESET these directories and components with the versions from .jewl-repo? All local changes will be LOST.',
        default: false,
      })

      if (!shouldContinue) {
        this.log('Operation cancelled. Nothing was modified.')
        return
      }
    }

    let syncedCount = 0
    let failedCount = 0

    // First, reset shared directories
    const basePath = getBasePath()
    const localBasePath = path.join(basePath, config.basePath)
    const repoBasePath = path.join(basePath, REPO_PATH, config.repositoryPaths.basePath)

    this.log('Resetting shared directories...')
    for (const dir of sharedDirs) {
      try {
        const sourceDir = path.join(repoBasePath, dir)
        const targetDir = path.join(localBasePath, dir)

        if (!fse.existsSync(sourceDir)) {
          this.warn(`Source directory not found: ${dir}. Skipping...`)
          continue
        }

        this.log(`Resetting ${dir}/...`)

        // Remove old directory
        if (fse.existsSync(targetDir)) {
          fse.removeSync(targetDir)
        }

        // Copy new version
        fse.copySync(sourceDir, targetDir)
        this.log(`✓ ${dir}/ reset successfully`)
        syncedCount++

      } catch (error) {
        this.warn(`Failed to reset ${dir}/: ${error}`)
        failedCount++
      }
    }

    this.log('')
    this.log('Resetting components...')

    for (const mapping of config.componentMapping) {
      try {
        const repoPath = getRepositoryComponentPath(mapping.jewlDirectory)
        const sourceComponent = path.join(repoPath, mapping.jewlName)
        const localPath = getLocalComponentPath(mapping.jewlDirectory)
        const targetComponent = path.join(localPath, mapping.localName)

        if (!fse.existsSync(sourceComponent)) {
          this.warn(`Source component not found: ${mapping.jewlDirectory}/${mapping.jewlName}. Skipping...`)
          failedCount++
          continue
        }

        this.log(`Resetting ${mapping.localName}...`)

        // Remove old component
        if (fse.existsSync(targetComponent)) {
          fse.removeSync(targetComponent)
        }

        // Copy new version
        fse.copySync(sourceComponent, targetComponent)

        // If the component was renamed, update import paths
        if (mapping.jewlName !== mapping.localName) {
          this.log(`Renaming component references from ${mapping.jewlName} to ${mapping.localName}...`)
          await this.replaceComponentName(targetComponent, mapping.jewlName, mapping.localName)
        }

        syncedCount++
        this.log(`✓ ${mapping.localName} reset successfully`)

      } catch (error) {
        this.warn(`Failed to reset ${mapping.localName}: ${error}`)
        failedCount++
      }
    }

    this.log('')
    this.log(`Reset complete: ${syncedCount} reset, ${failedCount} failed`)

    if (failedCount > 0) {
      this.log('Run "jewl-cli update" to refresh the local repository and try again.')
    }
  }

  private async replaceComponentName(componentPath: string, oldName: string, newName: string) {
    const files = fse.readdirSync(componentPath)

    for (const file of files) {
      const filePath = path.join(componentPath, file)
      const stat = fse.statSync(filePath)

      if (stat.isDirectory()) {
        await this.replaceComponentName(filePath, oldName, newName)
      } else if (file.includes(oldName)) {
        // Rename file if it contains the old component name
        const newFileName = file.replace(oldName, newName)
        const newFilePath = path.join(componentPath, newFileName)
        fse.renameSync(filePath, newFilePath)

        // Replace content in the renamed file
        await this.replaceInFile(newFilePath, oldName, newName)
      } else if (/\.(js|jsx|ts|tsx|scss|css|md)$/.test(file)) {
        // Replace content in relevant files
        await this.replaceInFile(filePath, oldName, newName)
      }
    }
  }

  private async replaceInFile(filePath: string, oldName: string, newName: string) {
    try {
      let content = fse.readFileSync(filePath, 'utf8')

      if (content.includes(oldName)) {
        content = content.replaceAll(oldName, newName)
        fse.writeFileSync(filePath, content, 'utf8')
      }
    } catch {
      // Silently skip files that can't be processed (binary files, etc.)
    }
  }
}
