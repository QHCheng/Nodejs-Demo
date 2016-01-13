//hello.js

function Hello(){
	var name;

	this.setName = function(thyName){
		name = thyName;
	};

	this.sayHello = function(){
		console.log('Hello ' + name);
	};
};

console.log(module);
//module.exports <--> exports.Hello
module.exports = Hello;//add a "exports object" to "module object"

console.log(module.exports);//module.exports -> "[Function: Hello]"
console.log(exports);//exports -> {}
console.log(exports.Hello=Hello);//in this case, exports.Hello -> "[Function: Hello]"