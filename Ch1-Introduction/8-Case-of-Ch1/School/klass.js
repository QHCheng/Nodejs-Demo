//klass.js

var stu = require('./student');
var tea = require('./teacher');

function addKlass (teacherName, students) {
	// body...
	tea.add(teacherName);

	students.forEach(function (item, index) {
		// body...
		stu.add(item);
	});
}

exports.addKlass = addKlass;
//module.exports = addKlass;   OOXX
