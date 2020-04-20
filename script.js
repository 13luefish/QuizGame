// declare variables to target html elements:
var timeEl = document.getElementById("timer");
var startPage = document.getElementById("start-page");
var startBtn = document.getElementById("start");
var questionDiv = document.getElementById("question-page");
questionDiv.setAttribute("style", "display: none;");
var questionsP = document.getElementById("question-content");
var answerDiv = document.getElementById("answers");

var answerBtn = $(".button");
var messageDiv = document.getElementById("message");
messageDiv.setAttribute("style", "display: none;");
var messageP = document.getElementById("message-content");
var questionNumDisplay = document.getElementById("Q#");
var finishedDiv = document.getElementById("finished");
finishedDiv.setAttribute("style", "display: none;");
var score = document.getElementById("score");
// declare variables/arrays for question/answers/buttons:
// questions:
var q1 =
  "What elements are used to test for TRUE or False values stored in variables?";
var q2 =
  "In JavaScript, what element is used to store multiple values in a single variable?";
var q3 =
  "What is the format called that is used for storing and transporting data?";
var q4 =
  "What is the default behavior called that is used to move declarations to the top of the current scope?";
// answers:
var q1AnswerArray = [
  "A. Trigger readers",
  "B. Comparison and logical operators",
  "C. Conditional statements",
  "D. RegExp or Regular Expressions",
];
var q2AnswerArray = ["A. Functions", "B. Variables", "C. Strings", "D. Arrays"];
var q3AnswerArray = ["A. Syntax", "B. JSON", "C. Font", "D. HTML"];
var q4AnswerArray = ["A. Hoisting", "B. Sorting", "C. Arranging", "D. Jumping"];
// buttons:
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var buttonArray = [btn1, btn2, btn3, btn4];

//declare variables for functions:
var secondsLeft = 60;
var questionNum = 1;
var timeInterval = "";
var scorePoints = 0;

// declare functions:
function setTimer() {
  timeInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timeInterval);
      finished()
    }
  }, 1000);
  startPage.setAttribute("style", "display: none;");
  startQuiz();
}

function displayRightMessage() {
  messageDiv.setAttribute("style", "display: block;");
  messageP.textContent = "Correct!";
  messageP.style.color = "green";
  scorePoints++;
}

function displayWrongMessage() {
  messageDiv.setAttribute("style", "display: block;");
  messageP.textContent = "Wrong! - 10 seconds!";
  messageP.style.color = "red";
  timeEl.textContent = secondsLeft - 10;
}

function startQuiz() {
  questionDiv.setAttribute("style", "display: block;");
  questionNumDisplay.textContent = 1;
  questionsP.textContent = q1;
  for (var i = 0; i < q1AnswerArray.length; i++) {
    buttonArray[i].textContent = q1AnswerArray[i];
  }
  answerBtn.on("click", function () {
    if (this.textContent === q1AnswerArray[2]) {
      displayRightMessage();
    } else {
      displayWrongMessage();
    }
    Question2()
  });
}

function Question2() {
  questionDiv.setAttribute("style", "display: none;");
  questionDiv.setAttribute("style", "display: block;");
  questionNumDisplay.textContent = 2;
  questionsP.textContent = q2;
  for (var i = 0; i < q2AnswerArray.length; i++) {
    buttonArray[i].textContent = q2AnswerArray[i];
  }
  answerBtn.on("click", function () {
    if (this.textContent === q2AnswerArray[3]) {
      displayRightMessage();
    } else {
      displayWrongMessage();
    }
    Question3();
  });
}

function Question3() {
  questionDiv.setAttribute("style", "display: none;");
  questionDiv.setAttribute("style", "display: block;");
  questionNumDisplay.textContent = 3;
  questionsP.textContent = q3;
  for (var i = 0; i < q3AnswerArray.length; i++) {
    buttonArray[i].textContent = q3AnswerArray[i];
  }
  answerBtn.on("click", function (event) {
    if (this.textContent === q3AnswerArray[1]) {
      displayRightMessage();
    } else {
      displayWrongMessage();
    }
    Question4();
  });
}

function Question4() {
  questionDiv.setAttribute("style", "display: none;");
  questionDiv.setAttribute("style", "display: block;");
  questionNumDisplay.textContent = 4;
  questionsP.textContent = q4;
  for (var i = 0; i < q4AnswerArray.length; i++) {
    buttonArray[i].textContent = q4AnswerArray[i];
  }
  answerBtn.on("click", function () {
    if (this.textContent === q4AnswerArray[0]) {
      displayRightMessage();
    } else {
      displayWrongMessage();
    }
    clearTimeout(timeInterval);
    timeEl.textContent = 0;
    finished();
  });
}

function finished() {
  questionDiv.setAttribute("style", "display: none;");
  messageDiv.setAttribute("style", "display: none;");
  finishedDiv.setAttribute("style", "display: block;");
  score.textContent = scorePoints * 25;
}

var saveBtn = document.getElementById("save");
var saved = document.getElementById("saved");
var initial = document.getElementById("initial");

saveBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var li = document.createElement("li")
  initial = document.querySelector("#initial").value.trim();
  saved.appendChild(li)
  li.textContent = initial + " - " + score.textContent + " points ";
  JSON.parse(localStorage.getItem("list"));
  console.log(typeof li)
  localStorage.setItem("list", JSON.stringify(li))
  console.log(typeof li)
})

startBtn.addEventListener("click", setTimer);