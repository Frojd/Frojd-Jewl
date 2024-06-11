# Jewl
Jewl is a component library that gives you a good baseline for various types of components.
Rather than importing external components in your project, which make them hard to override,
Jewl takes a scaffolding approach that let you override whatever you want.

The components are accessible and performant. We make them as simple as possible, with a neutral design,
so that they are easy to continue working with after you import them.

## Motivation
There are a lot of react component libraries on the market, as well as bootstraps and similar.
While they work very well for rapid prototyping and may take you to market quickly, we found
most of them hard to customize to our specific needs and the project quickly get hard to maintain.

Jewl is also an attempt to make it easier for developers and designer to work closely, which is why
we bundle a template Sketch-file to help you get started.

## Overview
Jewl consists of a template project, CLI tool and a central repository of components

### Template project
Our template project is based on [Create react app](https://github.com/facebook/create-react-app)

@todo, write more on the difference

### CLI
@todo, We provide a interactive cli for scaffolding projects aswell as containers and components based on Commander, Inquirer

Commands:
`jewl init` -- Initialize jewl project, adds a jewlconfig.js file in current folder
`jewl new [Component]` -- Create a new component including its dependencies
`jewl help` -- Display available commands 

### Component library

@todo, Hosted on github, Short description, link to live styleguide

## Git hooks

We use git-hooks to streamline and automate certain functions, such as version bumping and pre hooks for code validation and tests. If you want to bypass any of them append the `--no-verify` flag (example: `git push --no-verify`)

### Hook: Run tests pre push

This hook will run the test suite before every push.

```bash
chmod +x $PWD/git-hooks/pre-push.sh
ln -nfs $PWD/git-hooks/pre-push.sh .git/hooks/pre-push
```

Windows
```bash
ln -nfs %cd%/.githooks/pre-push.sh .git/hooks/pre-push
```
Note: This requires npm

### Hook: Frontend tests

Macintosh
```bash
chmod +x $PWD/git-hooks/pre-commit.sh
ln -nfs $PWD/git-hooks/pre-commit.sh .git/hooks/pre-commit
```

Windows
```bash
ln -nfs %cd%/.githooks/pre-commit.sh .git/hooks/pre-commit
```
Note: This requires npm

### Where to go from here
- [CLI docs (Getting started)](./cli/README.md)

### Roadmap
At the moment we only support React, but we are looking in to the posibility to make it possible
to make some generalized way to export to multiple formats.

### Challenges
- How do we write components in a way that makes them easy to develop but at the same time allows for scaffolding? Introduce some template-like syntax that is still a valid JS-class name? (e.g. `class $$Accordion$$`)
- How do we handle component dependencies? Should we handle component external deps i `component/package.json` instead of docs and make the CLI ask if we wanna add them on usage?
