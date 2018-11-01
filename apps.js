var stores = [];
var hoursOfOps = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var hourlyCookieTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function Store(name, minCustPerHour, maxCustPerHour, avgCookiesPerCust, hoursOfOps) {
  console.log('this', this);

  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.hoursOfOps = hoursOfOps;
  this.dailyTotal = 0;

  stores.push(this);

  this.addRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);
  this.addHourlySales();
  this.render();
}

Store.prototype.addRandomCustPerHour = function (min, max) { //the purpose of this method is to get a number of customers for each hour of the day
  for (var i = 0; i < this.hoursOfOps.length; i++) {
    var randomCust = Math.floor(Math.random() * (max - min + 1) + min); // floor rounds down, so there are no decimals
    this.custPerHour.push(randomCust); // number of customers per hour based on a randomly generated number of customers that lies somewhere between in the max and min given
  }
};

Store.prototype.addHourlySales = function () {
  //random number of customers will be multiplied by the average cookies per customer to get hourly sales
  //this is achieved by using a loop to push hourly sales into each hour of operation
  for (var i = 0; i < this.hoursOfOps.length; i++) {
    var perHour = Math.floor(this.custPerHour[i] * this.avgCookiesPerCust);
    this.cookiesPerHour.push(perHour); //multiply a random number of customers * average cookies per customer
    this.dailyTotal += perHour; //+= means this.dailyTotal + perHour; per hour cookies are added into the daily sum
  }
};

Store.prototype.render = function () {
  // ---> This is where the function will calculate cookies for each store
  var tableBodyEl = document.getElementById('tbl-body'); // Anchor to tbl-body element in HTML
  var tableRowEl = document.createElement('tr'); // Create a new <tr></tr>

  var tableHeadEl = document.createElement('th'); // Create a new <th></th>
  tableHeadEl.textContent = this.name; // Give the th element text content
  tableRowEl.appendChild(tableHeadEl); // Add the th element as a child to the tr element

  // ---> Here, put a loop so that the function will run through all the hours of operation and find the number of cookies for each hour.
  for (var i = 0; i < this.hoursOfOps.length; i++) {
    var tableDataEl = document.createElement('td');
    tableDataEl.textContent = this.cookiesPerHour[i];
    tableRowEl.appendChild(tableDataEl);
  }

  tableBodyEl.appendChild(tableRowEl);
};

function createHeader() {
  var tableHeadEl = document.getElementById('tbl-head');
  var tableRowHeadEl = document.createElement('tr');
  tableHeadEl.appendChild(tableRowHeadEl);

  var thHeadEl = document.createElement('th');
  tableRowHeadEl.appendChild(thHeadEl);
  thHeadEl.textContent = ' ';

  for(var i = 0; i < hoursOfOps.length; i++) {
    var hours = document.createElement('th');
    tableRowHeadEl.appendChild(hours);
    hours.textContent = hoursOfOps[i];
  }
}

function createFooter() {
  var tableFooterEl = document.createElement('tbl-foot');
  return tableFooterEl;
}

function createTable() {
  // This function is used to establish ONE SINGLE table in the DOM for us to work with when we start rendering individual rows for each storeLocation
  var mainEl = document.getElementById('main-content');
  var tableEl = document.createElement('table');
  var tableHeadEl = document.createElement('thead');
  var tableBodyEl = document.createElement('tbody');
  var tableFootEl = document.createElement('tfoot');

  tableEl.id = 'daily-cookie-sales-table';
  tableHeadEl.id = 'tbl-head';
  tableBodyEl.id = 'tbl-body';
  tableFootEl.id = 'tbl-foot';

  mainEl.appendChild(tableEl);
  tableEl.appendChild(tableHeadEl);
  tableEl.appendChild(tableBodyEl);
  tableEl.appendChild(tableFootEl);

  createHeader();
}
createTable();

console.log(stores);

//Below: these variables will make a table with the store info
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']);
var seatacAirport = new Store('Seatac Airport', 3, 24, 1.2, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']);
var alki = new Store('Alki', 2, 16, 4.6, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']);


console.log(stores);