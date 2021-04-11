var startButton = document.getElementById("start-btn");
var startPage = document.getElementById("start-page");
var quizSection = document.getElementById("quizSection");
var startQuiz = document.getElementById("startQuiz");
var activeQuestion = 0;
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");

var wrong = 10;

var questions = [
    {
        q: "What is CSS",
        o: ["A rap band", "the language we use to style a Web page", "A web development site", "ice cream flavor"],
        // 1
        a: 1,
    },
    {
        q: "What does DOM stand for?",
        o: {
            a: "Doctor of Medicine",
            b: "Dawn of madness",
            c: "Document Object Model",
            d: "Doodle on the moon",
        },
        // c
        a:"c"
    },
    {
        q: "The condition in an if/else statement is enclosed with ____.",
        o: {
            a: "quotes",
            b: "curley brackets",
            c: "parenthesis",
            d: "square brackets",
        },
        //c
        a:"c"
    }
];
startButton.onclick = clickStart;
function clickStart() {
    startPage.setAttribute ("class", "hide")
    quizSection.classList.remove("hide")
    startQuiz();
    startTimer();
}

var startQuiz = function() {
    console.log(activeQuestion)
    queText.textContent = questions[activeQuestion].q;
    btn1.textContent = questions[activeQuestion].o[0];
    btn2.textContent = questions[activeQuestion].o[1];
    btn3.textContent = questions[activeQuestion].o[2];
    btn4.textContent = questions[activeQuestion].o[3];
}
 
