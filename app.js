let cityNames = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
let allCities = cityNames.map(el => el.toLowerCase())
let cities = [];
let table = document.querySelector('#table');
let field = document.querySelector('#field');
let message = document.querySelector('#message');
let botMessage = document.querySelector('#botMessage');
let prev = null;

// type city
field.addEventListener('keyup', isEnter);

// if it's enter - let the fun begin
function isEnter(e) {
	if (e.key == 'Enter') {
		checkFirstLetter(prev, isInArray(e.target.value));
		clearInput();
	}
}


//clear input
function clearInput() {
	field.value = '';
	field.focus();
}
//display your message
function displayMessage(text) {
	message.textContent = '';
	message.textContent = text;
}

//check whether it's in array or not
function isInArray(value) {
	let city = value.toLowerCase();
	let text;
	if (cities.includes(city)) {
		text = 'This city has already been typed in - ' + city;
	} else if (checkCity(city)) {
		text = 'I dont know this city - ' + city;
	} else {
		console.log('here');
		return city;
	}
	displayMessage(text);
}
//mark used cities
function markUsedOnes() {
	cities.forEach((el) => {
		let element = document.querySelector(`[data-class="${el}"]`);
		element.classList.add('used');
	})
}
// a robot move with a delay
function robotMoves() {
	if (prev != null) {
		setTimeout(function () {
			prev = chooseCity();
			cities.push(prev);
			markUsedOnes();
			botMessage.textContent = '';
			botMessage.textContent = 'Bot chose: ' + prev;
			chooseCity();
		}, 1000);
	}
}
//does it start with last letter
function checkFirstLetter(previous, current) {
	let text;
	if (current == undefined) {
		return;
	}
	if (previous === null) {
		prev = current;
		cities.push(current);
		markUsedOnes();
		text = 'Great start!';
		displayMessage(text);
		robotMoves();
		return true;
	}
	if (previous[previous.length - 1] == current[0]) {
		cities.push(current);
		markUsedOnes();
		text = 'Great!';
		prev = current;
		robotMoves();
	} else {
		text = 'This city doesnt start with ' + previous[previous.length - 1];
	}
	console.log(prev, previous, current);
	displayMessage(text);
}
//is city in our list
function checkCity(cit) {
	if (allCities.includes(cit)) {
		return false;
	} else {
		return true;
	}
}
//pick a city for robot
function chooseCity() {
	let result = allCities.filter((el) => el.startsWith(prev[prev.length - 1]));
	let authenticArray = getAuthenticArray(cities, result);
	return getRandomCity(authenticArray);
}
//get an authentic array
function getAuthenticArray(inputed, computed) {
	return computed.filter((element, index) => {
		if (inputed.includes(element)) {
		} else {
			return element;
		}
	})
}
//choose a random city
function getRandomCity(arr) {
	if (arr.length == 0) {
		botMessage.textContent = '';
		botMessage.textContent = 'I dont know ^)';
		field.removeEventListener('keyup', isEnter);
	} else {
		return arr[Math.floor(Math.random() * (arr.length - 1))];
	}
}

//create table
function createTable() {
	let firstLetters = new Set();
	let letters = allCities.map((el) => firstLetters.add(el[0]));
	for (let letter of firstLetters) {
		fillTable(createTrs(letter));
	}
}
//create tr
function createTrs(ind) {
	let tr = document.createElement('tr');
	let th = document.createElement('th');
	th.textContent = ind;
	tr.appendChild(th);
	table.appendChild(tr);
	return th;
}
//fill trs
function fillTable(th) {
	let newArr = allCities.filter((el) => { if (el[0] == th.textContent) return el });
	newArr.forEach((el) => {
		let element = document.createElement('td');
		element.textContent = el;
		element.dataset.class = el;
		th.parentElement.appendChild(element);
	})
}

//creating table
createTable();