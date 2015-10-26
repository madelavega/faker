var appName, appPath;

var serverModelsConfig;
var serverControllersConfig;
var fsExtra = require('fs-extra');

var constructor = function(newAppName) {
    appName = newAppName;
    appPath = [GLOBAL.config.path.appServers, appName].join("/");
    reset();
};

var reset = function(){
    serverModelsConfig = null;
    serverControllersConfig = null;
    readModels();
};

var readModels = function(){
	var MODEL_PATH = [appPath, "model"].join("/"),
		items = [];

	console.log(MODEL_PATH);

	fsExtra.walk(MODEL_PATH)
		.on('readable', function () {
		    var item
		    while ((item = this.read())) {
		    	if(item.stats.isFile())
		    		items.push(item.path)
		    }
		})
	  	.on('end', function () {
	    	console.dir(items) // => [ ... array of files]
		});
};

module.exports.constructor = constructor;
module.exports.reset = reset;
module.exports.readModels = readModels;