

/*

*/

var testName, testTime = 5; // Variables to later be used for the name of the assessment and the number of minutes the user has to complete the assessment

var assessmentBuilt = false;
var questionArray;

var questionNumber; // The number of the question that the user is currently viewing, initially set to 0 before the assessment is begun

var areYouSure = true;
var readyToSave;

var secondsRemaining;
var timer;


function mainScreen() {
	if (!areYouSure) {
		alert("Are you sure you want to go back to the main screen without saving? Press \"Back to main screen\" again to exit without saving.");
		areYouSure = true;
		return false;
	}
	areYouSure = true;
	assessmentStarted = false;
	document.getElementById("timeRemaining").style.display = "none";
	document.getElementById("assessmentTitle").innerHTML = "Welcome!";
	document.getElementById("assessmentArea").style.display = "none";
	document.getElementById("timeLimitArea").style.display = "none";
	document.getElementById("builderArea").style.display = "none";

	document.getElementById("addButton").style.display = "none";
	document.getElementById("saveButton").style.display = "none";	
	document.getElementById("builderButton").style.display = "inline";
	document.getElementById("takeBuiltButton").style.display = "none";
	document.getElementById("takePracticeButton").style.display = "none";
	document.getElementById("backButton").style.display = "none";
	document.getElementById("startButton").style.display = "inline";
	document.getElementById("beginButton").style.display = "none";
	document.getElementById("finishButton").style.display = "none";
	document.getElementById("resultsTableDiv").style.display = "none";
	questionNumber = 0;
	selectedAnwsers = [];
}

var builderAssessment = new Array;
var assessmentBuilderNumber;
var builderQuestionType;

function beginAssessmentBuilder() {
	testName = prompt("Please enter the name of the assessment:");
	
	document.getElementById("assessmentTitle").innerHTML = "Assessment Builder - " + testName;
	document.getElementById("assessmentArea").style.display = "none";
	document.getElementById("timeLimitArea").style.display = "none";
	document.getElementById("builderArea").style.display = "inline";

	document.getElementById("addButton").style.display = "inline";
	document.getElementById("saveButton").style.display = "inline";	
	document.getElementById("builderButton").style.display = "none";
	document.getElementById("takeBuiltButton").style.display = "none";
	document.getElementById("takePracticeButton").style.display = "none";
	document.getElementById("startButton").style.display = "none";
	document.getElementById("backButton").style.display = "inline";
	document.getElementById("beginButton").style.display = "none";
	document.getElementById("finishButton").style.display = "none";

	areYouSure = false;

	assessmentBuilderNumber = 0;

	document.getElementById("builderQuestionNumber").innerHTML = assessmentBuilderNumber + 1;
}


