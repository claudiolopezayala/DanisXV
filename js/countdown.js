var countDownDate = new Date("Apr 21, 2024 20:00:00").getTime();

// Update the count down every 1 second
var updateClock = setInterval(function() {
  var now = new Date().getTime();
  var timeToDate = countDownDate - now;

  if (timeToDate < 0) {
    clearInterval(updateClock);
    //TODO: what to display when time runs out
  }
  var days = Math.floor(timeToDate / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeToDate % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeToDate % (1000 * 60)) / 1000);
  
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

}, 1000);