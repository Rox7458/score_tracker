//? SELECTORS

// SCORES
const user1 = document.getElementById("user1");
const user2 = document.getElementById("user2");
const input = document.getElementById("input");

// BUTTONS
const btnYellow = document.querySelector(".btn-yellow");
const btnBlue = document.querySelector(".btn-blue");
const btnRed = document.querySelector(".btn-red");

let key = true;

// increase button of player 1
btnYellow.addEventListener("click", () => {
  if (key) {
    user1.innerText = Number(user1.innerText) + 1;
    judge();
  }
});

// increase button of player 2
btnBlue.addEventListener("click", () => {
  if (key) {
    user2.innerText = Number(user2.innerText) + 1;
    judge();
  }
});

// reset button
btnRed.addEventListener("click", () => {
  user1.innerText = 0;
  user2.innerText = 0;
  user1.setAttribute("style", "color:black");
  user2.setAttribute("style", "color:black");
  key = true;
});

// judge will determine who win
const judge = () => {
  if (input.value == Number(user1.innerText) && input.value != "") {
    user1.setAttribute("style", "color:green");
    user2.setAttribute("style", "color:red");
    key = false;
  }

  if (input.value == Number(user2.innerText) && input.value != "") {
    user2.setAttribute("style", "color:green");
    user1.setAttribute("style", "color:red");
    key = false;
  }
};
