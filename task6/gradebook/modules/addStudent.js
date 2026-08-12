const students = require('../data/students');

function addStudent(id, name, grades = []) {
  students.push({
    id,
    name,
    grades
  });
  console.log(`Added student: ${name}`);
}

module.exports = addStudent;