#!/usr/bin/env node

'use strict';

const program = require('commander');
const shell = require("shelljs");
const logs = require('./../src/logs');
// const generate = require('./../src/generate');

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

function upperCase(name) {
    return name[0].toUpperCase() + name.substr(1);
}

let generate = (component, name) => {
    if (component) {
        switch (component) {
            case 'model':
                logs.info('Generating a model...')
                if (name) {
                    shell.exec(`touch model/${upperCase(name)}.js`);
                } else logs.error('model\'s name is required');
                break;
            case 'router':
                logs.info('Generating a router...');
                if (name) {
                    shell.exec(`touch router/${upperCase(name)}Router.js`);
                } else logs.error('router\'s name is required');
                break;
            case 'dao':
                logs.info('Generating a dao...');
                if (name) {
                    shell.exec(`touch dao/${upperCase(name)}DAO.js`);
                } else logs.error('dao\'s name is required');
                break;
            default:
                if (component) {
                    let name = component;
                    logs.info(`Creating ${name} model...`);
                    shell.exec(`touch model/${upperCase(name)}.js`);
                    logs.info(`Creating ${name} dao...`);
                    shell.exec(`touch dao/${upperCase(name)}DAO.js`);
                    logs.info(`Creating ${name} router...`);
                    shell.exec(`touch router/${upperCase(name)}Router.js`);
                } else logs.error('name is required');
                break;
        }
        logs.success("Every thing was created successfuly");
    } else logs.error('component type is required');
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