// Model class definition

function Model(config){
    this.name = config.name;
}

Model.prototype.getName = function(){console.log(this.name);};

var createModel = function(){
    var model = new Model({name: 'created'});
    model.getName();
    return model;
}

module.exports = Model;
module.exports.createModel = createModel;