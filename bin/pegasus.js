#!/usr/bin/env node

'use strict';

const program = require('commander');
const shell = require("shelljs");
const logs = require('./../src/logs');
const generate = require('./../src/generate');

let listFunction = (directory, options) => {
    shell.exec("echo listing all foders here");
}

let help = () => {
    shell.exec('echo "Usage:\n init [name-of-project]-- creates a new project in current directory"');
}

let init = (name) => {
    if (name) {
        logs.info(`Initializing ${name} project`);
        shell.exec(`echo "[INFO] Creating project directory" && mkdir ${name}`);
        shell.exec(`echo [INFO] Creating pegasus.config.json && touch ${name}/pegasus.config.json`);
        shell.exec(`echo "[INFO] Creating dao directory" && mkdir ${name}/dao`);
        shell.exec(`echo "[INFO] Creating router directory" && mkdir ${name}/router`);
        shell.exec(`echo "[INFO] Creating model directory" && mkdir ${name}/model`);
    }
    else logs.error('project name is required');
}

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