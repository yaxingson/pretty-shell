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
|  fs       |  cd        ||
|           |  ls          ||
|           |  cat         ||
|           |  chmod        ||
|           |  cp         ||
|           |  find         ||
|           |  pwd          ||
|   net     |  ifconfig     ||
|           |  netstat     ||
|           |  ping     ||
|  os       |  date     ||
|           |  free     ||
|           |  uname     ||

## Examples

```js
const { find } = require('pretty-shell')

```
