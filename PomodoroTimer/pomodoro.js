let timeLeft = 1500; // 25 minutes in seconds
let isRunning = false;
let timerInterval;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                timerDisplay.textContent = formatTime(timeLeft);
            } else {
                clearInterval(timerInterval);
                isRunning = false;
                timerDisplay.textContent = "Time's Up!";
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timeLeft = 1500; // Reset to 25 minutes
    timerDisplay.textContent = formatTime(timeLeft);
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
