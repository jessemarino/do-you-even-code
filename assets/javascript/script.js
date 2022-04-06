var timeEl = document.querySelector("timebox");
var startBtn = document.querySelector(".startbutt");
var questbox = document.querySelector(".quest");
var intro = document.querySelector(".intro");

var q1 = "What does CSS mean?";
var q2 = "what does html mean?";
var q3 = "What is the tag for paragraph?";
var q4 = "What is the tag for creating a organized list?";
var q5 = "what is the tag for creating a list item?";

var a1 = ["cascading style sheet", "yes", "no", "no"];
var a2 = "hypertext markup language";
var a3 = "<p>";
var a4 = "<ol>";
//var a5 = "<li>";

var questions = [q1, q2, q3, q4, q5 ];
var answers = [a1, a2, a3, a4];
var secondsLeft = 10;
var timer;

function startGame() {
    timeEl = "";
    startBtn.disabled = true;
    //var introduction = document.getElementById("#intro").style.display = "none";
    startTimer()
    quizQA()
  }

  function startTimer() {
   var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;

      if(secondsLeft === 0) {
          clearInterval(timerInterval);

          //youlost()
      }
    }, 1000);
  }

function quizQA() {
    for (var i = 0; i < questions.length; i++) {
        document.getElementById("quest").innerHTML = q1;
    }
    for (var j = 0; j < answers.length; j++) {
        document.getElementById("ansbutton1").innerHTML = a1;
    }
    //if (//if correct answer is picked add time and else incorrect minus time )
}


startBtn.addEventListener("click", startGame);


