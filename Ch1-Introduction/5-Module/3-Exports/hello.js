//hello.js

function Hello(name){
	this._name = name;
};

Hello.prototype.setName = function(thyName){
	this._name = thyName;
};

Hello.prototype.sayHello = function(){
	console.log("Hello " + this._name);
};

console.log(module);
//module.exports <--> exports.Hello
module.exports = Hello;//add a "exports object" to "module object"

console.log(module.exports);//module.exports -> "[Function: Hello]"
console.log(exports);//exports -> {}
console.log(exports.Hello=Hello);//in this case, exports.Hello -> "[Function: Hello]"