function assessmentBuilder() {
	readyToSave = false;
	document.getElementById("assessmentTitle").innerHTML = "Assessment Builder - " + testName;
	document.getElementById("assessmentArea").style.display = "none";
	document.getElementById("timeLimitArea").style.display = "none";
	document.getElementById("builderArea").style.display = "inline";

	document.getElementById("addButton").style.display = "inline";
	document.getElementById("saveButton").style.display = "inline";	
	document.getElementById("builderButton").style.display = "none";
	document.getElementById("takeBuiltButton").style.display = "none";
	document.getElementById("takePracticeButton").style.display = "none";
	document.getElementById("startButton").style.display = "none";
	document.getElementById("backButton").style.display = "inline";
	document.getElementById("beginButton").style.display = "none";
	document.getElementById("finishButton").style.display = "none";
	
	
	switch (validateAssessmentBuilder()) {
		case true:
			break;
		case 2:
			alert("Please select a question type: Multiple choice, true/false, or fill-in-the-blank.");
			return false;
			break;
		case 3:
			alert("Please fill in the question text.");
			return false;
			break;
		case 4:
			alert("Please select the correct answer for this question by using one of the radio buttons on the left.");
			return false;
			break;
		case 5:
			alert("Please fill in the answer for this fill-in-the-blank question.");
			return false;
			break;
		case 6:
			alert("Please fill in at least two possible answers for this multiple-choice question in the first two blanks.");
			return false;
			break;
		default:
			alert("Whoops!");
			break;
	}	
	
	var correctAnswerString;
	
	if (document.getElementById("abc1").checked) {
		correctAnswerString = document.getElementById("ab1").value;
	} else if (document.getElementById("abc2").checked) {
		correctAnswerString = document.getElementById("ab2").value;
	} else if (document.getElementById("abc3").checked) {
		correctAnswerString = document.getElementById("ab3").value;
	} else if (document.getElementById("abc4").checked) {
		correctAnswerString = document.getElementById("ab4").value;
	}

	switch (builderQuestionType) {
		case "m":
			builderAssessment.push([document.getElementById("builderQuestionTextBox").value, "m", correctAnswerString, document.getElementById("ab1").value, document.getElementById("ab2").value, document.getElementById("ab3").value, document.getElementById("ab4").value]);
			break;
		case "t":
			builderAssessment.push([document.getElementById("builderQuestionTextBox").value, "t", correctAnswerString, "True", "False", null, null]);
			break;
		case "f":
			builderAssessment.push([document.getElementById("builderQuestionTextBox").value, "f", correctAnswerString, null, null, null, null]);
			break;
		default:
			alert("Whoops!");
			break;
	}		
	
	assessmentBuilderNumber++;
	
	document.getElementById("builderQuestionNumber").innerHTML = assessmentBuilderNumber + 1;
	
	clearAssessmentBuilderFields();
	
}

function validateAssessmentBuilder() {
	if (!document.getElementById("abm").checked && !document.getElementById("abt").checked && !document.getElementById("abf").checked) {
		return 2;
	}
	if (document.getElementById("builderQuestionTextBox").value == "") {
		return 3;
	}
	if (!document.getElementById("abc1").checked && !document.getElementById("abc2").checked && !document.getElementById("abc3").checked && !document.getElementById("abc4").checked) {
		return 4;
	}
	if (document.getElementById("ab1").value == "" && builderQuestionType == "f") {
		return 5;
	}
	if ((document.getElementById("ab1").value == "" || document.getElementById("ab2").value == "") && builderQuestionType == "m") {
		return 6;
	} 
	else {
		return true;
	}
}

function clearAssessmentBuilderFields() {
	document.getElementById("abm").checked = false;
	document.getElementById("abt").checked = false;
	document.getElementById("abf").checked = false;
	document.getElementById("builderQuestionTextBox").value = "";
	document.getElementById("builderInstructions").innerHTML = "&nbsp";
	document.getElementById("abc1").checked = false;
	document.getElementById("abc2").checked = false;
	document.getElementById("abc3").checked = false;
	document.getElementById("abc4").checked = false;
	document.getElementById("ab1").value = "";
	document.getElementById("ab2").value = "";
	document.getElementById("ab3").value = "";
	document.getElementById("ab4").value = "";
	builderQuestionType = "";
}

