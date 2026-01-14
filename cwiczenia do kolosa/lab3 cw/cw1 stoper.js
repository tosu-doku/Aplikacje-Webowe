console.log("wczytano js");

var startTime = 0;
var currentTime = 0;
var timerStarted = false;

const timer = document.createElement("div");
timer.innerHTML = startTime + "s";

const startBtn = document.createElement("button");
startBtn.innerHTML = "start";
const stopBtn = document.createElement("button");
stopBtn.innerHTML = "stop";
const resetBtn = document.createElement("button");
resetBtn.innerHTML = "reset";

document.body.appendChild(startBtn);
document.body.appendChild(stopBtn);
document.body.appendChild(resetBtn);

document.body.appendChild(timer);

function StartTimer() {
  if (timerStarted == true) {
    console.log("stopped another timer");
    return;
  }
  timerStarted = true;
  // bez var \/, bo wtedy nie jest widzialne globalnie
  timerRunID = setInterval(() => {
    currentTime += 1;
    timer.innerHTML = currentTime + "s";
  }, 1000);
}

function StopTimer() {
  clearInterval(timerRunID);
  timerStarted = false;
}

function ResetTimer() {
  currentTime = 0;
}

startBtn.addEventListener("click", () => {
  StartTimer();
});

stopBtn.addEventListener("click", () => {
  StopTimer();
});

resetBtn.addEventListener("click", () => {
  ResetTimer();
  timer.innerHTML = startTime + "s";
});
