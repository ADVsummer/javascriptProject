
var firstNumber = 0,
secondNumber = 0,
operatorActive = false,
operator,
resultString = "0",
resultNumber = 0,
equalsActive = true;

function numberPressed(button) {
	secondNumber = secondNumber * 10 + Number(button);
	document.getElementById("outputText").placeholder = secondNumber;
}

function operatorPressed(button) {
	if (operatorActive) {
		switch(operator) {
			case "+":
				secondNumber = secondNumber + firstNumber;
			break;
			case "-":
				secondNumber = secondNumber - firstNumber;
			break;
			case "*":
				secondNumber = secondNumber * firstNumber;
			break;
			case "/":
				secondNumber = secondNumber / firstNumber;
			break;
			default:
				alert("Whoops!");
			break;
		}
	}
	operator = button;
	firstNumber = secondNumber;
	secondNumber = 0;
	operatorActive = true;
	document.getElementById("outputText").placeholder = firstNumber;
}

function equalsPressed() {
	if (operatorActive) {
		switch(operator) {
			case "+":
				secondNumber = secondNumber + firstNumber;
			break;
			case "-":
				secondNumber = secondNumber - firstNumber;
			break;
			case "*":
				secondNumber = secondNumber * firstNumber;
			break;
			case "/":
				secondNumber = secondNumber / firstNumber;
			break;
			default:
				alert("Whoops!");
			break;
		}
	}
	firstNumber = secondNumber;
	secondNumber = 0;
	operatorActive = false;
	document.getElementById("outputText").placeholder = firstNumber;
}