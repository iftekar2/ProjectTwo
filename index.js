function addRow() {
  const inputBoxes = document.querySelector(".inputBoxes");
  const rowCount = inputBoxes.querySelectorAll(".inputRow").length;

  if (rowCount < 5) {
    const newRow = document.createElement("div");
    newRow.className = "inputRow";
    newRow.innerHTML = `
            <div class="contentName">
                <input class="className" placeholder="Course Name" />
            </div>
            <div class="contentGrade">
                <input class="classGrade" placeholder="A" />
            </div>
            <div class="contentCredit">
                <input class="classCredit" placeholder="4" />
                <button class="button" onclick="removeRow(this)">X</button>
            </div>
        `;
    inputBoxes.appendChild(newRow);
  } else {
    alert("You can only add up to 5 courses.");
  }
}

function removeRow(button) {
  const inputBoxes = document.querySelector(".inputBoxes");
  const rowCount = inputBoxes.querySelectorAll(".inputRow").length;

  if (rowCount > 1) {
    button.parentElement.parentElement.remove();
  } else {
    alert("You must have at least one course.");
  }
}

function calculateGPA() {
  const rows = document.querySelectorAll(".inputRow");
  let totalCredits = 0;
  let totalPoints = 0;

  rows.forEach((row) => {
    const grade = row.querySelector(".classGrade").value.toUpperCase();
    const credits = parseFloat(row.querySelector(".classCredit").value);
    const gradePoints = getGradePoints(grade);

    if (!isNaN(credits) && gradePoints !== null) {
      totalCredits += credits;
      totalPoints += gradePoints * credits;
    }
  });

  const gpa = totalPoints / totalCredits;
  document.querySelector(".showResult").innerText = `Your GPA is: ${gpa.toFixed(
    2
  )}`;
}

function getGradePoints(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "B":
      return 3.0;
    case "C":
      return 2.0;
    case "D":
      return 1.0;
    case "F":
      return 0.0;
    default:
      return null;
  }
}
