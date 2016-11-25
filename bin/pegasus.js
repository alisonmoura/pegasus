#!/usr/bin/env node

'use strict';

const program = require('commander');
const shell = require("shelljs");

// const generate = require('./../src/generate');

let listFunction = (directory, options) => {
  shell.exec("echo listing all foders here");
}

let help = () => {
  shell.exec('echo "Usage:\n init [name-of-project]-- creates a new project in current directory"');
}

let init = (name) => {
  if (name) {
    shell.exec(`echo [INFO] Initializing ${name} project`);
    shell.exec(`echo "[INFO] Creating project directory" && mkdir ${name}`);
    shell.exec(`echo [INFO] Creating pegasus.config.json && touch ${name}/pegasus.config.json`);
    shell.exec(`echo "[INFO] Creating dao directory" && mkdir ${name}/dao`);
    shell.exec(`echo "[INFO] Creating router directory" && mkdir ${name}/router`);
    shell.exec(`echo "[INFO] Creating model directory" && mkdir ${name}/model`);
  }
  else shell.exec("echo [ERROR] project name is required");
}

function log(mode, msg) {
  console.log(`[${mode.toUpperCase()}] ${msg}`)
}

function info(msg) {
  console.log(`[INFO] ${msg}`);
}

function error(msg) {
  console.log(`[ERROR] ${msg}`);
}

function upperCase(name) {
  return name[0].toUpperCase() + name.substr(1);
}

let generate = (component, name) => {
  if (component) {
    switch (component) {
      case 'model':
        info('Generating a model...')
        if (name) {
          shell.exec(`touch model/${upperCase(name)}.js`);
        } else error('model\'s name is required');
        break;
      case 'router':
        info('Generating a router...');
        if (name) {
          shell.exec(`touch router/${upperCase(name)}Router.js`);
        } else error('router\'s name is required');
        break;
      case 'dao':
        info('Generating a dao...');
        if (name) {
          shell.exec(`touch dao/${upperCase(name)}DAO.js`);
        } else error('dao\'s name is required');
        break;
      default:
        if (component) {
          let name = component;
          info(`Creating ${name} model...`);
          shell.exec(`touch model/${upperCase(name)}.js`);
          info(`Creating ${name} dao...`);
          shell.exec(`touch dao/${upperCase(name)}DAO.js`);
          info(`Creating ${name} router...`);
          shell.exec(`touch router/${upperCase(name)}Router.js`);
        } else error('name is required');
        break;
    }
  } else error('component type is required');
}

program
  .version('0.0.1')
  // .command('list [directory]')
  // .description('List files and folders')
  // .option('-a, --all', 'List all files and folders')
  // .option('-l, --long', '')
  // .action(listFunction)
  .command('init [name]')
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