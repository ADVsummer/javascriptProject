
var userName;

function promptName() {
	userName = prompt("Enter the user's name"); // Prompt for the user's name
	window.status = userName; // Set the status bar text to the user's name via the window.status object
}

function displayDesc(shape) { // Function for displaying information about the shape. The value that is passed is the image's src attribute.
	var shapeName = shape.substring(shape.lastIndexOf("/") + 1, shape.length - 4) // Parse the name of the shape being displayed from the full file path by starting with the character after the last "/" and omitting the ".png" at the end of the file path 
	if (shapeName.charAt(0) == 'a'
		|| shapeName.charAt(0) == 'e'
		|| shapeName.charAt(0) == 'i'
		|| shapeName.charAt(0) == 'o'
		|| shapeName.charAt(0) == 'u')
		{
			alert("This shape is an " + shapeName + "."); // Get the first character of the shape name; if it is a vowel, use the word "an" in the alert.
		} else {
			alert("This shape is a " + shapeName + "."); // If the first character of the shape name is anything but a vowel, use the word "a" in the alert.
		}
}