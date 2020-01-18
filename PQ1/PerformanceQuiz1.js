
alert("Wake up!");

function testAlert() {
alert("testAlert");
}
/*
function movie(releaseDate, runTime, rating, cast, director, genre, synopsis)
{
	this.releaseDate = releaseDate;
	this.runTime = runTime;
	this.rating = rating;
	this.cast = cast;
	this.director = director;
	this.genre = genre;
	this.synopsis = synopsis;
}

movie.setReleaseDate = function(releaseDate)
{
	this.releaseDate = releaseDate;
}

movie.getReleaseDate = function()
{
	return this.releaseDate;
}

movie.setRunTime = function(runTime)
{
	this.runTime = runTime;
}

movie.getRunTime = function()
{
	return this.runTime;
}

movie.setRating = function(rating)
{
	this.rating = rating;
}

movie.getRating = function()
{
	return this.rating;
}

movie.setCast = function(cast)
{
	this.cast = cast;
}

movie.getCast = function()
{
	return this.cast;
}

movie.setDirector = function(director)
{
	this.director = director;
}

movie.getDirector = function()
{
	return this.director;
}

movie.setGenre = function(genre)
{
	this.genre = genre;
}

movie.getGenre = function()
{
	return this.genre;
}

movie.setSynopsis = function(synopsis)
{
	this.synopsis = synopsis;
}

movie.getSynopsis = function()
{
	return this.synopsis;
}

/*================*/

/*
function dataEntry() {

alert("Welcome to the Fandango movie database.\n\nType QUIT to exit at any time");

var UserMovie = new movie;

var UserReleaseDate = prompt("Enter the movie's release date/n/nIn the format MM/DD/YYYY");
UserMovie.setReleaseDate(UserReleaseDate);
document.write(UserMovie.getReleaseDate());

movies.addMovie = function(UserReleaseDate, UserRunTime, UserRating, UserCast, UserDirector, UserGenre, UserSynopsis)

}

/*
var myString = new String("String text goes here");
var myArray = new Array();

*CLASS CONSTRUCTOR* (function classobject ( property, property ). Call with classobject.property)
function myClass (name, address, phone)
{
	this.name = name;
	this.address = address;
	this.phone = phone;
}

*METHOD DEFINITIONS - create a set and get for every property*
myClass.prototype.setName = function(name)
{
	this.name=name;
}

myClass.prototype.getName = function()
{
	return this.name;
}

*CREATE ARRAY CLASS*
function cinema()
{
	this.bookings = new Array();
}

*ADD (user-input) INFO INTO OBJECT*
cinema.prototype.addBooking = function(bookingID, customerName, film, showID)
{
	this.bookings[bookingID] = new customerBooking(bookingID, customerName, film showID);
}
		

*USE THE METHOD*
var MyData = new myClass;

var UserInput = prompt("Enter Your Name");
myData.setName(userInput);
document.write(myData.getname());


...

*BROWSER OBJECT MODEL - BOM*

Objects:
[the browser]
	window
		location
		history
		document
			forms
			images
			links
		navigator
		screen
			colorDepth

<IMG NAME=img1 SRC="" BORDER=0 WIDTH=200 HEIGHT=150>

<SCRIPT LANGUAGE=JavaScript> // er, shouldn't this have quotes?
	var myImages = new Array("usa.jpg","canada.jpg","jamaica.jpg","mexico.jpg");
	var imgIndex = prompt("Enter a number from 0 to 3", ""),
	document.images["img1"].src = myImages[imgIndex];
	
document.write(myImages[imgIndex]);
</SCRIPT>

*EVENT HANDLERS*
<a href="somepage.htm" Name="linkSomePage" id="linkSomePage" onclick="return linkSomePage_onClick()"> Click Me </a> <<< onclick

<script language = "JavaScript">
function linkSomePage_onClick()
{
	alert("You Clicked?");
	return false;
}
function linkSomePage_onClick2()
{
	alert("You Clicked");
	)
	
</script>

<SRIPT LANGUAGE=JavaScript>
window.document.links[0].onclick = linkSomePage_onclick;
window.document.links[1].onclick = linkSomePage_onClick;
</SCRIPT>



*/


/*

var testName, testLength; // variables to later be used for the name of the assessment and the number of minutes the user has to complete the assessment

var questionArray = ["Which answer is correct? Pick one: (hint - it's C!)", "m", "Answer C!", "Answer A!", "Answer B!", "Answer C!", "Answer D!"]
/* populate the array with the content of one question in this format:
   Question text, question type (m for multiple choice, t for true/false, f for fill in the blank), the correct answer, and then up to four possible answers */
/*
function populateQuestion1() {
	document.getElementById("question1").innerHTML = questionArray[0];
	document.getElementById("q1_1").innerHTML = questionArray[3];
	document.getElementById("q1_2").innerHTML = questionArray[4];
	document.getElementById("q1_3").innerHTML = questionArray[5];
	document.getElementById("q1_4").innerHTML = questionArray[6];
	// on page load, populate the question text and the four possible answers for question 1
}

/* placeholder for populating question 2 (true or false)
function populateQuestion2() {
	document.getElementById("question2").innerHTML = questionArray[...];
	document.getElementById("q2_0").innerHTML = questionArray[...];
	document.getElementById("q2_1").innerHTML = questionArray[...];
} */
/*
function checkQuestion1() { // validate the user's selection for question 1
	if (document.getElementById("qInput1_3").checked) { // get the "checked" value for the input
		alert("Question 1 is correct."); // display a message that the question is correct if the correct answer is celected
	}
	else {
		alert("Question 1 is incorrect."); // display a message that the question is incorect if the incorrect answer or no answer is selected
	}
}

/*
