//readFile.js

var fs = require('fs') ;
/* 1.
fs.readFile('file.txt', 'utf-8', function(err, data){
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
});
*/

/*2.
var data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);
*/

//3.--------------------------------------------------------------
function readFileCallBack(err, data){
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
}
fs.readFile('file.txt', 'utf-8', readFileCallBack);
//	--------------------------------------------------------------

console.log('end.');
