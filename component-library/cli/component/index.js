/* global process module */

const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const createComponent = function(componentPath, replace, componentName, isSub=false) {
    const from = path.join(process.cwd(), 'cli', 'component', replace);
    const to = path.join(componentPath);
    fs.copySync(path.join(from), path.join(to), {filter: (src, dest) => {
        const filename = path.basename(src);
        // SubComponents don't need a package.json
        return !isSub || filename !== 'package.json';
    }});

    remapComponents(componentPath, replace, componentName);
};

const deleteComponent = function(componentPath) {
    const componentToDelete = path.join(componentPath);
    fs.removeSync(componentToDelete);
};

const remapComponents = function(componentPath, replace, componentName) {
    const files = glob.sync(`${componentPath}/**/*`);
    files.map((file) => {
        const componentFile = path.join(file);
        replaceInFile(componentFile, replace, componentName);

        const replacedFile = componentFile.replace(replace, componentName);
        fs.renameSync(componentFile, replacedFile);
    });
};

const replaceInFile = function(file, replace, replacement) {
    const content = fs.readFileSync(file, 'utf8');
    const re = new RegExp(replace, 'g');
    const result = content.replace(re, replacement);
    fs.writeFileSync(file, result, 'utf8');
};

module.exports = {
    createComponent,
    deleteComponent,
};
