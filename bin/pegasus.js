#!/usr/bin/env node

'use strict';

const program = require('commander');
const shell = require("shelljs");

let listFunction = (directory,options) => {
  shell.exec("echo listing all foders here");
}

program
    .version('0.0.1')
    .command('list [directory]')
    .description('List files and folders')
    .option('-a, --all', 'List all files and folders')
    .option('-l, --long', '')
    .action(listFunction);
program.parse(process.argv);