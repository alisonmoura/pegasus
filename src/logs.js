const colors = require('colors');

module.exports = {
    log: function (mode, msg) {
        console.log(`[${mode.toUpperCase()}] ${msg}`)
    },

    info: function (msg) {
        console.log(`[INFO] ${msg}`);
    },

    error: function (msg) {
        console.log(`[ERROR] ${msg}`.red);
    },

    success: function (msg) {
        console.log(`[SUCCESS] ${msg}`.blue);
    }
}