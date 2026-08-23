const readGrades = require("./read.grades");
const saveGrades = require("./save.grades");

async function deleteGrade(id) {
  const grades = await readGrades();

  const filteredGrades = grades.filter(
    (student) => student.id !== id && student.name !== id
  );

  if (grades.length === filteredGrades.length) {
    console.log("Student record not found to delete.");
    return;
  }

  await saveGrades(filteredGrades);
  console.log("Student deleted successfully!");
}

module.exports = deleteGrade;