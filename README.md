<h1 align="center">
  <img src="./logo.png" />
  <p>
    <a><img src="https://img.shields.io/github/actions/workflow/status/shelljs/shelljs/main.yml?style=flat-square&logo=github" /></a>
    <a><img src="https://img.shields.io/codecov/c/github/shelljs/shelljs/master.svg?style=flat-square&label=coverage" /></a>
    <a><img src="https://img.shields.io/npm/v/shelljs.svg?style=flat-square" /></a>
    <a><img src="https://img.shields.io/npm/dm/shelljs.svg?style=flat-square" /></a>
    <a><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" /></a>
  </p>
</h1>

## Quick start

### Install 

```shell
# via npm
$ npm i pretty-shell --save
$ npm i pretty-shell -g

```

### Usage

Command line：

```shell
$ shx mkdir -p foo
$ shx touch foo/bar.txt
$ shx rm -rf foo

```

Node API:

```js
const shell = require('pretty-shell')
const { mkkdir, touch , rm } = require('pretty-shell')

```

### Configuration

## Commands

| category  | command  | description |
|  -----    |  ------  |  -----      |
|  fs       |  cd        |  Change the shell working directory. |
|           |  ls          | List information about the FILEs (the current directory by default). |
|           |  cat         | Concatenate FILE(s) to standard output. |
|           |  cp         | Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY. |
|           |  find         ||
|           |  pwd          | Print the name of the current working directory. |
|           | mkdir   | Create the DIRECTORY(ies), if they do not already exist. |
|   | rm | Remove (unlink) the FILE(s). |
|   | rmdir  | Remove the DIRECTORY(ies), if they are empty. |
|   | mv | Rename SOURCE to DEST, or move SOURCE(s) to DIRECTORY. |
|   | grep  | PATTERNS can contain multiple patterns separated by newlines. |
|   | chmod | Change the mode of each FILE to MODE. |
|   | chown | Change the owner and/or group of each FILE to OWNER and/or GROUP. |
|   | touch | Update the access and modification times of each FILE to the current time. |
|   | whereis | Locate the binary, source, and manual-page files for a command. |
|   | find | Search for files in a directory hierarchy. |
|   net     |  ifconfig     ||
|           |  netstat     ||
|           |  ping     ||
|  os       |  date     ||
|           |  free     ||
|           |  uname     ||
|           | nohup    ||

## Examples

```js
const { find } = require('pretty-shell')

```
