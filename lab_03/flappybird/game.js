import {
  newScore,
  saveScores,
  loadScores,
  displayScore,
  displayScoreTable,
} from "./scores.js";

// board
let board;
const BOARD_WIDTH = 288;
const BOARD_HEIGHT = 512;
let context; // for drawing on canvas

let score = 0;
const audio_score = new Audio("assets/Sound Efects/point.ogg");

// bird
const BIRD_WIDTH = 34;
const BIRD_HEIGHT = 24;
const DEFAULT_BIRD_X = BOARD_WIDTH / 8;
const DEFAULT_BIRD_Y = BOARD_HEIGHT / 2;
const audio_flap = new Audio("assets/Sound Efects/wing.ogg");

// bird obj
let bird = {
  x: DEFAULT_BIRD_X,
  y: DEFAULT_BIRD_Y,
  width: BIRD_WIDTH,
  height: BIRD_HEIGHT,
};

//physics for bird
let velocityY = 0;
let gravity = 0.2;
let angle = 0;

//pipes
let pipeArray = [];
const PIPE_WIDTH = 52;
const PIPE_HEIGHT = 320;
let PIPE_X = BOARD_WIDTH;
let PIPE_Y = 0;
const audio_hit = new Audio("assets/Sound Efects/hit.ogg");
const audio_die = new Audio("assets/Sound Efects/die.ogg");

let topPipeImg;
let bottomPipeImg;

//physics for pipes & powerup
const velocityX = -1.5;

//grass (base)
const GRASS_WIDTH = 336;
const GRASS_HEIGHT = 112;
const GRASS_DISPLAY_HEIGHT = 28;

//gameover
const GAMESTART_WIDTH = 184;
const GAMESTART_HEIGHT = 267;
const GAMESTART_X = BOARD_WIDTH / 2 - GAMESTART_WIDTH / 2;
const GAMESTART_Y = BOARD_HEIGHT / 2 - GAMESTART_HEIGHT / 2;

//gameover
const GAMEOVER_WIDTH = 192;
const GAMEOVER_HEIGHT = 42;
const GAMEOVER_X = BOARD_WIDTH / 2 - GAMEOVER_WIDTH / 2;
const GAMEOVER_Y = BOARD_HEIGHT / 2 - GAMEOVER_HEIGHT / 2;

const restartBtn = document.getElementById("restartBtn");

//overall
let gameOver = true;
let gameOverHard = true;

let powerupActive = false;
let powerupArray = [];
let powerupScore = -5;
const POWERUP_SPAWN_RATE = 8000; // miliseconds
const PIPES_SPAWN_RATE = 2000;

let birdImg = new Image();
const birdImgd = new Image();
const birdImgm = new Image();
const birdImgu = new Image();

const bluebirdImgd = new Image();
const bluebirdImgm = new Image();
const bluebirdImgu = new Image();

topPipeImg = new Image();

bottomPipeImg = new Image();

const grassImg = new Image();

const gameStartImg = new Image();
const gameOverImg = new Image();

const powerupImg = new Image();
const powerupImgalt = new Image();

window.onload = function () {
  loadScores;

  board = document.getElementById("board");
  board.height = BOARD_HEIGHT;
  board.width = BOARD_WIDTH;
  context = board.getContext("2d"); // used for drawing

  // loading the bird image

  // birdImg.src = "assets/Flappy Bird/yellowbird-upflap.png";
  birdImgd.src = "assets/Flappy Bird/yellowbird-downflap.png";
  birdImgm.src = "assets/Flappy Bird/yellowbird-midflap.png";
  birdImgu.src = "assets/Flappy Bird/yellowbird-upflap.png"; //default

  birdImg = birdImgu;

  // for ghost powerup
  bluebirdImgd.src = "assets/Flappy Bird/bluebird-downflap.png";
  bluebirdImgm.src = "assets/Flappy Bird/bluebird-midflap.png";
  bluebirdImgu.src = "assets/Flappy Bird/bluebird-upflap.png";

  // birdImg.onload = function () {
  //   context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
  // };

  // load pipes
  topPipeImg.src = "assets/Flappy Bird/pipe-green-top.png";
  bottomPipeImg.src = "assets/Flappy Bird/pipe-green-bottom.png";

  // load grass (base)
  grassImg.src = "assets/Flappy Bird/base.png";

  // load game_start screen
  gameStartImg.src = "assets/UI/message.png";

  // load game_over screen
  gameOverImg.src = "assets/UI/gameover.png";

  // load powerup
  powerupImg.src = "assets/Flappy Bird/blue_ghost_small.png";
  powerupImgalt.src = "assets/Flappy Bird/yellow_ghost_small.png";

  gameStartImg.onload = () => {
    context.drawImage(
      gameStartImg,
      GAMESTART_X,
      GAMESTART_Y,
      GAMESTART_WIDTH,
      GAMESTART_HEIGHT
    );
  };

  // draw grass
  grassImg.onload = () => {
    context.drawImage(
      grassImg,
      0,
      BOARD_HEIGHT - GRASS_DISPLAY_HEIGHT,
      BOARD_WIDTH,
      GRASS_HEIGHT
    );
  };

  // wait for click
  document.addEventListener("keydown", startGame);
  document.addEventListener("touchstart", startGame);

  this.requestAnimationFrame(update);
  this.setInterval(placePipes, PIPES_SPAWN_RATE);
  setTimeout(function () {
    this.setInterval(placePowerup, POWERUP_SPAWN_RATE);
  }, 1000);
};

