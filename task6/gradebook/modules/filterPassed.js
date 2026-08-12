const students = require('../data/students');
const calculateAverage = require('./calculateAverage');

function filterPassed() {
  console.log('\n--- Passing Students (Average >= 60) ---');
  const passingStudents = students.filter(student => calculateAverage(student.grades) >= 60);

  if (passingStudents.length === 0) {
    console.log('No students passed.');
    return [];
  }

  passingStudents.forEach(student => {
    const avg = calculateAverage(student.grades);
    console.log(`Name: ${student.name} | Average: ${avg}`);
  });

  return passingStudents;
}

module.exports = filterPassed;