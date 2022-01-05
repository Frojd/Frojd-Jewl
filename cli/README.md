jewl-cli
========

CLI tool for Jewl. Import your components with ease

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/jewl-cli.svg)](https://npmjs.org/package/jewl-cli)
[![Downloads/week](https://img.shields.io/npm/dw/jewl-cli.svg)](https://npmjs.org/package/jewl-cli)
[![License](https://img.shields.io/npm/l/jewl-cli.svg)](https://github.com/Frojd/Frojd-Jewl/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @frojdagency/jewl-cli
$ jewl-cli COMMAND
running command...
$ jewl-cli (--version)
@frojdagency/jewl-cli/0.0.2 darwin-arm64 node-v14.18.2
$ jewl-cli --help [COMMAND]
USAGE
  $ jewl-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jewl-cli clone COMPONENTNAME [NEWNAME]`](#jewl-cli-clone-componentname-newname)
* [`jewl-cli help [COMMAND]`](#jewl-cli-help-command)
* [`jewl-cli init`](#jewl-cli-init)
* [`jewl-cli list`](#jewl-cli-list)
* [`jewl-cli plugins`](#jewl-cli-plugins)
* [`jewl-cli plugins:inspect PLUGIN...`](#jewl-cli-pluginsinspect-plugin)
* [`jewl-cli plugins:install PLUGIN...`](#jewl-cli-pluginsinstall-plugin)
* [`jewl-cli plugins:link PLUGIN`](#jewl-cli-pluginslink-plugin)
* [`jewl-cli plugins:uninstall PLUGIN...`](#jewl-cli-pluginsuninstall-plugin)
* [`jewl-cli plugins update`](#jewl-cli-plugins-update)
* [`jewl-cli update`](#jewl-cli-update)

## `jewl-cli clone COMPONENTNAME [NEWNAME]`

Clone components

```
USAGE
  $ jewl-cli clone [COMPONENTNAME] [NEWNAME]

DESCRIPTION
  Clone components

EXAMPLES
  $ jewl clone Header

  $ jewl clone Header HeaderLarge
```

_See code: [dist/commands/clone.ts](https://github.com/Frojd/Frojd-Jewl/blob/v0.0.2/dist/commands/clone.ts)_

## `jewl-cli help [COMMAND]`

Display help for jewl-cli.

```
USAGE
  $ jewl-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for jewl-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.9/src/commands/help.ts)_

## `jewl-cli init`

Initialize or update settings for your jewl project. Creates/updates config file in your current working directory

```
USAGE
  $ jewl-cli init

DESCRIPTION
  Initialize or update settings for your jewl project. Creates/updates config file in your current working directory

EXAMPLES
  $ jewl-cli init
```

_See code: [dist/commands/init.ts](https://github.com/Frojd/Frojd-Jewl/blob/v0.0.2/dist/commands/init.ts)_

## `jewl-cli list`

Lists available components

```
USAGE
  $ jewl-cli list

DESCRIPTION
  Lists available components

EXAMPLES
  $ jewl list
```

_See code: [dist/commands/list.ts](https://github.com/Frojd/Frojd-Jewl/blob/v0.0.2/dist/commands/list.ts)_

## `jewl-cli plugins`

List installed plugins.

```
USAGE
  $ jewl-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ jewl-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `jewl-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ jewl-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ jewl-cli plugins:inspect myplugin
```

## `jewl-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ jewl-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ jewl-cli plugins add

EXAMPLES
  $ jewl-cli plugins:install myplugin 

  $ jewl-cli plugins:install https://github.com/someuser/someplugin

  $ jewl-cli plugins:install someuser/someplugin
```

## `jewl-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ jewl-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ jewl-cli plugins:link myplugin
```

## `jewl-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ jewl-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ jewl-cli plugins unlink
  $ jewl-cli plugins remove
```

## `jewl-cli plugins update`

Update installed plugins.

```
USAGE
  $ jewl-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `jewl-cli update`

Sync the lates changes from the remote component library

```
USAGE
  $ jewl-cli update

DESCRIPTION
  Sync the lates changes from the remote component library

EXAMPLES
  $ jewl-cli update
```

_See code: [dist/commands/update.ts](https://github.com/Frojd/Frojd-Jewl/blob/v0.0.2/dist/commands/update.ts)_
<!-- commandsstop -->
