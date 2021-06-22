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
$ npm install -g jewl-cli
$ jewl-cli COMMAND
running command...
$ jewl-cli (-v|--version|version)
jewl-cli/0.0.1 darwin-x64 node-v12.19.1
$ jewl-cli --help [COMMAND]
USAGE
  $ jewl-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jewl-cli hello [FILE]`](#jewl-cli-hello-file)
* [`jewl-cli help [COMMAND]`](#jewl-cli-help-command)

## `jewl-cli hello [FILE]`

describe the command here

```
USAGE
  $ jewl-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ jewl-cli hello
  hello world from ./src/init.ts!
```

_See code: [src/commands/init.ts](https://github.com/Frojd/Frojd-Jewl/blob/v0.0.1/src/commands/hello.ts)_

## `jewl-cli help [COMMAND]`

display help for jewl-cli

```
USAGE
  $ jewl-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
