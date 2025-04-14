//? SELECTORS

// SCORES
const user1 = document.getElementById("user1");
const user2 = document.getElementById("user2");
const input = document.getElementById("input");

// BUTTONS
const btnYellow = document.querySelector(".btn-yellow");
const btnBlue = document.querySelector(".btn-blue");
const btnRed = document.querySelector(".btn-red");

//? CODE

// set number to win
const ourInterval = setInterval(() => {
  if (input.value == Number(user1.innerText) && input.value != "") {
    user1.setAttribute("style", "color:green");
    user2.setAttribute("style", "color:red");
  }

  if (input.value == Number(user2.innerText) && input.value != "") {
    user2.setAttribute("style", "color:green");
    user1.setAttribute("style", "color:red");
  }
});

// increase button of player 1
btnYellow.addEventListener("click", () => {
  user1.innerText = Number(user1.innerText) + 1;
});

// increase button of player 2
btnBlue.addEventListener("click", () => {
  user2.innerText = Number(user2.innerText) + 1;
});

// reset button
btnRed.addEventListener("click", () => {
  user1.innerText = 0;
  user2.innerText = 0;
  user1.setAttribute("style", "color:black");
  user2.setAttribute("style", "color:black");
});
