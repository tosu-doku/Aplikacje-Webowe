var countDownDate = new Date("Jan 1, 2027 20:00:00").getTime();

var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the time left between now and the count down date
  var time_left = countDownDate - now;

  // Time calculations for years, days, hours, minutes and seconds
  var years = Math.floor(time_left / (1000 * 60 * 60 * 24 * 365));
  var days = Math.floor((time_left / (1000 * 60 * 60 * 24)) % 365);
  var hours = Math.floor(
    (time_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time_left % (1000 * 60)) / 1000);

  document.getElementById("clock-edgerunners2").innerHTML =
    years + "y " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (time_left < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "OUT NOW";
  }
}, 1000); // every 1000ms
