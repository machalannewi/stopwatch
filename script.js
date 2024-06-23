let timer; // Variable to hold the setInterval reference
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateDisplay() {
  // Format the time to HH:MM:SS
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  document.getElementById('display').innerText = formattedTime;
}


function startStopwatch() {
  // Start the stopwatch
  timer = setInterval(function () {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    updateDisplay();
  }, 18); // Update every second
}

function stopStopwatch() {
  // Stop the stopwatch
  clearInterval(timer);
}

function resetStopwatch() {
  // Reset the stopwatch
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

