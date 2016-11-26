'use strict';

const shell = require("shelljs");
const logs = require('./logs');
const upperCase = require('./uppercase');

function generateComponent(name) {
    if (name) {
        logs.info(`Creating ${name} model...`);
        shell.exec(`touch model/${upperCase(name)}.js`);
        logs.info(`Creating ${name} dao...`);
        shell.exec(`touch dao/${upperCase(name)}DAO.js`);
        logs.info(`Creating ${name} router...`);
        shell.exec(`touch router/${upperCase(name)}Router.js`);
    } else logs.error('name is required');
}

module.exports = (component, name) => {
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
                generateComponent(component);
                break;
        }
        logs.success("Every thing was created successfuly");
    } else logs.error('component type is required');
}