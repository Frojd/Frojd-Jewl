/* global process module */

const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const createComponent = function(componentPath, replace, componentName, storyTitle) {
    const from = path.join(process.cwd(), 'cli', 'component', replace);
    const to = path.join(componentPath);
    fs.copySync(path.join(from), path.join(to));

    remapComponents(componentPath, replace, componentName, storyTitle);
};

const deleteComponent = function(componentPath) {
    const componentToDelete = path.join(componentPath);
    fs.removeSync(componentToDelete);
};

const remapComponents = function(componentPath, replace, componentName, storyTitle) {
    const files = glob.sync(`${componentPath}/**/*`);
    files.map((file) => {
        const componentFile = path.join(file);
        replaceInFile(componentFile, replace, componentName);
        replaceInFile(componentFile, '__StoryTitle', storyTitle);

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
