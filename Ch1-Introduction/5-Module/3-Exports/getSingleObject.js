//getSingleObject.js


//var Hello = require('./SingleObject');----------false----------
var Hello = require('./singleObject').hello;
console.log(require('./singleObject'));

//var hello = new Hello();
hello = new Hello();
hello.setName('Alan');
hello.sayHello();
