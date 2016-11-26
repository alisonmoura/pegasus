const shell = require("shelljs");
const logs = require('./logs');

module.exports = (name) => {
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