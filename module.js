//module.js

var name;
/*
exports.setName = function(thyName){
	name = thyName;
};

exports.sayHello = function(){
	console.log('Hello ' + name);
};
*/

setName = function(thyName){
	name = thyName;
};

sayHello = function(){
	console.log('Hello ' + name);
};

exports.setName = setName;
console.log(module.exports);
console.log(exports);
exports.sayHello = sayHello;
console.log(exports);