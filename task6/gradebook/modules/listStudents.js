const students = require('../data/students');
const calculateAverage = require('./calculateAverage');

function listStudents() {
  console.log('\n--- Student List ---');
  if (students.length === 0) {
    console.log('No students registered.');
    return;
  }
  students.forEach(student => {
    const avg = calculateAverage(student.grades);
    console.log(`ID: ${student.id} | Name: ${student.name} | Grades: [${student.grades.join(', ')}] | Average: ${avg}`);
  });
}

module.exports = listStudents;