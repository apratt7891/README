var startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', function() {
    startTimer();
})
var timeLeft = 60;
var questionCount = 0;
var timer = document.getElementById("timer");
function startTimer() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "";
        timer.textContent = "Time:" + timeLeft;
        if (timeLeft <= 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000);
}


