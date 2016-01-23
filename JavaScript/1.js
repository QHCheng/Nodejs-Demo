//1.js
//闭包
var scope = 'top';

var generateClosure = function(){
	var count = 0;
	
	return function(){
		count++;
		return count;
	};
};

var counter = generateClosure();

document.write(counter());
document.write("<br />"+counter());
document.write("<br />"+counter());