function startGame(keyevent) {
  if (keyevent.code == "Space" || keyevent.type === "touchstart") {
    console.log("game started");
    document.removeEventListener("keydown", startGame);
    document.removeEventListener("touchstart", startGame);

    gameOver = false;
    gameOverHard = false;

    // this.setInterval(birdAnimation, 2000);
    document.addEventListener("keydown", moveBird);
    document.addEventListener("touchstart", moveBird);
  }
}

function update() {
  requestAnimationFrame(update);
  if (gameOverHard) {
    return;
  }

  // clear
  context.clearRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);

  // draw bird
  velocityY += gravity;
  if (velocityY < 0) {
    bird.y = Math.max((bird.y += velocityY), 0); // upper limit
  } else {
    bird.y = Math.min(
      (bird.y += velocityY),
      board.height - GRASS_DISPLAY_HEIGHT - bird.height
    ); // lower limit
  }
  // context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

  context.save();
  drawBirdWithRotation();
  context.restore();

  // draw pipes
  for (let i = 0; i < pipeArray.length; i++) {
    let pipe = pipeArray[i];
    if (!gameOver) {
      pipe.x += velocityX;
    }
    context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

    if (
      detectCollision(bird, pipe) &&
      gameOver == false &&
      powerupActive == false
    ) {
      document.removeEventListener("keydown", moveBird);
      document.removeEventListener("touchstart", moveBird);
      gameOver = true;
      // velocityY -= 4;
      newScore(score);
      audio_hit.play();
      setTimeout(function () {
        audio_die.play();
        loadScores();
        console.log("game over");

        setTimeout(function () {
          gameOverHard = true;
          velocityY = -5;

          restartBtn.style.display = "block";
          restartBtn.addEventListener("click", restartGame);
          displayScoreTable(score);
        }, 1000);
      }, 20);
    }

    if (!pipe.passed && bird.x > pipe.x + pipe.width) {
      score += 0.5; // 2 pipes * 0.5 = 1
      pipe.passed = true;
      audio_score.play();
      if (score >= powerupScore + 2) {
        powerupActive = false;
        if (birdImg == bluebirdImgu) {
          birdImg == birdImgu;
        }
      }
    }
  }

  // draw powerups
  for (let i = 0; i < powerupArray.length; i++) {
    let powerup = powerupArray[i];
    if (!gameOver) {
      powerup.x += velocityX;
    }
    powerup.y -= powerup.speed;

    context.drawImage(
      powerup.img,
      powerup.x,
      powerup.y,
      powerup.width,
      powerup.height
    );

    if (detectCollision(bird, powerup) && gameOver == false) {
      if (powerup.alternative == false) {
        //blue
        powerup.collected = true;
        powerup.x -= BOARD_WIDTH;
        powerupActive = true;
        birdChangeImage();
        powerupScore = score;
        console.log("powerup_blue picked up at: " + powerupScore);
      } else {
        //yellow
        score += 1;
        powerup.collected = true;
        powerup.x -= BOARD_WIDTH;
        audio_score.load();
        audio_score.play();
        console.log("powerup1_yellow picked up at: " + powerupScore);
      }
    }
  }

  // draw score
  displayScore(score);

  // draw grass (base)
  context.drawImage(
    grassImg,
    0,
    BOARD_HEIGHT - GRASS_DISPLAY_HEIGHT,
    BOARD_WIDTH,
    GRASS_HEIGHT
  );

  // draw gameover
  if (gameOver) {
    context.drawImage(
      gameOverImg,
      GAMEOVER_X,
      GAMEOVER_Y,
      GAMEOVER_WIDTH,
      GAMEOVER_HEIGHT
    );
  }

  //clear pipes
  while (pipeArray.length > 0 && pipeArray[0].x < 0 - PIPE_WIDTH) {
    pipeArray.shift(); //remove first elem in array
  }

  //clear powerups
  while (powerupArray.length > 0 && powerupArray[0].x < 0 - 24) {
    powerupArray.shift();
  }
}