function saveAssessment() {
	/* Begin repeated question validation and saving code from assessmentBuilder() */
	if (
		document.getElementById("abm").checked ||
		document.getElementById("abt").checked ||
		document.getElementById("abf").checked ||
		document.getElementById("builderQuestionTextBox").value != "" ||
		document.getElementById("abc1").checked ||
		document.getElementById("abc2").checked ||
		document.getElementById("abc3").checked ||
		document.getElementById("abc4").checked ||
		document.getElementById("ab1").value != "" ||
		document.getElementById("ab2").value != "" ||
		document.getElementById("ab3").value != "" ||
		document.getElementById("ab4").value != ""
	) {
		switch (validateAssessmentBuilder()) {
			case true:
				break;
			case 2:
				alert("Please select a question type: Multiple choice, true/false, or fill-in-the-blank.");
				return false;
				break;
			case 3:
				alert("Please fill in the question text.");
				return false;
				break;
			case 4:
				alert("Please select the correct answer for this question by using one of the radio buttons on the left.");
				return false;
				break;
			case 5:
				alert("Please fill in the answer for this fill-in-the-blank question.");
				return false;
				break;
			case 6:
				alert("Please fill in at least two possible answers for this multiple-choice question in the first two blanks.");
				return false;
				break;
			default:
				alert("Whoops!");
				break;
		}		
		
		if (!readyToSave) {
			alert("Ready to save the assessment? Press \"Save & Exit\" again to confirm and exit to the main screen.");
			readyToSave = true;
			return false;
		}
		
		var correctAnswerString;
	
		if (document.getElementById("abc1").checked) {
			correctAnswerString = document.getElementById("ab1").value;
		} else if (document.getElementById("abc2").checked) {
			correctAnswerString = document.getElementById("ab2").value;
		} else if (document.getElementById("abc3").checked) {
			correctAnswerString = document.getElementById("ab3").value;
		} else if (document.getElementById("abc4").checked) {
			correctAnswerString = document.getElementById("ab4").value;
		}

		switch (builderQuestionType) {
			case "m":
				builderAssessment.push([document.getElementById("builderQuestionTextBox").value, "m", correctAnswerString, document.getElementById("ab1").value, document.getElementById("ab2").value, document.getElementById("ab3").value, document.getElementById("ab4").value]);
				break;
			case "t":
				builderAssessment.push([document.getElementById("builderQuestionTextBox").value, "t", correctAnswerString, "True", "False", null, null]);
				break;
			case "f":
				builderAssessment.push([document.getElementById("builderQuestionTextBox").value, "f", correctAnswerString, null, null, null, null]);
				break;
			default:
				alert("Whoops!");
				break;
		}			
	/* End repeated question validation and saving code from assessmentBuilder() */
	}

	if (!readyToSave) {
		alert("Ready to save the assessment? Press \"Save & Exit\" again to confirm and exit to the main screen.");
		readyToSave = true;
		return false;
	}
	
	areYouSure = true;
	questionArray = builderAssessment;
	assessmentBuilt = true;
	mainScreen();
}
	
function mc() {
	document.getElementById("builderQuestionTextBox").disabled = false;
	document.getElementById("builderInstructions").innerHTML = "Enter up to four possible answers for the multiple choice question:";
	document.getElementById("ab1").disabled = false;
	document.getElementById("ab2").disabled = false;
	document.getElementById("ab3").disabled = false;
	document.getElementById("ab4").disabled = false;
	document.getElementById("ab1").value = "";
	document.getElementById("ab2").value = "";
	document.getElementById("ab3").value = "";
	document.getElementById("ab4").value = "";
	document.getElementById("abc1").disabled = false;
	document.getElementById("abc2").disabled = false;
	document.getElementById("abc3").disabled = false;
	document.getElementById("abc4").disabled = false;
	document.getElementById("abc1").checked = false;
	document.getElementById("abc2").checked = false;
	document.getElementById("abc3").checked = false;
	document.getElementById("abc4").checked = false;
	builderQuestionType = "m";
}
function tf() {
	document.getElementById("builderQuestionTextBox").disabled = false;
	document.getElementById("builderInstructions").innerHTML = "This question will only have two possible answers: True or False.";
	document.getElementById("ab1").disabled = true;
	document.getElementById("ab2").disabled = true;
	document.getElementById("ab3").disabled = true;
	document.getElementById("ab4").disabled = true;
	document.getElementById("ab1").value = "True";
	document.getElementById("ab2").value = "False";
	document.getElementById("ab3").value = "";
	document.getElementById("ab4").value = "";
	document.getElementById("abc1").disabled = false;
	document.getElementById("abc2").disabled = false;
	document.getElementById("abc3").disabled = true;
	document.getElementById("abc4").disabled = true;
	document.getElementById("abc1").checked = false;
	document.getElementById("abc2").checked = false;
	document.getElementById("abc3").checked = false;
	document.getElementById("abc4").checked = false;
	builderQuestionType = "t";	
}

