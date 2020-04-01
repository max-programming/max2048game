/* document.querySelectorAll("span").forEach(span => {
  span.innerHTML = "&nbsp;";
});
 */

function checkNumbers() {
  document.querySelectorAll("span").forEach(span => {
    if (parseInt(span.innerText) > 0) span.style.display = "block";
    else span.style.display = "none";
  });
}

// function parseInt(obj) {
//   parseInt(obj);
// }

// Insert Random Number on Start
insertRandomNumber();
function insertRandomNumber() {
  let random_row = Math.floor(Math.random() * 4);
  let random_col = Math.floor(Math.random() * 4);
  let randomCell = document.getElementById(`${random_row}_${random_col}`);
  if (randomCell.innerHTML === "0") {
    const numbers = [2, 4];
    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    // console.log(typeof randomNumber);
    randomCell.innerHTML = randomNumber.toString();
  }
  checkNumbers();
}

document.onkeydown = e => {
  e.preventDefault();
  // Left Arrow

  if (e.keyCode == 37) {
    for (let row = 0; row <= 3; row++) {
      for (let col = 3; col >= 0; col--) {
        let currentBox = document.getElementById(`${row}_${col}`);
        let leftBox = document.getElementById(`${row}_${col - 1}`);
        if (leftBox !== null && currentBox !== null) {
          if (
            leftBox.innerHTML == "0" ||
            leftBox.innerHTML == currentBox.innerHTML
          ) {
            leftBox.innerHTML =
              parseInt(currentBox.innerHTML) + parseInt(leftBox.innerHTML);
            currentBox.innerHTML = "0";
          }
        }
      }
    }
    insertRandomNumber();

    checkSpans();
  }
  // Up Arrow
  if (e.keyCode == 38) {
    // console.log("hello");
    for (let row = 3; row >= 0; row--) {
      for (let col = 0; col <= 3; col++) {
        let currentBox = document.getElementById(`${row}_${col}`);
        let upBox = document.getElementById(`${row - 1}_${col}`);
        if (upBox !== null && currentBox !== null) {
          if (upBox.innerHTML == 0 || upBox.innerHTML == currentBox.innerHTML) {
            upBox.innerHTML =
              parseInt(currentBox.innerHTML) + parseInt(upBox.innerHTML);
            currentBox.innerHTML = "0";
          }
        }
      }
    }
    insertRandomNumber();

    checkSpans();
  }
  // Right Arrow
  if (e.keyCode == 39) {
    for (let row = 0; row <= 3; row++) {
      for (let col = 0; col <= 3; col++) {
        if (col != 3) {
          let currentBox = document.getElementById(`${row}_${col}`);
          let rightBox = document.getElementById(`${row}_${col + 1}`);
          if (rightBox !== null && currentBox !== null) {
            if (
              rightBox.innerHTML == "0" ||
              rightBox.innerHTML == currentBox.innerHTML
            ) {
              let rightval =
                parseInt(currentBox.innerHTML) + parseInt(rightBox.innerHTML);
              // console.log(row + " " + col + " :" + rightval);
              rightBox.innerHTML = rightval.toString();
              currentBox.innerHTML = "0";
            }
          }
        }
      }
    }
    insertRandomNumber();

    checkSpans();
  }
  // Down Arrow
  if (e.keyCode == 40) {
    for (let row = 0; row <= 3; row++) {
      for (let col = 0; col <= 3; col++) {
        let currentBox = document.getElementById(`${row}_${col}`);
        let downArrow = document.getElementById(`${row + 1}_${col}`);
        if (downArrow !== null && currentBox !== null) {
          if (
            downArrow.innerHTML == "0" ||
            downArrow.innerHTML == currentBox.innerHTML
          ) {
            downArrow.innerHTML =
              parseInt(currentBox.innerHTML) + parseInt(downArrow.innerHTML);
            currentBox.innerHTML = "0";
          }
        }
      }
    }
    insertRandomNumber();

    checkSpans();
  }

  checkNumbers();
};

// Check if the board is full
function checkSpans() {
  // const spans = document.querySelectorAll("td span");
  // spans.forEach(span => {
  //   if (span.innerHTML !== "0" && span.innerHTML % 2 === 0) {
  //     // console.log("board is full!!!!!");
  //   } else {
  //     document.querySelector(".gameOver").style.display = "flex";
  //   }
  // });
}