function placePipes() {
  if (gameOver == true) {
    return;
  }
  let randomPipeY =
    PIPE_Y - PIPE_HEIGHT / 4 - Math.random() * (PIPE_HEIGHT / 2);
  let openingSpace = BOARD_HEIGHT / 4;

  let topPipe = {
    img: topPipeImg,
    x: PIPE_X,
    y: randomPipeY,
    width: PIPE_WIDTH,
    height: PIPE_HEIGHT,
    passed: false,
  };

  pipeArray.push(topPipe);

  let bottomPipe = {
    img: bottomPipeImg,
    x: PIPE_X,
    y: randomPipeY + PIPE_HEIGHT + openingSpace,
    width: PIPE_WIDTH,
    height: PIPE_HEIGHT,
    passed: false,
  };
  pipeArray.push(bottomPipe);
}

function placePowerup() {
  if (gameOver == true) {
    return;
  }
  let randomPowerupY = BOARD_HEIGHT / 5 + Math.random() * BOARD_HEIGHT * 0.75;
  let randomizePowerup = Boolean(Math.round(Math.random()));
  let randomizePowerupSpeed = Math.floor(Math.random() * 5 + 1) / 10;

  console.log("alt powerup: " + randomizePowerup);

  let powerup = {
    img: powerupImg,
    x: BOARD_WIDTH,
    y: randomPowerupY,
    width: 24,
    height: 24,
    collected: false,
    alternative: randomizePowerup,
    speed: randomizePowerupSpeed,
  };

  if (powerup.alternative == true) {
    powerup.img = powerupImgalt;
  }

  powerupArray.push(powerup);
}

function moveBird(keyevent) {
  if (keyevent.code == "Space" || keyevent.type == "touchstart") {
    if (!gameOver) {
      velocityY = -5;
      birdFlap();
    }
  }
}

function detectCollision(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

// function birdAnimation() {
//   birdimages = [birdImg1, birdImg2, birdImg3];
//   birdImg = birdimages[currentBirdAnimation];
//   currentBirdAnimation = (currentBirdAnimation + 1) % 3;
//   console.log(currentBirdAnimation);
// }

function birdFlap() {
  birdChangeImage();

  console.log("flap");
  audio_flap.load();
  audio_flap.play();
}

function birdChangeImage() {
  let birdimages = [];
  if (!powerupActive) {
    birdimages = [birdImgd, birdImgm, birdImgu];
  } else {
    birdimages = [bluebirdImgd, bluebirdImgm, bluebirdImgu];
  }
  birdImg = birdimages[0];
  setTimeout(function () {
    birdImg = birdimages[1];
  }, 100);
  setTimeout(function () {
    birdImg = birdimages[2];
  }, 200);
}

function drawBirdWithRotation() {
  if (!gameOver) {
    angle = Math.min(Math.max(velocityY * 5, -45), 60);
  }
  context.translate(bird.x + bird.width / 2, bird.y + bird.height / 2);
  context.rotate((angle * Math.PI) / 180);
  context.drawImage(
    birdImg,
    -bird.width / 2,
    -bird.height / 2,
    bird.width,
    bird.height
  );
}

function restartGame() {
  restartBtn.style.display = "none";
  document.getElementById("scoreTable").style.display = "none";

  // reset bird
  bird.y = DEFAULT_BIRD_Y;
  velocityY = 0;

  // reset pipes
  pipeArray = [];

  // reset powerups
  powerupArray = [];
  powerupActive = false;

  // reset score
  score = 0;

  // reset states
  gameOver = false;
  gameOverHard = false;
  restartBtn.removeEventListener("click", restartGame);
  document.addEventListener("keydown", moveBird);
  document.addEventListener("touchstart", moveBird);
}

export { context };
