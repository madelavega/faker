/*
    * boot/Boot.js
    * ------------
*/

var configPath = "./config.json",
    fs;

fs = require('fs');

var boot = function(){
    readConfigurationFile();
    return true;
};

var readConfigurationFile = function(){
    GLOBAL.config = JSON.parse(fs.readFileSync(configPath));
};

// Run the boot process.
module.exports.boot = boot();