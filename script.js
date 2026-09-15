/*Add your JavaScript here*/

//creates and initializes variables
var morningScore = 0; // stores the score for morning
var nightScore = 0; // stores the score for night

var questionCount = 0; // stores the number of questions answered

var result = document.getElementById("result"); // the text that displays your result

// connects html id's to javascript variables
var q1a1 = document.getElementById("q1a1"); // links html q1a1 to js
var q1a2 = document.getElementById("q1a2"); // links html q1a2 to js

var q2a1 = document.getElementById("q2a1"); // links html q2a1 to js
var q2a2 = document.getElementById("q2a2"); // links html q2a2 to js

var q3a1 = document.getElementById("q3a1"); // links html q3a1 to js
var q3a2 = document.getElementById("q3a2"); // links html q3a2 to js


// defines functions
function morningPoint() {
  morningScore += 1;
  questionCount += 1;
  console.log("questions count = " + questionCount + " morningScore = " + morningScore);
  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function nightPoint() {
  nightScore += 1;
  questionCount += 1;
  console.log("questions count = " + questionCount + " nightScore = " + nightScore);
  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function updateResult() {
  if (morningScore >= 2) {
    console.log("You are a morning person!");
    result.innerHTML = "You are a morning person!";
  } else if (nightScore >= 2) {
    console.log("You are a night person!");
    result.innerHTML = "You are a night person!";
  }
}

function disableButtonQ1() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
}
function disableButtonQ2() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
}
function disableButtonQ3() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
}

function resetButtons() {
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
}
// adds event listeners to each button
q1a1.addEventListener("click", morningPoint);
q1a2.addEventListener("click", nightPoint);
q1a1.addEventListener("click", disableButtonQ1);
q1a2.addEventListener("click", disableButtonQ1);

q2a1.addEventListener("click", nightPoint);
q2a2.addEventListener("click", morningPoint);
q2a1.addEventListener("click", disableButtonQ2);
q2a2.addEventListener("click", disableButtonQ2);

q3a1.addEventListener("click", nightPoint);
q3a2.addEventListener("click", morningPoint);
q3a1.addEventListener("click", disableButtonQ3);
q3a2.addEventListener("click", disableButtonQ3);

// restart button
var restart = document.getElementById("restart");

restart.addEventListener("click", reset);

function reset() {
  morningScore = 0;
  nightScore = 0;
  questionCount = 0;
  result.innerHTML = "Your result is...";
  resetButtons();
  
}



