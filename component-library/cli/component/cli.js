/**
 * CLI for scaffolding new components
 */

/* global process */

const path = require('path');
const fs = require('fs-extra');
const program = require('commander');
const { createComponent, deleteComponent } = require('./');

const getComponentPath = (component, subComponents, options) => {
    const defaultFolder = options.container ? 'containers' : 'components';
    const folder = options.folder ? options.folder : defaultFolder;

    const rootFolder = path.join(
        process.cwd(),
        'app',
        folder
    );
    const dirs = [component, ...subComponents];
    const componentPath = path.join(
        rootFolder,
        component,
        ...subComponents
    );

    return {componentPath, dirs, folder};
};

program
    .command('new <component> [subComponent...]')
    .description('Creates a new component')
    .option('-c, --container', 'Create container component')
    .option('-f, --folder <folder>', 'Change components folder')
    .action((component, subComponents, options) => {
        const {
            componentPath,
            dirs,
            folder,
        } = getComponentPath(component, subComponents, options);
        const replace = options.container ? '__Container' : '__Component';

        const componentName = dirs[dirs.length - 1];
        const isSub = subComponents.length > 0;

        if (fs.existsSync(componentPath)) {
            throw new Error(`Component already exists at: ${componentPath}`);
        }

        createComponent(componentPath, replace, componentName, isSub);
        console.log(`Created new component at ${componentPath}`);
    });

program
    .command('delete <component> [subComponent...]')
    .description('Deletes a component')
    .option('-c, --container', 'Create container component')
    .option('-f, --folder <folder>', 'Change components folder')
    .action((component, subComponents, options) => {
        const {componentPath} = getComponentPath(component, subComponents, options);

        if (!fs.existsSync(componentPath)) {
            throw new Error(`Component doesn't exist at: ${componentPath}`);
        }

        deleteComponent(componentPath);
        console.log(`Delete component at ${componentPath}`);
    });

program.parse(process.argv);