function fitb() {
	document.getElementById("builderQuestionTextBox").disabled = false;
	document.getElementById("builderInstructions").innerHTML = "Enter the correct answer that the student should type in:";
	document.getElementById("ab1").disabled = false;
	document.getElementById("ab2").disabled = true;
	document.getElementById("ab3").disabled = true;
	document.getElementById("ab4").disabled = true;
	document.getElementById("ab1").value = "";
	document.getElementById("ab2").value = "";
	document.getElementById("ab3").value = "";
	document.getElementById("ab4").value = "";
	document.getElementById("abc1").disabled = true;
	document.getElementById("abc2").disabled = true;
	document.getElementById("abc3").disabled = true;
	document.getElementById("abc4").disabled = true;
	document.getElementById("abc1").checked = true;
	document.getElementById("abc2").checked = false;
	document.getElementById("abc3").checked = false;
	document.getElementById("abc4").checked = false;
	builderQuestionType = "f";
}

function assessmentSelection() {
	document.getElementById("assessmentTitle").innerHTML = "Assessment Selection";
	document.getElementById("assessmentArea").style.display = "none";
	document.getElementById("timeLimitArea").style.display = "none";
	document.getElementById("builderArea").style.display = "none";

	document.getElementById("addButton").style.display = "none";
	document.getElementById("saveButton").style.display = "none";	
	document.getElementById("builderButton").style.display = "none";
	document.getElementById("takeBuiltButton").style.display = "inline";
	document.getElementById("takePracticeButton").style.display = "inline";
	document.getElementById("startButton").style.display = "none";
	document.getElementById("backButton").style.display = "inline";
	document.getElementById("beginButton").style.display = "none";
	document.getElementById("finishButton").style.display = "none";
}


function practiceAssessment() {
	testName = "Practice Assessment";
	questionArray = [["Which answer is correct? Pick one: (hint - it's C!)", "m", "Answer C!", "Answer A!", "Answer B!", "Answer C!", "Answer D!"],
						["True or false? (hint - it's True!)", "t", "True", "True", "False", null, null],
						["The answer to this question is water", "f", "water", null, null, null]];
						
/*questionArray = [["mc A", "m", "A", "A", "B", "C", "D"],
				["mc F", "m", "F", "E", "F", "G", "H"],
						["True or false? (hint - it's True!)", "t", "True", "True", "False", null, null],
						["mc K", "m", "K", "I", "J", "K", "L"],
						["false", "t", "False", "True", "False", null, null],
						["The answer to this question is water", "f", "water", null, null, null],
						["fitb 123", "f", "123", null, null, null]
						]*/
						
					
						/* This array was formerly a one-dimensional array that held the content for one question, and is now a two-dimensional array containing information about every question on the assessment. There is one question per row in the Array, and the format of each question's information is:
						Question text, question type (m for multiple choice, t for true/false, f for fill in the blank), the correct answer, and then up to four possible answers */
	timeSelection();
}

function validateAssessmentBuilt() {
	if (!assessmentBuilt) {
		alert("Please navigate to the Assessment Builder and build an assessment first.");
		return false;
	} else {
		timeSelection();
		return true;
	}
}

function timeSelection() {
	document.getElementById("assessmentTitle").innerHTML = "Ready to begin?";
	document.getElementById("assessmentArea").style.display = "none";
	document.getElementById("timeLimitArea").style.display = "inline";
	document.getElementById("builderArea").style.display = "none";

	document.getElementById("addButton").style.display = "none";
	document.getElementById("saveButton").style.display = "none";	
	document.getElementById("builderButton").style.display = "none";
	document.getElementById("takeBuiltButton").style.display = "none";
	document.getElementById("takePracticeButton").style.display = "none";
	document.getElementById("startButton").style.display = "none";
	document.getElementById("backButton").style.display = "inline";
	document.getElementById("beginButton").style.display = "inline";
	document.getElementById("beginButton").style.backgroundColor = "dodgerblue";
	document.getElementById("beginButton").style.color = "white";	
	document.getElementById("beginButton").style.fontWeight = "bold";	
	document.getElementById("beginButton").innerHTML = "Start!";
	document.getElementById("finishButton").style.display = "none";
}

function validateTime() {
	selectedAnswers = [];
	if (document.getElementById("timeLimitTextBox").value != "") {
		if (isNaN(document.getElementById("timeLimitTextBox").value, 10)) {
			return false;
		} else {
			testTime = parseInt(document.getElementById("timeLimitTextBox").value, 10);
			secondsRemaining = testTime * 60;
			var timer = setInterval(updateTimer, 1000);
			return true;
		}
	} else {
		testTime = "unlimited";
		document.getElementById("timeRemaining").innerHTML = "Time remaining: unlimited";
		return true;
	}
}

