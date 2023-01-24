let instructorBtn = document.getElementById("instruc-el");
let studentBtn = document.getElementById("student-el");
let studentTable = document.getElementById("student_table");

let instrutorTable = document.getElementById("instructor_table");

instructorBtn.addEventListener("click", () => {
  instrutorTable.style.display =
    instrutorTable.style.display === "none" ? "table" : "none";
});

studentBtn.addEventListener("click", () => {
  studentTable.style.display =
    studentTable.style.display === "none" ? "table" : "none";
});
