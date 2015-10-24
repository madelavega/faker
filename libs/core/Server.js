var appName;

var serverModelsConfig;
var serverControllersConfig;

var constructor = function(newAppName) {
    appName = newAppName;
    reset();
};

var reset = function(){
    serverModelsConfig = null;
    serverControllersConfig = null;
};

var readModels = function(){

};