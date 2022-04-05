var timerEl = document.querySelector("timebox");
var startBtn = document.querySelector(".startbutt");
var questbox = document.querySelector(".quest");
var intro = document.querySelector(".intro");

var q1 = "What does CSS mean?";
var q2 = "what does html mean?";
var q3 = "What is the tag for paragraph?";
var q4 = "What is the tag for creating a organized list?";
var q5 = "what is the tag for creating a list item?";

var a1 = "cascading style sheet";
var a2 = "hypertext markup language";
var a3 = "<p>";
var a4 = "<ol>";
var a5 = "<li>";

var questions = [q1, q2, q3, q4, q5 ];
var answers = [a1, a2, a3, a4, a5];
var timerCount;
var timer;

function startGame() {
    timerEl = "";
    startBtn.disabled = true;
    //var introduction = document.getElementById(".intro")
    //introduction.style.display = "none";
    startTimer()
    quizQA()
  }

  function startTimer() {
   var timer = setInterval(function() {
      timerCount--;
      timer.textContent = timerEl;
    }, 1000);
  }

function quizQA() {

}


startBtn.addEventListener("click", startGame);


