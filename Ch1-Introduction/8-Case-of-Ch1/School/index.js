//index.js

var klass = require('./klass');

function addSchool(klasses) {
	klasses.forEach(function (item, index) {
		// body...
		console.log('----------------------------');
		var _teacherName = item.teacherName;
		var _students = item.students;
		klass.addKlass(_teacherName, _students);
	})
};

classes = [
	{
		teacherName: 'Alan',
		students: ['stu1', 'stu2']
	},
	{
		teacherName: 'Scott',
		students: ['stu3', 'stu4']
	}
];
addSchool(classes);
