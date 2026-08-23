const readGrades = require("./read.grades");
const saveGrades = require("./save.grades");

async function addGrade(name, subject, grade) {
  const grades = await readGrades();

  const newGrade = {
    id: grades.length + 1,
    name: name,
    subject: subject,
    grade: grade
  };

  grades.push(newGrade);
  await saveGrades(grades);

  console.log("Student added successfully!");
}

module.exports = addGrade;