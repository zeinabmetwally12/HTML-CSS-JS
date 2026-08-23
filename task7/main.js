const addGrade = require("./modules/add.grade");
const readGrades = require("./modules/read.grades");
const updateGrade = require("./modules/update.grade");
const deleteGrade = require("./modules/delete.grade");

async function main() {
  console.log(" Student Grades Manager ");

  console.log("Current grades in file:");
  console.log(await readGrades());

  await addGrade("Salma", "Cybersecurity", "A");
  await addGrade("Sara", "Database", "B");


  await updateGrade(1, "A+");


  await deleteGrade("Sara");


  console.log("Final grades:");
  console.log(await readGrades());
}

main();