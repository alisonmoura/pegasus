#!/usr/bin/env node

'use strict';

const program = require('commander');
const shell = require("shelljs");
const help = require('./../src/help');
const init = require('./../src/init');
const generate = require('./../src/generate');

program
    .version('0.0.1')
    // .command('list [directory]')
    // .description('List files and folders')
    // .option('-a, --all', 'List all files and folders')
    // .option('-l, --long', '')
    // .action(listFunction)
    .command('init [name]')
    .alias('start')
    .description('Initializes a new node-express project')
    .action(init)

program
    .command('generate [component] [name] [schema]')
    .alias('g')
    .description('Generate a component')
    .action(generate);

program
    .command('help')
    .description('Help tools')
    .action(help);

program.parse(process.argv);