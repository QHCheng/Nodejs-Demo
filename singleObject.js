//singleObject.js

function Hello(name){
	this._name = name;
};

Hello.prototype.setName = function(thyName){
	this._name = thyName;
};

Hello.prototype.sayHello = function(){
	console.log("Hello " + this._name);
};
console.log(exports);
exports.hello = Hello;//add an sttribute, which is named"hello", to exports object

//console.log(module);//module is consist of several elements, such as: id, exports, parent, children, loaded
console.log(module.exports);//module.exports -> "{ Hello: [Function: Hello] }"
console.log(exports);//exports -> "{ Hello: [Function: Hello] }"
console.log(exports.Hello);//in this case, exports.Hello -> "[Function: Hello]"

//require('./SingleObject') -> "{ Hello: [Function: Hello] }"