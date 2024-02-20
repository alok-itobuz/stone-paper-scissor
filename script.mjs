const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissor = document.querySelector(".btn-scissor");

function getRandomNumber(n) {
  return Math.trunc(Math.random() * 3);
}

const choices = ["Rock", "Paper", "Scissor"];
