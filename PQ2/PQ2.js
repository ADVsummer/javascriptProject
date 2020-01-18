

class event {
	constructor(venue, address, city, state, zip, date, time, price, phone, website, alsoPlaying)
	{
		this.venue = venue;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.date = date;
		this.time = time;
		this.price = price;
		this.phone = phone;
		this.website = website;
		this.alsoPlaying = alsoPlaying;
	}
	setVenue = function(venue)
	{
		this.venue = venue;
	}
	getVenue = function()
	{
		return this.venue;
	}
	setAddress = function(address)
	{
		this.address = address;
	}
	getAddress = function()
	{
		return this.address;
	}
	setCity = function(city)
	{
		this.city = city;
	}
	getCity = function()
	{
		return this.city;
	}
	setState = function(state)
	{
		this.state = state;
	}
	getState = function()
	{
		return this.state;
	}
	setZip = function(zip)
	{
		this.zip = zip;
	}
	getZip = function()
	{
		return this.zip;
	}
	setDate = function(date)
	{
		this.date = date;
	}
	getDate = function()
	{
		return this.date;
	}
	setTime = function(time)
	{
		this.time = time;
	}
	getTime = function()
	{
		return this.time;
	}
	setPrice = function(price)
	{
		this.price = price;
	}
	getPrice = function()
	{
		return this.price;
	}
	setPhone = function(phone)
	{
		this.phone = phone;
	}
	getPhone = function()
	{
		return this.phone;
	}
	setWebsite = function(website)
	{
		this.website = website;
	}
	getWebsite = function()
	{
		return this.website;
	}
	setAlsoPlaying = function(alsoPlaying)
	{
		this.alsoPlaying = alsoPlaying;
	}
	getAlsoPlaying = function()
	{
		return this.alsoPlaying;
	}
}

	var events = 
	[[null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, null]];
		
	var lastEvent = 0;
	var eventNumber = 0;

	var savedOutput;

	function saveData() {
		
		var userEvent = new event("", "", "", "", "", "", "", "", "", "", "");
		
		userEvent.setVenue(document.getElementById("venueInput").value);
		userEvent.setAddress(document.getElementById("addressInput").value);
		userEvent.setCity(document.getElementById("cityInput").value);
		userEvent.setState(document.getElementById("stateInput").value);
		userEvent.setZip(document.getElementById("zipInput").value);
		userEvent.setDate(document.getElementById("dateInput").value);
		userEvent.setTime(document.getElementById("timeInput").value);
		userEvent.setPrice(document.getElementById("priceInput").value);
		userEvent.setPhone(document.getElementById("phoneInput").value);
		userEvent.setWebsite(document.getElementById("websiteInput").value);
		userEvent.setAlsoPlaying(document.getElementById("alsoPlayingInput").value);
		
		events[eventNumber][0] = userEvent.getVenue();
		events[eventNumber][1] = userEvent.getAddress();
		events[eventNumber][2] = userEvent.getCity();
		events[eventNumber][3] = userEvent.getState();
		events[eventNumber][4] = userEvent.getZip();
		events[eventNumber][5] = userEvent.getDate();
		events[eventNumber][6] = userEvent.getTime();
		events[eventNumber][7] = userEvent.getPrice();
		events[eventNumber][8] = userEvent.getPhone();
		events[eventNumber][9] = userEvent.getWebsite();
		events[eventNumber][10] = userEvent.getAlsoPlaying();
		
		var table = document.createElement("table");
		for (i = 0; i < 10; i++) {
			var row = table.insertRow(i);
			var cell = row.insertCell(0);
			switch (i) {
				case 0:
					cell.innerHTML = "Venue:";
					break;
				case 1:
					cell.innerHTML = "Address:";
					break;
				case 2:
					cell.innerHTML = "City:";
					break;
				case 3:
					cell.innerHTML = "State:";
					break;
				case 4:
					cell.innerHTML = "Zip:";
					break;
				case 5:
					cell.innerHTML = "Date:";
					break;
				case 6:
					cell.innerHTML = "Time:";
					break;
				case 7:
					cell.innerHTML = "Price:";
					break;
				case 8:
					cell.innerHTML = "Phone:";
					break;
				case 9:
					cell.innerHTML = "Website:";
					break;
				case 10:
					cell.innerHTML = "With:";
					break;
				default:
					alert("Whoops!");
					break;
			}
			cell = row.insertCell(1);
			cell.innerHTML = events[eventNumber][i];
		}

		var element = document.getElementById("results");
		element.appendChild(table);

		eventNumber++;	
	}
		
	

	function clearFields() {
		document.getElementById("venueInput").value = "";
		document.getElementById("addressInput").value = "";
		document.getElementById("cityInput").value = "";
		document.getElementById("stateInput").value = "";
		document.getElementById("zipInput").value = "";
		document.getElementById("dateInput").value = "";
		document.getElementById("timeInput").value = "";
		document.getElementById("priceInput").value = "";
		document.getElementById("phoneInput").value = "";
		document.getElementById("websiteInput").value = "";
		document.getElementById("alsoPlayingInput").value = "";
	}