function updateTimer() {
	secondsRemaining --;
	document.getElementById("timeRemaining").innerHTML = "Seconds remaining: " + secondsRemaining;
}



var selectedAnswers = new Array; // Define a one-dimensional array that will be populated with the user's selected answer for each question. The length of the array is the number of questions in the assessment
var numberOfQuestions;

function nextQuestion() { // This function is used when the beginButton button is pressed to save the user's selected answer to the current question and load the next question in the assessment
	if (questionNumber == 0) {
		if (!validateTime()) {
			alert("Please enter the amount of time for the quiz in minutes, or leave this field blank to have an unlimited amount of time to take the quiz.");
			return false;
		}
	}
	
	if (secondsRemaining <= 0)
	{
		loadResults();
	}

if (secondsRemaining > 0 || testTime == "unlimited") {
	areYouSure = true;
	numberOfQuestions = questionArray.length;
	document.getElementById("timeRemaining").style.display = "inline";
	//document.getElementById("timeRemaining").innerHTML = "Time remaining: " + testTime;
	document.getElementById("assessmentTitle").innerHTML = testName;
	document.getElementById("timeLimitArea").style.display = "none";
	document.getElementById("assessmentArea").style.display = "inline"; // Display the area when the current question and possible answers will be populated. This is initially invisible before the assessment is begun
	if (questionNumber != 0 && questionArray [questionNumber-1][1] != "f") { // Enter this if statement if we're not on the first question and this is not a fill-in-the-blank question
			if (document.getElementById("qInput1_1").checked) {
				selectedAnswers.push(questionArray[questionNumber-1][3]);
			} else if (document.getElementById("qInput1_2").checked) {
				selectedAnswers.push(questionArray[questionNumber-1][4]);
			} else if (document.getElementById("qInput1_3").checked) {
				selectedAnswers.push(questionArray[questionNumber-1][5]);
			} else if (document.getElementById("qInput1_4").checked) {
				selectedAnswers.push(questionArray[questionNumber-1][6]);
			}
			/* For multiple choice or true/false questions, populate the selectedAnswers Array with the text of the answer chosen by the user for the current question, based on which radio button input is selected by the user */
		} else if (questionNumber != 0 && questionArray [questionNumber-1][1] == "f") {
			selectedAnswers.push(document.getElementById("qInput3").value);
			/* For fill-in-the-blank questions, populate the selectedAnswers Array with the text that the user typed into the qInput3 text box */
		}
	
	document.getElementById("qInput1_1").checked = false;
	document.getElementById("qInput1_2").checked = false;
	document.getElementById("qInput1_3").checked = false;
	document.getElementById("qInput1_4").checked = false;
	document.getElementById("qInput3").value = "";
	
	// Reset the inputs to not be selected, so that the user can answer the next question

	if (questionNumber == numberOfQuestions - 1) {
		document.getElementById("beginButton").style.display = "none";
		document.getElementById("finishButton").style.display = "inline";
		document.getElementById("finishButton").style.backgroundColor = "navy";
		document.getElementById("finishButton").style.color = "white";
		document.getElementById("finishButton").style.fontWeight = "bold";	
		// If the user is beginning the final question in the assessment, make the beginButton button disappear and display the finishButton button
	} else {
		document.getElementById("beginButton").innerHTML = "Next Question";
		// If the user is beginning a question on the assessment that is not the final question, change the text of the beginButton button to "Next Question" (this button initially says "Begin Assessment")
	}
	document.getElementById("questionText").innerHTML = questionArray[questionNumber][0]; // Populate the questionText div with the current question
	switch(questionArray[questionNumber][1]) { // Which inputs are displayed for the question are based on what type of question it is
		case 'm':
			document.getElementById("b1").style.display = "inline";
			document.getElementById("q1_1").innerHTML = questionArray[questionNumber][3];
			document.getElementById("b2").style.display = "inline";
			document.getElementById("q1_2").innerHTML = questionArray[questionNumber][4];
			document.getElementById("b3").style.display = "inline";
			document.getElementById("q1_3").innerHTML = questionArray[questionNumber][5];
			document.getElementById("b4").style.display = "inline";
			document.getElementById("q1_4").innerHTML = questionArray[questionNumber][6];
			document.getElementById("answerTextBox").style.display = "none";
			break;
			// For multiple choice questions, display all four radio button inputs and make the text box invisible
		case 't':
			document.getElementById("b1").style.display = "inline";
			document.getElementById("q1_1").innerHTML = questionArray[questionNumber][3];
			document.getElementById("b2").style.display = "inline";
			document.getElementById("q1_2").innerHTML = questionArray[questionNumber][4];
			document.getElementById("b3").style.display = "none";
			document.getElementById("b4").style.display = "none";
			document.getElementById("answerTextBox").style.display = "none";
			break;
			// For true/false questions, display only the first two radio button inputs and make the last two radio button inputs and the text box invisible
		case 'f':
			document.getElementById("b1").style.display = "none";
			document.getElementById("b2").style.display = "none";
			document.getElementById("b3").style.display = "none";
			document.getElementById("b4").style.display = "none";
			document.getElementById("answerTextBox").style.display = "inline";
			break;
			// For fill-in-the-blank questions, make all radio button inputs invisible and display only the text box
		default:
			alert("Whoops!");
			break;
			// Just in case something other the three question types is encountered, display an error to the user
	}
		if (questionNumber != 0) {
	}
	questionNumber++; // Increment the questionNumber variable to move to the next question in the assessment
}
}

