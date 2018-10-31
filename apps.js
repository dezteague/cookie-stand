var stores = [];

function Stores(name, minCustPerHour, maxCustPerHour, avgCookiesPerCust)

console.log('this', this)

this.name = name;
this.minCustPerHour = minCustPerHour;
this.maxCustPerHour = maxCustPerHour;
this.avgCookiesPerCust = avgCookiesPerCust;
this.custPerHour = [];

stores.push(this);
this.render();

Stores.prototype.render = function () {
  // ---> This is where the function will calculate cookies for each store
  var tbodyEl = document.getElementById('tbl-body'); // Anchor to HTMLElement with an ID of tbl-body
  var trEl = document.createElement('tr'); // Create a new <tr></tr>
  var thEl = document.createElement('th'); // Create a new <th></th>
  thEl.textContent = this.name; // Give the th element text content
  trEl.appendChild(thEl); // Add the th element as a child to the tr element

  // ---> Here, put a loop so that the function will run through all the hours of operation and find the number of cookies for each hour.  this logic came from lab06

  generateRandomCustPerHour: function (min, max) { // the goal of this function is to get a number for each hourOfOp
    for (var i = 0; i < this.hourOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min); // floor rounds down
      this.custPerHour.push(randomCust);
    }
    console.log(this.custPerHour);
  }

  generateHourlySales: function() {
    // line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for (var i = 0; i < this.hourOfOps.length; i++) {
      var perHour = Math.floor(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour); //multiply a random number of customers * average cookies per customer

      this.dailyTotal += perHour; //+= means this.dailyTotal + perHour; per hour cookies are added into the daily sum

      // STEP one: create elements
      var minCustPerHourEl = document.createElement('td');
      var maxCustPerHourEl = document.createElement('td');
      var avgCookiesPerCustEl = document.createElement('td');

      // STEP two: give elements text content
      minCustPerHourEl.textContent = this.minCustPerHour;
      maxCustPerHourEl.textContent = this.maxCustPerHour;
      avgCookiesPerCustEl.textContent = this.avgCookiesPerCust;

      // STEP three: append the variables
      trEl.appendChild(minCustPerHourEl);
      trEl.appendChild(maxCustPerHourEl);
      trEl.appendChild(avgCookiesPerCustEl);

      // LAST: attach the row element to the body element
      tbodyEl.appendChild(trEl);
    };

    function displayTable() {
      var mainEl = document.getElementById('main-content');
      var tblEl = document.createElement('table');
      var theadEl = document.createElement('thead');
      var tbodyEl = document.createElement('tbody');
      var tfootEl = document.createElement('tfoot');

      mainEl.appendChild(tblEl);
      tblEl.appendChild(theadEl);
      tblEl.appendChild(tbodyEl);
      tblEl.appendChild(tfootEl);

      tblEl.id = 'cookies-table';
      theadEl.id = 'tbl-head';
      tbodyEl.id = 'tbl-body';
      tfootEl.id = 'tbl-foot';
      tblEl.className = 'tbl';
    }