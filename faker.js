console.log("----------------------------------------------------------------");
console.log("Faker 0.0.0");
console.log("----------------------------------------------------------------");

// Require the Express NodeJS module.
var express = require('express');

console.log("Express (NodeJS module) loaded.");

console.log("Boot routines starting...");
// Reading configuration files and booting.
var boot = require('./libs/boot/Boot');
console.log("Boot routines finished. Status: " + (boot ? "OK" : "ERROR"));

// And create our Express app instance.
var app = express();

app.init = function(){
    var apiRouter = require('./libs/router/api');
    app.use('/api', apiRouter);

    GLOBAL.appUrl = "localhost:" + GLOBAL.config.port;
    GLOBAL.staticUrl = [appUrl, GLOBAL.config.staticPath].join("");

    // Finally we start listening for requests and the server is up.
    app.listen(GLOBAL.config.port);
    // Start serving static files as well.
    app.serveStaticFiles();

    console.log("XXX_X_X_X_X_X_X_TEST_T__X_X_X_X_");
    var server = require('./libs/core/Server');
    server.constructor("exampleApp");

    console.log("----------------------------------------------------------------");
    console.log("Server available at: " + GLOBAL.appUrl);
    console.log("Web frontend address: " + GLOBAL.staticUrl);
};

app.serveStaticFiles = function(){
    app.use(GLOBAL.config.staticPublicPath, express.static (GLOBAL.config.staticFilePath));
};

app.init();