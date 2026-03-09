import {Command, Flags} from '@oclif/core'
import {confirm} from '@inquirer/prompts'
import * as fse from 'fs-extra'
import * as path from 'node:path'

import {
  JewlConfig,
  getConfig,
  getLocalComponentPath,
  getRepositoryComponentPath,
} from '../utils/config'

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

    if (!config.componentMapping || config.componentMapping.length === 0) {
      this.log('No components have been cloned yet. Nothing to reset.')
      return
    }

    this.warn('⚠️  WARNING: This command will permanently delete any local changes to the following components:')
    this.log('')
    for (const mapping of config.componentMapping) {
      this.log(`  - ${mapping.localName} (from ${mapping.jewlDirectory}/${mapping.jewlName})`)
    }
    this.log('')

    if (!flags.force) {
      const shouldContinue = await confirm({
        message: 'Are you sure you want to RESET these components with the versions from .jewl-repo? All local changes will be LOST.',
        default: false,
      })

      if (!shouldContinue) {
        this.log('Operation cancelled. No components were modified.')
        return
      }
    }

    let syncedCount = 0
    let failedCount = 0

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
