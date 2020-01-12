

class movie {
	constructor(name, releaseDate, runTime, rating, cast, director, genre, synopsis)
	{
		this.name = name;
		this.releaseDate = releaseDate;
		this.runTime = runTime;
		this.rating = rating;
		this.cast = cast;
		this.director = director;
		this.genre = genre;
		this.synopsis = synopsis;
	}
	setName = function(name)
	{
		this.name = name;
	}
	getName = function()
	{
		return this.name;
	}
	setReleaseDate = function(releaseDate)
	{
		this.releaseDate = releaseDate;
	}
	getReleaseDate = function()
	{
		return this.releaseDate;
	}
	setRunTime = function(runTime)
	{
		this.runTime = runTime;
	}
	getRunTime = function()
	{
		return this.runTime;
	}
	setRating = function(rating)
	{
		this.rating = rating;
	}
	getRating = function()
	{
		return this.rating;
	}
	setCast = function(cast)
	{
		this.cast = cast;
	}
	getCast = function()
	{
		return this.cast;
	}
	setDirector = function(director)
	{
		this.director = director;
	}
	getDirector = function()
	{
		return this.director;
	}
	setGenre = function(genre)
	{
		this.genre = genre;
	}
	getGenre = function()
	{
		return this.genre;
	}
	setSynopsis = function(synopsis)
	{
		this.synopsis = synopsis;
	}
	getSynopsis = function()
	{
		return this.synopsis;
	}
}

var movies =
[[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null]];

var lastMovie = 0;

function dataEntry() {
	var UserName, UserReleaseDate, UserRunTime, UserRating, UserCast, UserDirector, UserGenre, UserSynopsis;
	for(i = 0; UserName != "quit"; i++) {
		var UserMovie = new movie("", "", "", "", "", "", "", "");
		for(j = 0; j <= 7; j++) {
			switch (j) {
				case 0:
					UserName = prompt("First, enter the movie's name.");
					if (UserName != "quit") {
						UserMovie.setName(UserName);
					}
					break;
				case 1:
					UserReleaseDate = prompt("First, enter the movie's release date\nin the format MM/DD/YYYY.");
					if (UserReleaseDate != "quit") {
						UserMovie.setReleaseDate(UserReleaseDate);
					}
					break;
				case 2:
				UserRunTime = prompt("Enter the movie's runtime in minutes.");
					if (UserRunTime != "quit") {
						UserMovie.setRunTime(UserRunTime);
					}
					break;
				case 3:
				UserRating = prompt("Enter the movie's MPAA rating.");
					if (UserRating != "quit") {
						UserMovie.setRating(UserRating);
					}
					break;
				case 4:
				UserCast = prompt("Enter the names of the movie's major cast members, separated by commas.");
					if (UserCast != "quit") {
						UserMovie.setCast(UserCast);
					}
					break;
				case 5:
				UserDirector = prompt("Enter the name of the movie's director.");
					if (UserDirector != "quit") {
						UserMovie.setDirector(UserDirector);
					}
					break;
				case 6:
				UserGenre = prompt("Enter the movie's genre.");
					if (UserGenre != "quit") {
						UserMovie.setGenre(UserGenre);
					}
					break;
				case 7:
				UserSynopsis = prompt("Enter the movie's synopsis.");
					if (UserRunTime != "quit") {
						UserMovie.setSynopsis(UserSynopsis);
					}
					break;
				default:
					alert("Whoops!");
					break;
			}
			if (UserName == "quit" || UserReleaseDate == "quit" || UserRunTime == "quit" || UserRating == "quit" || UserCast == "quit" || UserDirector == "quit" || UserGenre == "quit" || UserSynopsis == "quit")
			{
				lastMovie = i;
				alert("Exiting the program.");
				return false;
			}
		}
		movies[0][i] = UserMovie.getName();
		movies[1][i] = UserMovie.getReleaseDate();
		movies[2][i] = UserMovie.getRunTime();
		movies[3][i] = UserMovie.getRating();
		movies[4][i] = UserMovie.getCast();
		movies[5][i] = UserMovie.getDirector();
		movies[6][i] = UserMovie.getGenre();
		movies[7][i] = UserMovie.getSynopsis();
		alert("This movie has been saved.");
		/*with the following information:\n\nName: " + UserMovie.getName() + "\nRelease date: " + UserMovie.getReleaseDate() + "\nRuntime: " + UserMovie.getRunTime() + "\nRating: " + UserMovie.getRating() + "\nCast: " + UserMovie.getCast() + "\nDirector: " + UserMovie.getDirector() + "\nGenre: " + UserMovie.getGenre() + "\nSynopsis: " + UserMovie.getSynopsis());*/
	}
}

function populateResults() {
	var table = document.getElementById("ResultsTable");
	for (i = 0; i < lastMovie; i++) {
		for (j = 0; j <= 10; j++) {
			var row = table.insertRow((i * 11) + j);
			var cell = row.insertCell(0);
			switch (j) {
				case 0:
					cell.innerHTML = "-----------------------------------------------------";
					break;
				case 1:
					cell.innerHTML = "";
					break;
				case 2:
					cell.innerHTML = "Movie: #" + (i + 1);
					break;
				case 3:
					cell.innerHTML = "Movie Name: " + movies[0][i];
					break;
				case 4:
					cell.innerHTML = "Release Date: " + movies[1][i];
					break;
				case 5:
					cell.innerHTML = "Run Time: " + movies[2][i];
					break;
				case 6:
					cell.innerHTML = "Rating: " + movies[3][i];
					break;
				case 7:
					cell.innerHTML = "Cast: " + movies[4][i];
					break;
				case 8:
					cell.innerHTML = "Director: " + movies[5][i];
					break;
				case 9:
					cell.innerHTML = "Genre: " + movies[6][i];
					break;
				case 10:
					cell.innerHTML = "Synopsis: " + movies[7][i];
					break;
				default:
					alert("Whoops!");
					break;
			}
		}
	}
}