jewl-cli
========

The CLI tool for [Jewl](https://github.com/Frojd/Frojd-Jewl). For overview on the projects, see [Jewl README](https://github.com/Frojd/Frojd-Jewl/README.md).

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/jewl-cli.svg)](https://npmjs.org/package/jewl-cli)
[![Downloads/week](https://img.shields.io/npm/dw/jewl-cli.svg)](https://npmjs.org/package/jewl-cli)
[![License](https://img.shields.io/npm/l/jewl-cli.svg)](https://github.com/Frojd/Frojd-Jewl/blob/master/package.json)

<!-- toc -->
* [Overview](#overview)
* [Project setup / Usage](#project-setup--usage)
* [Settings: jewlconfig.json](#settings-jewlconfigjson)
* [Commands](#commands)
<!-- tocstop -->

# Overview
<!-- overview -->
This CLI tool is intended to make it easy to get boilerplate components from the _Jewl Component Library_ into your
project. The bread and butter of the tool is the `clone` command which downloads and renames a component as well as
installing its dependencies (Other components and npm-dependencies).

To make workflow fast and network independent, the _Jewl Component Library_ is downloaded locally and the local copy
is used as source for the `clone` command. To update the local library with remote changes, run the `update`-command

<!-- overviewstop -->

# Project setup / Usage
<!-- projectsetup -->
Jewl is intended to be used on a project basis and not as a global install. To set it up in your project:
1) Run `npm i --save-dev @frojdagency/jewl-cli`
2) Add `"jewl": "jewl-cli"` to your `scripts` property in your package.json
3) Run `npm run jewl init` in your project and follow the interactive CLI interface
4) jewl added `jewlconfig.json` to your VCS. Make your first commit `git commit -m "Set up Jewl"`

From here on, you could explore the available components, containers and layouts via `npm run jewl list` and clone them 
via `npm run jewl clone Hero MyHero`

View all available commands with `npm run jewl`

See [Commands](#commands) for further documentation

<!-- projectsetupstop -->

# Settings: jewlconfig.json
<!-- settings -->
The `jewlconfig.json` is created via the `init` command and should be located in your frontend project root folder,
next to your `package.json`-file. It has the following properties:

`componentPaths` *Object{components: string, containers: string, layouts: string}*: Contains the relative paths to the folder containing React components, containers and layout in your project. Defaults to *./app/components*, *./app/containers* and *./app/layouts*

`repository` *string*: The remote repository to use. Defaults to *https://github.com/Frojd/Frojd-Jewl.git*

`repositoryBranch` *string*: Which branch to use of the remote Jewl repository. Defaults to *master*

`repositoryPaths` *Object{components: string, containers: string, layouts: string}*: Contains the paths in the repository where components, containers and layouts should be fetched from. Defaults to *component-library/app/components*, *component-library/app/containers* and *component-library/app/layouts*

`componentMapping` *Array[{jewlName: string, jewlDirectory: string, localName: string}]*: The component mapping is a list of all components installed via jewl and is used to give the user helpful information about dependencies when using the `clone` command. It is not intended
to be configured manually, rather it is automatically updated when the cli is used. However, if you are installing Jewl on an
existing frontend project, manual mappings could be added to resolve name-collisions with Jewl component dependencies

<!-- settingsstop -->

# Commands
<!-- commands -->
* [`jewl-cli clone COMPONENTNAME [NEWNAME]`](#jewl-cli-clone-componentname-newname)
* [`jewl-cli help [COMMAND]`](#jewl-cli-help-command)
* [`jewl-cli init`](#jewl-cli-init)
* [`jewl-cli list`](#jewl-cli-list)
* [`jewl-cli update`](#jewl-cli-update)

## `jewl-cli clone COMPONENTNAME [NEWNAME]`

Clone components from the Jewl Component Library to your local project

```
USAGE
  $ jewl-cli clone COMPONENTNAME [NEWNAME] [--help]

ARGUMENTS
  COMPONENTNAME  (required) The name of the component in the Jewl Component Library
  NEWNAME        The name of the newly created component. Defaults to COMPONENTNAME

FLAGS
  --help  Show CLI help.

DESCRIPTION
  Clone components from the Jewl Component Library to your local project

EXAMPLES
  $ jewl clone Header

  $ jewl clone Header HeaderLarge
```

_See code: [src/commands/clone.ts](https://github.com/Frojd/Frojd-Jewl/blob/v0.0.9/src/commands/clone.ts)_

## `jewl-cli help [COMMAND]`

Display help for jewl-cli.

```
USAGE
  $ jewl-cli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for jewl-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.21/src/commands/help.ts)_

## `jewl-cli init`

Initialize or update settings for your Jewl project. Creates a config file in your current working directory. If file already exists, this command overwrites the properties changed in the interactive cli interface

```
USAGE
  $ jewl-cli init

DESCRIPTION
  Initialize or update settings for your Jewl project. Creates a config file in your current working directory. If file
  already exists, this command overwrites the properties changed in the interactive cli interface

EXAMPLES
  $ jewl-cli init
```

_See code: [src/commands/init.ts](https://github.com/Frojd/Frojd-Jewl/blob/v0.0.9/src/commands/init.ts)_

## `jewl-cli list`

Lists available components in the Jewl Component Library

```
USAGE
  $ jewl-cli list

DESCRIPTION
  Lists available components in the Jewl Component Library

EXAMPLES
  $ jewl list
```

_See code: [src/commands/list.ts](https://github.com/Frojd/Frojd-Jewl/blob/v0.0.9/src/commands/list.ts)_

## `jewl-cli update`

Sync the latest changes from the Jewl Component Library

```
USAGE
  $ jewl-cli update

DESCRIPTION
  Sync the latest changes from the Jewl Component Library

EXAMPLES
  $ jewl-cli update
```

_See code: [src/commands/update.ts](https://github.com/Frojd/Frojd-Jewl/blob/v0.0.9/src/commands/update.ts)_
<!-- commandsstop -->