function loadResults() { // This function displays the user's results at the end of the assessment
	clearInterval(timer);
	document.getElementById("timeRemaining").style.display = "none";
	document.getElementById("beginButton").style.display = "none";
	document.getElementById("assessmentTitle").innerHTML = "Results";
	document.getElementById("assessmentArea").style.display = "none"; // Make the question and answer area of the page invisible
	document.getElementById("finishButton").style.display = "none"; // Make the finishButton button invisible
	document.getElementById("resultsTableDiv").style.display = "inline";
	if (questionArray [questionNumber-1][1] != "f") { // Save the answer to the last question to the selectedAnswers array, similar to how the nextQuestion function saved the answers to all the other questions
		if (document.getElementById("qInput1_1").checked) {
			selectedAnswers.push(questionArray[questionNumber-1][3]);
		} else if (document.getElementById("qInput1_2").checked) {
			selectedAnswers.push(questionArray[questionNumber-1][4]);
		} else if (document.getElementById("qInput1_3").checked) {
			selectedAnswers.push(questionArray[questionNumber-1][5]);
		} else if (document.getElementById("qInput1_4").checked) {
			selectedAnswers.push(questionArray[questionNumber-1][6]);
		}
	} else if (questionArray [questionNumber-1][1] == "f") {
		selectedAnswers.push(document.getElementById("qInput3").value);
	} else {
		alert("Whoops!");
	}

	var correctAnswers = 0; // Variable for the number of questions that the user answered correctly on the assessment
	var finalScore; // Variable for the user's final score on the assessment as a percentage
	document.getElementById("resultsTable").innerHTML = "";
	var table = document.getElementById("resultsTable"); // Define the table variable as the resultsTable table
	table.style.backgroundColor = "deepskyblue";
	for (i = 0; i <= numberOfQuestions + 1; i++) { // Go through this loop starting with the first question (index 0) and ending with two extra rows at the end of the table (numberOfQuestions + 1, since we're starting the count with 0)
		var row = table.insertRow(i); // Insert a row into table for this question (and define this row as the row variable)
		var cell = row.insertCell(0); // Insert a cell in the first column of row (and define this cell as the cell variable)
		if (i == numberOfQuestions + 1) {
			cell.colSpan = 4; // The last row contains one cell spanning all four columns
			cell.style.backgroundColor = "gold"; // The score is displayed in a cell with a gold background
			cell.style.fontWeight = "bold"; // The score is displayed in bold text
			finalScore = Math.round((correctAnswers/numberOfQuestions) * 100); // finalScore is recorded as an the number of correct answers divided by the number of questions, multiplied by 100 and rounded to an integer
			cell.innerHTML = "Your score is: " + correctAnswers + " / " + numberOfQuestions + " (" + finalScore + "%)";
			return true;
			// In the last time through the loop, display a cell in the last row of table showing the total number of correct answers out of the total possible score, then end the function
		}
		else if (i == 0) {
			row.style.fontWeight = "bold";
			cell.style.backgroundColor = "lightskyblue";
			cell.style.color = "black";
			cell.innerHTML = "Question #";
			// If this is the first time through the loop, populate the first row of the table with the header "Question #" in the first column
			// Set the font-weight style for the row to bold, as this is the first row which is a header for the table. The background color of the cell is lightSkyBlue and the text is black
		} else {
			row.style.fontWeight = "normal";
			cell.style.backgroundColor = "lightskyblue";
			cell.style.color = "black";
			cell.innerHTML = (i);
			// If this is not the first or the last time through the loop, we will be populating the first column in row with the number of the question, which is the same is the loop increment variable i
			// Set the font-weight style for the row to normal, as this only the first and last rows should have bold text. The background color of the cell is lightSkyBlue and the text is black
		}
		var cell = row.insertCell(1); // Add a second cell to row (and set this cell as the cell variable)
		if (i == 0) {
			cell.style.backgroundColor = "lightskyblue";
			cell.style.color = "black";
			cell.innerHTML = "Correct Answer";
			// If this is the first time through the loop, populate the first row of the table with the header "Correct Answer" in the second column
			// The background color of the cell is lightSkyBlue and the text is black
		} else {
			cell.style.backgroundColor = "lightskyblue";
			cell.style.color = "black";
			cell.innerHTML = questionArray[i - 1][2];
			// If this is not the first time through the loop, populate the second column of row with the correct answer for that question
			// The background color of the cell is lightSkyBlue and the text is black
		}
		var cell = row.insertCell(2); // Add a third cell to row (and set this cell as the cell variable)
		if (i == 0) {
			cell.style.backgroundColor = "lightskyblue";
			cell.style.color = "black";
			cell.innerHTML = "Your Answer";
			// If this is the first time through the loop, populate the first row of the table with the header "Your Answer" in the third column
			// The background color of the cell is lightSkyBlue and the text is black
		} else {
			cell.style.backgroundColor = "lightskyblue";
			cell.style.color = "black";
			cell.innerHTML = selectedAnswers[i - 1];
			// If this is not the first time through the loop, populate the third column of row with the user's selected answer for that question
			// The background color of the cell is lightSkyBlue and the text is black
		}
		var cell = row.insertCell(3); // Add a fourth cell to row (and set this cell as the cell variable)
		if (i == 0) {
			cell.style.backgroundColor = "lightskyblue";
			cell.style.color = "black";
			cell.innerHTML = "✔";
			// If this is the first time through the loop, populate the first row of the table with a heavy checkmark character in the fourth column, showing that this is the column showing whether or not the user answered the question correctly
			// The background color of the cell is lightSkyBlue and the text is black
		} else {
			if (selectedAnswers[i - 1] == questionArray[i - 1][2]) {
				cell.style.backgroundColor = "mediumseagreen";
				cell.style.color = "white";
				cell.innerHTML = "✓";
				correctAnswers++;
				// If this is not the first time through the loop, check whether or not the answer that the user chose for the question (in the selectedAnswers Array) matches the correct answer for the question (in the third column of the questionArray Array). If it is correct, display a light checkmark character in the fourth column and increment the correctAnswers variable
				// For correct answers, the background color of the last cell is mediumSeaGreen and the text is white
			} else {
				cell.style.backgroundColor = "crimson";
				cell.style.color = "white";
				cell.innerHTML = "✗";
				// If this is not the first time through the loop and the user did not answer the question correctly, display a "ballot X" character to indicate that the question was answered incorrectly
				// For incorrect answers, the background color of the last cell is crimson and the text is white
			}
		}
	}
}

