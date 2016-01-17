//stdinStdout.js

process.stdin.resume();
process.stdin.setEncoding('utf8'); 

function read(data) {
	process.stdout.write('read from console: ' + data.toString());
};


process.stdin.on('data', read);
