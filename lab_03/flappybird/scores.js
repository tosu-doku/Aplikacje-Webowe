import { context } from "./game.js";

const BOARD_WIDTH = 288;
//score
const SCORE_X = BOARD_WIDTH - 80;
const SCORE_Y = 45;
const SCORE_WIDTH = 24;
const SCORE_HEIGHT = 32;

let scorenum = [];
for (let i = 0; i < 10; i++) {
  let scoreimg = new Image();
  scoreimg.src = `./assets/UI/Numbers/${i}.png`;
  scorenum.push(scoreimg);
}

function displayScore(score) {
  context.drawImage(
    scorenum[score % 10],
    SCORE_X + SCORE_WIDTH + 2,
    SCORE_Y,
    SCORE_WIDTH,
    SCORE_HEIGHT
  );

  if (score >= 10) {
    context.drawImage(
      scorenum[Math.floor(score / 10) % 10],
      SCORE_X,
      SCORE_Y,
      SCORE_WIDTH,
      SCORE_HEIGHT
    );
  }
  if (score >= 100) {
    context.drawImage(
      scorenum[Math.floor(score / 100) % 10],
      SCORE_X - SCORE_WIDTH - 2,
      SCORE_Y,
      SCORE_WIDTH,
      SCORE_HEIGHT
    );
  }
  if (score >= 1000) {
    context.drawImage(
      scorenum[Math.floor(score / 1000) % 10],
      SCORE_X - 2 * SCORE_WIDTH - 4,
      SCORE_Y,
      SCORE_WIDTH,
      SCORE_HEIGHT
    );
  }
}

let highScores = [];
function newScore(score) {
  let highScores = loadScores(); // [4,3,1,0,0]
  let i = 0;
  while (i < 5) {
    if (score > highScores[i]) {
      highScores.splice(i, 0, score);
      highScores.pop();
      break;
    }
    i += 1;
  }
  saveScores(highScores);
}

function saveScores(highScores) {
  console.log("saved scores:" + highScores);
  localStorage.setItem("high_scores", JSON.stringify(highScores));
}

function loadScores() {
  console.log("loading scores...");
  highScores = localStorage.getItem("high_scores");
  return highScores ? JSON.parse(highScores) : [0, 0, 0, 0, 0];
}

const table = document.getElementById("scoreTable");
const list = document.getElementById("highscoresList");
const currentScore = document.getElementById("currentScore");

function displayScoreTable(current) {
  let highscores = loadScores();

  list.innerHTML = "";

  highscores.forEach((s, i) => {
    let li = document.createElement("li");
    li.textContent = `${i + 1}. ${s} points`;
    list.appendChild(li);
  });

  currentScore.textContent = `${current} points`;

  table.style.display = "block";
}

export { newScore, saveScores, loadScores, displayScore, displayScoreTable };
