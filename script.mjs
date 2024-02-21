const btnModalOpener = document.querySelector(".btn-modal-opener");
const modalBody = document.querySelector(".modal-body");

const displaySystemScore = document.querySelector(".system-score");
const displayUserScore = document.querySelector(".user-score");

const displaySystemChoice = document.querySelector(
  ".close-hands-container > .system-side"
);
const displayUserChoice = document.querySelector(
  ".close-hands-container > .user-side"
);

const btnsContainer = document.querySelector(".btns-container");

const btnPlayAgain = document.querySelectorAll(".btn-play-again");

let roundCount = 0,
  userWinCount = 0;
let isPlay = true;

const choices = {
  ROCK: "✊🏽",
  PAPER: "✋🏽",
  SCISSOR: "✌🏽",
};

const choicesArray = [choices.ROCK, choices.PAPER, choices.SCISSOR];

const winner = {
  SYSTEM: "SYSTEM",
  USER: "USER",
  TIE: "TIE",
};

const generateRandomNum = (n) => Math.trunc(Math.random() * n) + 1;

function resetGame(willPlay) {
  roundCount = 0;
  userWinCount = 0;
  isPlay = willPlay;
  displayUserScore.textContent = 0;
  displaySystemScore.textContent = 0;
  displayUserChoice.textContent = "✊🏽";
  displaySystemChoice.textContent = "✊🏽";
}

function getCurrentRoundWinner(userChoice, systemChoice) {
  const { ROCK, PAPER, SCISSOR } = choices;
  const { SYSTEM, USER, TIE } = winner;
  if (userChoice === systemChoice) return TIE;

  if (userChoice === ROCK) {
    if (systemChoice === PAPER) return SYSTEM;
    else return USER;
  } else if (userChoice === PAPER) {
    if (systemChoice === SCISSOR) return SYSTEM;
    else return USER;
  }
  if (userChoice === SCISSOR) {
    if (systemChoice === ROCK) return SYSTEM;
    else return USER;
  }
}

btnsContainer.addEventListener("click", function (e) {
  if (!e.target.closest("button") || !isPlay) return;

  const value = e.target.dataset.buttonValue;
  const userChoice = value,
    systemChoice = choicesArray[generateRandomNum(2)];

  displayUserChoice.textContent = userChoice;
  displaySystemChoice.textContent = systemChoice;

  const winningStatus = getCurrentRoundWinner(userChoice, systemChoice);
  if (winningStatus === winner.TIE) return;

  roundCount++;
  winningStatus === winner.USER && userWinCount++;

  displayUserScore.textContent = userWinCount;
  displaySystemScore.textContent = roundCount - userWinCount;

  if (roundCount === 5) {
    modalBody.textContent = `You ${
      userWinCount >= 3 ? "WON" : "Losed"
    } the game ${userWinCount >= 3 ? "🏆" : "😥"}`;
    btnModalOpener.click();
    resetGame(false);
  }
});

btnPlayAgain[0].addEventListener("click", () => resetGame(true));
btnPlayAgain[1].addEventListener("click", () => resetGame(true));
