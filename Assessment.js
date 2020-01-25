

var testName, testLength; // Variables to later be used for the name of the assessment and the number of minutes the user has to complete the assessment

var assessmentBuilt = false;
var questionArray;

var questionNumber; // The number of the question that the user is currently viewing, initially set to 0 before the assessment is begun

function mainScreen() {
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

function assessmentBuilder() {
	document.getElementById("assessmentTitle").innerHTML = "Assessment Builder";
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
/*	questionArray = [["Which answer is correct? Pick one: (hint - it's C!)", "m", "Answer C!", "Answer A!", "Answer B!", "Answer C!", "Answer D!"],
						["True or false? (hint - it's True!)", "t", "True", "True", "False", null, null],
						["The answer to this question is water", "f", "water", null, null, null]];*/
						
questionArray = [["mc A", "m", "A", "A", "B", "C", "D"],
				["mc F", "m", "F", "E", "F", "G", "H"],
						["True or false? (hint - it's True!)", "t", "True", "True", "False", null, null],
						["mc K", "m", "K", "I", "J", "K", "L"],
						["false", "t", "False", "True", "False", null, null],
						["The answer to this question is water", "f", "water", null, null, null],
						["fitb 123", "f", "123", null, null, null]
						]
						
					
						/* This array was formerly a one-dimensional array that held the content for one question, and is now a two-dimensional array containing information about every question on the assessment. There is one question per row in the Array, and the format of each question's information is:
						Question text, question type (m for multiple choice, t for true/false, f for fill in the blank), the correct answer, and then up to four possible answers */
	timeSelection();
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
	

var selectedAnswers = new Array; // Define a one-dimensional array that will be populated with the user's selected answer for each question. The length of the array is the number of questions in the assessment
var numberOfQuestions;

function nextQuestion() { // This function is used when the beginButton button is pressed to save the user's selected answer to the current question and load the next question in the assessment
	numberOfQuestions = questionArray.length;
	document.getElementById("assessmentTitle").innerHTML = testName;
	document.getElementById("timeLimitArea").style.display = "none";
	document.getElementById("assessmentArea").style.display = "inline"; // Display the area when the current question and possible answers will be populated. This is initially invisible before the assessment is begun
	if (questionNumber != 0 && questionArray [questionNumber-1][1] != "f") { // Enter this if statement if we're not on the first question and this is not a fill-in-the-blank question
			if (document.getElementById("qInput1_1").checked) {
				//selectedAnswers[questionNumber-1] = questionArray[questionNumber-1][3];
				selectedAnswers.push(questionArray[questionNumber-1][3]);
			} else if (document.getElementById("qInput1_2").checked) {
				selectedAnswers.push(questionArray[questionNumber-1][4])
			} else if (document.getElementById("qInput1_3").checked) {
				selectedAnswers.push(questionArray[questionNumber-1][5])
			} else if (document.getElementById("qInput1_4").checked) {
				selectedAnswers.push(questionArray[questionNumber-1][6])
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
	alert("questionNumber == " + questionNumber + "\nquestionArray[questionNumber][1] == " + questionArray[questionNumber][1]);
	switch(questionArray[questionNumber][1]) { // Which inputs are displayed for the question are based on what type of question it is
		case 'm':
			alert("multiple choice question");
			document.getElementById("b1").style.visibility = "display";
			document.getElementById("q1_1").innerHTML = questionArray[questionNumber][3];
			document.getElementById("b2").style.visibility = "display";
			document.getElementById("q1_2").innerHTML = questionArray[questionNumber][4];
			document.getElementById("b3").style.visibility = "display";
			document.getElementById("q1_3").innerHTML = questionArray[questionNumber][5];
			document.getElementById("b4").style.visibility = "display";
			document.getElementById("q1_4").innerHTML = questionArray[questionNumber][6];
			document.getElementById("answerTextBox").style.display = "none";
			break;
			// For multiple choice questions, display all four radio button inputs and make the text box invisible
		case 't':
			alert("true/false question");
			document.getElementById("b1").style.visibility = "display";
			document.getElementById("q1_1").innerHTML = questionArray[questionNumber][3];
			document.getElementById("b2").style.visibility = "display";
			document.getElementById("q1_2").innerHTML = questionArray[questionNumber][4];
			document.getElementById("b3").style.visibility = "hidden";
			document.getElementById("b4").style.visibility = "hidden";
			document.getElementById("answerTextBox").style.display = "none";
			break;
			// For true/false questions, display only the first two radio button inputs and make the last two radio button inputs and the text box invisible
		case 'f':
			alert("fill-in-the-blank question");
			document.getElementById("b1").style.visibility = "hidden";
			document.getElementById("b2").style.visibility = "hidden";
			document.getElementById("b3").style.visibility = "hidden";
			document.getElementById("b4").style.visibility = "hidden";
			document.getElementById("answerTextBox").style.display = "inline";
			break;
			// For fill-in-the-blank questions, make all radio button inputs invisible and display only the text box
		default:
			alert("Whoops!");
			break;
			// Just in case something other the three question types is encountered, display an error to the user
	}
		if (questionNumber != 0) {
	alert("numberOfQuestions == " + numberOfQuestions + "\nquestionNumber == " + questionNumber + "\nselectedAnswers[questionNumber-1] == " + selectedAnswers[questionNumber - 1]);
	}
	questionNumber++; // Increment the questionNumber variable to move to the next question in the assessment
	
}

function loadResults() { // This function displays the user's results at the end of the assessment
	document.getElementById("assessmentTitle").innerHTML = "Results";
	document.getElementById("assessmentArea").style.display = "none"; // Make the question and answer area of the page invisible
	document.getElementById("finishButton").style.display = "none"; // Make the finishButton button invisible
	document.getElementById("resultsTableDiv").style.display = "inline";
	if (questionArray [questionNumber-1][1] != "f") { // Save the answer to the last question to the selectedAnswers array, similar to how the nextQuestion function saved the answers to all the other questions
			if (document.getElementById("qInput1_1").checked) {
				selectedAnswers.push(document.getElementById("qInput1_1").innerHTML);
			} else if (document.getElementById("qInput1_2").checked) {
				sselectedAnswers.push(document.getElementById("qInput1_2").innerHTML);
			} else if (document.getElementById("qInput1_3").checked) {
				selectedAnswers.push(document.getElementById("qInput1_3").innerHTML);
			} else if (document.getElementById("qInput1_4").checked) {
				selectedAnswers.push(document.getElementById("qInput1_4").innerHTML);
			}
		} else if (questionArray [questionNumber-1][1] == "f") {
			selectedAnswers.push(document.getElementById("qInput3").value);
		} else {
			alert("Whoops!");
		}

var correctAnswers = 0; // Variable for the number of questions that the user answered correctly on the assessment
var finalScore; // Variable for the user's final score on the assessment as a percentage
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

