const shell = require("shelljs");
const logs = require('./logs');
const jsonfile = require('jsonfile')


module.exports = (name) => {
    if (name) {
        logs.info(`Initializing ${name} project`);
        shell.exec(`echo "[INFO] Creating project directory" && mkdir ${name}`);
        shell.exec(`echo "[INFO] Creating dao directory" && mkdir ${name}/dao`);
        shell.exec(`echo "[INFO] Creating router directory" && mkdir ${name}/router`);
        shell.exec(`echo "[INFO] Creating model directory" && mkdir ${name}/model`);
        jsonfile.writeFile(`${name}/pegasus.config.json`, { name: name }, { spaces: 2 }, function (err) {
            if (err) console.error(err)
            logs.success("Project created successfuly");
        })
    }
    else logs.error('project name is required');
}