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
|   | zip | Package and compress (archive) files. |
|   | unzip | List, test and extract compressed files in a ZIP archive. |
|   | gzip  | Compress or uncompress FILEs (by default, compress FILES in-place). |
|   | tar   | An archiving utility. |
|   | tail  | Print the last 10 lines of each FILE to standard output. |
|   | ln | Make links between files. |
|   | stat | Display file or file system status. |
|   | egrep | PATTERNS can contain multiple patterns separated by newlines. |
|   | more  | A file perusal filter for CRT viewing. |
|   | less  | |
|   | head | Print the first 10 lines of each FILE to standard output. |
|   | tail | Print the last 10 lines of each FILE to standard output. |
|   | tac  | Write each FILE to standard output, last line first. |
|   | nl   | Write each FILE to standard output, with line numbers added. |
|   | wc   | Print newline, word, and byte counts for each FILE, and a total line if more than one FILE is specified. |
|   | split | Output pieces of FILE to PREFIXaa, PREFIXab, ... |
|   | cut  | Print selected parts of lines from each FILE to standard output. |
|   | paste | Write lines consisting of the sequentially corresponding lines from each FILE, separated by TABs, to standard output. |
|   | sort | Write sorted concatenation of all FILE(s) to standard output. |
|   | uniq | Filter adjacent matching lines from INPUT (or standard input), writing to OUTPUT (or standard output). |
|   | diff | Compare FILES line by line. |
|   | patch |  Apply a diff file to an original. |
|   | join  | For each pair of input lines with identical join fields, write a line to standard output. |
|   | tr    | Translate, squeeze, and/or delete characters from standard input, writing to standard output. |
|   net     |  ifconfig     ||
|           |  netstat     ||
|           |  ping     ||
|  os       |  date     ||
|           |  free     ||
|           |  uname     ||
|           | nohup    ||
|   | df | Show information about the file system on which each FILE resides, or all file systems by default. |
|   | top | Display Linux processes. |
|   | free | Display amount of free and used memory in the system. |
|   | history |  Display or manipulate the history list. |
|   | ps | report a snapshot of the current processes. |
|   | systemctl |  Query or send control commands to the system manager. |
|   | help | Display information about builtin commands. |
|   | w | Show who is logged on and what they are doing. |
|   | last | Show a listing of last logged in users. |
|   | kill | Send a signal to a process. |
|   | firewall-cmd | | 



## Examples

```js
const { find } = require('pretty-shell')

```
