//2.js  测试字符串连接效率
//ECMAScript 之定义类或对象【回顾JS】（采取混合的构造/原型方式）

//-------------------采取混合的构造/原型方式【new method】--------------------------------------
function StringBuffer () {
  this._strings_ = new Array();
}

StringBuffer.prototype.append = function(str) {
  this._strings_.push(str);
};

StringBuffer.prototype.toString = function() {
  return this._strings_.join("");
};

//--------------------text---------------------------------------------------------
var d1 = new Date();
var str = "";
for (var i=0; i < 10000000; i++) {
    str += "text";
}
var d2 = new Date();

document.write("Concatenation with plus: " + (d2.getTime() - d1.getTime()) + " milliseconds");

var buffer = new StringBuffer();
d1 = new Date();
for (var i=0; i < 1000000; i++) {
    buffer.append("text");
}
var result = buffer.toString();
d2 = new Date();

document.write("<br />Concatenation with StringBuffer: " + (d2.getTime() - d1.getTime()) + " milliseconds");