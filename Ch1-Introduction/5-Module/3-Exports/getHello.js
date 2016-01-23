//getHello.js


var Hello = require('./hello');
console.log(Hello);

hello = new Hello();
hello.setName('Alan');
hello.sayHello();

/*
var hello = require('./hello');
	The sentence of "hello = new Hello();" is necessary.
hello.Hello.setName('Alan');
hello.Hello.sayHello();
*/