//getSingleObject.js


//var Hello = require('./SingleObject');----------false----------
var Hello = require('./SingleObject').hello;
console.log(require('./SingleObject'));

//var hello = new Hello();
hello = new Hello();
hello.setName('Alan');
hello.sayHello();
