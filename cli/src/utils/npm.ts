import {addDependency, addDevDependency, ensureDependencyInstalled, installDependencies} from "nypm";
import * as path from 'node:path'
import * as fs from "fs";

export async function installNpmDependencies(dependencies: any, asDev = true, logger: any) {
  for (const dep in dependencies) {
    if (Object.prototype.hasOwnProperty.call(dependencies, dep)) {
      logger.log("Ensuring " + dep + " is installed...")
      await addDependency(dep + '@' + dependencies[dep], {dev: asDev})
    }
  }
}
