const readGrades = require("./read.grades");
const saveGrades = require("./save.grades");

async function updateGrade(id, newGrade) {
  const grades = await readGrades();

  let found = false;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].id === id || grades[i].name === id) {
      grades[i].grade = newGrade;
      found = true;
      break;
    }
  }

  if (found) {
    await saveGrades(grades);
    console.log("Grade updated successfully!");
  } else {
    console.log("Student record not found.");
  }
}

module.exports = updateGrade;