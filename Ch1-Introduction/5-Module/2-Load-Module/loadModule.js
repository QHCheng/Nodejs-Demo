//loadModule.js

var myModule1 = require('./module');
myModule1.setName('Alan1');
myModule1.sayHello();

var myModule2 = require('./module');
myModule2.setName('Alan2');
myModule2.sayHello();

myModule1.sayHello();

var myModule = require('./module');
myModule.sayHello();