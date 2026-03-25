import {addDependency} from "nypm";

interface Logger {
  log: (message: string) => void;
}

export async function installNpmDependencies(dependencies: Record<string, string>, asDev = true, logger: Logger) {
  for (const dep in dependencies) {
    if (Object.prototype.hasOwnProperty.call(dependencies, dep)) {
      logger.log("Ensuring " + dep + " is installed...")
      await addDependency(dep + '@' + dependencies[dep], {dev: asDev, silent: true})
    }
  }
}
