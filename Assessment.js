

var testName, testLength; // variables to later be used for the name of the assessment and the number of minutes the user has to complete the assessment

const numberOfQuestions = 3;

var questionArray = [["Which answer is correct? Pick one: (hint - it's C!)", "m", "Answer C!", "Answer A!", "Answer B!", "Answer C!", "Answer D!"],
["True or false? (hint - it's True!)", "t", "True", "True", "False", null, null],
["The answer to this question is water", "f", "water", null, null, null]];
/* This array was formerly a one-dimensional array that held the content for one question, and is now a two-dimensional array containing information about every question on the assessment. There is one question per row in the Array, and the format of each question's information is:
   Question text, question type (m for multiple choice, t for true/false, f for fill in the blank), the correct answer, and then up to four possible answers */

var selectedAnswers = new Array(numberOfQuestions);
var questionNumber = 0;

function nextQuestion() {
	document.getElementById("assessmentArea").style.display = "inline";
	if (questionNumber != 0 && questionArray [questionNumber-1][1] != "f") {
			if (document.getElementById("qInput1_1").checked) {
				selectedAnswers[questionNumber-1] = questionArray[questionNumber-1][3];
			} else if (document.getElementById("qInput1_2").checked) {
				selectedAnswers[questionNumber-1] = questionArray[questionNumber-1][4];
			} else if (document.getElementById("qInput1_3").checked) {
				selectedAnswers[questionNumber-1] = questionArray[questionNumber-1][5];
			} else if (document.getElementById("qInput1_4").checked) {
				selectedAnswers[questionNumber-1] = questionArray[questionNumber-1][6];
			}
		} else if (questionNumber != 0 && questionArray [questionNumber-1][1] == "f") {
			selectedAnswers[questionNumber-1] = document.getElementById("qInput3").value;
		}
	
	document.getElementById("qInput1_1").checked = false;
	document.getElementById("qInput1_2").checked = false;
	document.getElementById("qInput1_3").checked = false;
	document.getElementById("qInput1_4").checked = false;
	
	if (questionNumber == numberOfQuestions - 1) {
		document.getElementById("beginButton").style.display = "none";
		document.getElementById("finishButton").style.display = "inline";
	} else {
		document.getElementById("beginButton").innerHTML = "Next Question";
	}
	document.getElementById("questionText").innerHTML = questionArray[questionNumber][0];
	switch(questionArray[questionNumber][1]) {
		case 'm':
			document.getElementById("q1_1").style.visibility = "display";
			document.getElementById("q1_1").innerHTML = questionArray[questionNumber][3];
			document.getElementById("q1_2").style.visibility = "display";
			document.getElementById("q1_2").innerHTML = questionArray[questionNumber][4];
			document.getElementById("q1_3").style.visibility = "display";
			document.getElementById("q1_3").innerHTML = questionArray[questionNumber][5];
			document.getElementById("q1_4").style.visibility = "display";
			document.getElementById("q1_4").innerHTML = questionArray[questionNumber][6];
			document.getElementById("answerTextBox").style.display = "none";
			break;
		case 't':
			document.getElementById("q1_1").style.visibility = "display";
			document.getElementById("q1_1").innerHTML = questionArray[questionNumber][3];
			document.getElementById("q1_2").style.visibility = "display";
			document.getElementById("q1_2").innerHTML = questionArray[questionNumber][4];
			document.getElementById("b3").style.visibility = "hidden";
			document.getElementById("b4").style.visibility = "hidden";
			document.getElementById("answerTextBox").style.display = "none";
			break;
		case 'f':
			document.getElementById("b1").style.visibility = "hidden";
			document.getElementById("b2").style.visibility = "hidden";
			document.getElementById("b3").style.visibility = "hidden";
			document.getElementById("b4").style.visibility = "hidden";
			document.getElementById("answerTextBox").style.display = "inline";
			break;
		default:
			alert("Whoops!");
			break;
	}
	questionNumber++;
}

function loadResults() {
	document.getElementById("assessmentArea").style.display = "none";
	document.getElementById("finishButton").style.display = "none";
	if (questionArray [questionNumber-1][1] != "f") {
			if (document.getElementById("qInput1_1").checked) {
				selectedAnswers[questionNumber-1] = document.getElementById("qInput1_1").innerHTML;
			} else if (document.getElementById("qInput1_2").checked) {
				selectedAnswers[questionNumber-1] = document.getElementById("qInput1_2").innerHTML;
			} else if (document.getElementById("qInput1_3").checked) {
				selectedAnswers[questionNumber-1] = document.getElementById("qInput1_3").innerHTML;
			} else if (document.getElementById("qInput1_4").checked) {
				selectedAnswers[questionNumber-1] = document.getElementById("qInput1_4").innerHTML;
			}
		} else if (questionArray [questionNumber-1][1] == "f") {
			selectedAnswers[questionNumber-1] = document.getElementById("qInput3").value;
		} else {
			alert("Whoops!");
		}

correctAnswers = 0;
var table = document.getElementById("resultsTable");
	for (i = 0; i <= numberOfQuestions + 1; i++) {
		var row = table.insertRow(i);
		var cell = row.insertCell(0);
		if (i == numberOfQuestions + 1) {
			cell.style.colSpan = 4;
			cell.innerHTML = "Your score is: " + correctAnswers + " / " + numberOfQuestions;
			return true;
		}
		else if (i == 0) {
			cell.innerHTML = "Question #";
		} else {
			cell.innerHTML = (i);
		}
		var cell = row.insertCell(1);
		if (i == 0) {
			cell.innerHTML = "Correct Answer";
		} else {
			cell.innerHTML = questionArray[i - 1][2];
		}
		var cell = row.insertCell(2);
		if (i == 0) {
			cell.innerHTML = "Your Answer";
		} else {
			cell.innerHTML = selectedAnswers[i - 1];
		}
		var cell = row.insertCell(3);
		if (i == 0) {
			cell.innerHTML = "✔";
		} else {
			if (selectedAnswers[i - 1] == questionArray[i - 1][2]) {
				cell.innerHTML = "✓";
				correctAnswers++;
			} else {
				cell.innerHTML = "☒";
			}
		}
	}
}

