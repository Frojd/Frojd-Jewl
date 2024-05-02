import {addDependency, addDevDependency, ensureDependencyInstalled, installDependencies} from "nypm";
import * as path from 'node:path'
import * as fs from "fs";

export async function installNpmDependencies(dependencies: any, asDev = true, logger: any) {
    const install = []
    for (const dep in dependencies) {
      if (Object.prototype.hasOwnProperty.call(dependencies, dep)) {
        if (!await ensureDependencyInstalled(dep)) {
          logger.log(dep + " is not installed. Installing...")
          install.push(dep + '@' + dependencies[dep])

          const modulePath = path.join("node_modules", dep)
          logger.debug("Looking if " + modulePath + " exists")

          if (fs.existsSync(modulePath)) {
            logger.debug(dep + ' is locally installed but not in package.json. Removing and installing it with npm i --save...')
            fs.rmSync(modulePath, {force: true, recursive: true})
          }
        }
      }
    }

    if (install.length < 1) {
      return;
    }

    logger.log('Installing npm dependencies...')

    try {
      if (asDev) {
        await addDevDependency(install)
      } else {
        await addDependency(install)
      }
      await installDependencies()
    } catch (e) {
      logger.warn("Failed to install deps. Please install the following manually: " + install.join(", "))
    }
  }
