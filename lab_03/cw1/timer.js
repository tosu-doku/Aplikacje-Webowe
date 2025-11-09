const TimerStartBtn = document.getElementById("timer-start");
const TimerStopBtn = document.getElementById("timer-stop");
const TimerResetBtn = document.getElementById("timer-reset");

var is_timer_running = false;
let IntervalID = null;
var current_time = 0;
var saved_time = 0;

TimerStartBtn.addEventListener("click", () => {
  if (!is_timer_running) {
    start_timer_now(saved_time);
  }
});

TimerStopBtn.addEventListener("click", () => {
  if (is_timer_running) {
    stop_timer();
  }
});

TimerResetBtn.addEventListener("click", () => {
  if (is_timer_running) {
    stop_timer();
    saved_time = 0;
    timer.innerHTML = 0 + "s ";
    start_timer_now();
  } else if (timer.innerHTML != "Timer not started") {
    saved_time = 0;
    timer.innerHTML = 0 + "s ";
  }
});

function stop_timer() {
  saved_time = current_time;
  clearInterval(IntervalID);
  is_timer_running = false;
}

function start_timer_now(start) {
  is_timer_running = true;
  var start_time = new Date().getTime();

  IntervalID = setInterval(function () {
    var now = new Date().getTime();

    var run_time = now - start_time + saved_time;

    var minutes = Math.floor((run_time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((run_time % (1000 * 60)) / 1000);

    timer = document.getElementById("timer");

    if (minutes > 0) {
      timer.innerHTML = minutes + "min " + seconds + "s ";
    } else {
      timer.innerHTML = seconds + "s ";
    }
    current_time = run_time;
  }, 1000);
}
