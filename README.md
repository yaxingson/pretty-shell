<p align="center">
  <img src="https://imgbed.yiyunt.cn/img/885" />
</p>

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
