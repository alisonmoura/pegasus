'use strict';

const shell = require("shelljs");

module.export = (component, name) => {
    if (component) {
        switch (component) {
            case 'model':
                console.log('Generate a model')
                shell.exec(`pwd`);
                break;
            case 'controller':
                console.log('Generate a controler');
                break;
            case 'dao':
                console.log('Generate a dao');
                break;
            default:
                console.log("[ERROR] Component type is not valid");
                break;
        }
    } else shell.exec("echo [ERROR] component type is required");
}