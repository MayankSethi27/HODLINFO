// script.js
const timerElement = document.getElementById("timer");
let seconds = 59;

function updateTimer() {
  if (seconds === 0) {
    seconds = 59;
  } else {
    seconds--;
  }
  timerElement.textContent = seconds >= 10 ? seconds : `0${seconds}`;
}

updateTimer(); // Initial call

setInterval(updateTimer, 1000); // Update every second
