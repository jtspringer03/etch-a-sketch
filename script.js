let color = "black";

let btnSelect = document.querySelector(".btn-danger");
btnSelect.addEventListener("click", function () {
  let size = getSize();
  createBoard(size);
});

function createBoard(size) {
  let board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let input = prompt("What size (1 - 100) board would you like?");
  let message = document.querySelector("#message");

  if (input == "" || input <= 0 || input > 100) {
    message.textContent = "Please provide a number between 1 and 100";
  } else {
    message.textContent = "You may start Etch-A-Sketching";
    return input;
  }
}

function colorDiv() {
  if (color == "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = "black";
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function resetBoard() {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}
