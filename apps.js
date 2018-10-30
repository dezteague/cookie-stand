
var pikeAndFirst = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [], // this comes from random generation in line 11. could be anything between 23-65
  cookiesPerHour: [],
  hourOfOps: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '6pm', '7pm', '8pm'],
  dailyTotal: 0,
  generateRandomCustPerHour: function (min, max) { // the goal of this function is to get a number for each hourOfOp
    for (var i = 0; i < this.hourOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min); // floor rounds down
      this.custPerHour.push(randomCust);
    }
    console.log(this.custPerHour);
  },
  generateHourlySales: function () {
    // line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for (var i = 0; i < this.hourOfOps.length; i++) {
      var perHour = Math.floor(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour); //multiply a random number of customers * average cookies per customer

      this.dailyTotal += perHour; //+= means this.dailyTotal + perHour; per hour cookies are added into the daily sum
    }
  },
  render: function () { //this purpose of render is to get things to show up on the page
    // the line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();
    //this.hoursOfOps = ['6am', '7am', '8am']
    //this.custPerHour = [24, 55, 33]
    //this.cookiesPerHour = [128, 222, 332]

    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3');
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hourOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hourOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};
pikeAndFirst.render();

var seatacAirport = {
  name: 'SeaTac Airport',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [], // this comes from random generation in line 11. could be anything between 23-65
  cookiesPerHour: [],
  hourOfOps: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '6pm', '7pm', '8pm'],
  dailyTotal: 0,
  generateRandomCustPerHour: function (min, max) { // the goal of this function is to get a number for each hourOfOp
    for (var i = 0; i < this.hourOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min); // floor rounds down
      this.custPerHour.push(randomCust);
    }
    console.log(this.custPerHour);
  },
  generateHourlySales: function () {
    // line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for (var i = 0; i < this.hourOfOps.length; i++) {
      var perHour = Math.floor(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour); //multiply a random number of customers * average cookies per customer

      this.dailyTotal += perHour; //+= means this.dailyTotal + perHour; per hour cookies are added into the daily sum
    }
  },
  render: function () { //this purpose of render is to get things to show up on the page
    // the line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();
    //this.hoursOfOps = ['6am', '7am', '8am']
    //this.custPerHour = [24, 55, 33]
    //this.cookiesPerHour = [128, 222, 332]

    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3');
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hourOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hourOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};
seatacAirport.render();

var seattleCenter = {
  name: 'Seattle Center',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [], // this comes from random generation in line 11. could be anything between 23-65
  cookiesPerHour: [],
  hourOfOps: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '6pm', '7pm', '8pm'],
  dailyTotal: 0,
  generateRandomCustPerHour: function (min, max) { // the goal of this function is to get a number for each hourOfOp
    for (var i = 0; i < this.hourOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min); // floor rounds down
      this.custPerHour.push(randomCust);
    }
    console.log(this.custPerHour);
  },
  generateHourlySales: function () {
    // line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for (var i = 0; i < this.hourOfOps.length; i++) {
      var perHour = Math.floor(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour); //multiply a random number of customers * average cookies per customer

      this.dailyTotal += perHour; //+= means this.dailyTotal + perHour; per hour cookies are added into the daily sum
    }
  },
  render: function () { //this purpose of render is to get things to show up on the page
    // the line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();
    //this.hoursOfOps = ['6am', '7am', '8am']
    //this.custPerHour = [24, 55, 33]
    //this.cookiesPerHour = [128, 222, 332]

    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3');
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hourOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hourOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};
seattleCenter.render();

var capitolHill = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [], // this comes from random generation in line 11. could be anything between 23-65
  cookiesPerHour: [],
  hourOfOps: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '6pm', '7pm', '8pm'],
  dailyTotal: 0,
  generateRandomCustPerHour: function (min, max) { // the goal of this function is to get a number for each hourOfOp
    for (var i = 0; i < this.hourOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min); // floor rounds down
      this.custPerHour.push(randomCust);
    }
    console.log(this.custPerHour);
  },
  generateHourlySales: function () {
    // line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for (var i = 0; i < this.hourOfOps.length; i++) {
      var perHour = Math.floor(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour); //multiply a random number of customers * average cookies per customer

      this.dailyTotal += perHour; //+= means this.dailyTotal + perHour; per hour cookies are added into the daily sum
    }
  },
  render: function () { //this purpose of render is to get things to show up on the page
    // the line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();
    //this.hoursOfOps = ['6am', '7am', '8am']
    //this.custPerHour = [24, 55, 33]
    //this.cookiesPerHour = [128, 222, 332]

    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3');
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hourOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hourOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};
capitolHill.render();

var alki = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [], // this comes from random generation in line 11. could be anything between 23-65
  cookiesPerHour: [],
  hourOfOps: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '6pm', '7pm', '8pm'],
  dailyTotal: 0,
  generateRandomCustPerHour: function (min, max) { // the goal of this function is to get a number for each hourOfOp
    for (var i = 0; i < this.hourOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min); // floor rounds down
      this.custPerHour.push(randomCust);
    }
    console.log(this.custPerHour);
  },
  generateHourlySales: function () {
    // line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for (var i = 0; i < this.hourOfOps.length; i++) {
      var perHour = Math.floor(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour); //multiply a random number of customers * average cookies per customer

      this.dailyTotal += perHour; //+= means this.dailyTotal + perHour; per hour cookies are added into the daily sum
    }
  },
  render: function () { //this purpose of render is to get things to show up on the page
    // the line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();
    //this.hoursOfOps = ['6am', '7am', '8am']
    //this.custPerHour = [24, 55, 33]
    //this.cookiesPerHour = [128, 222, 332]

    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3');
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for (var i = 0; i < this.hourOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hourOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};
alki.render();

//THIS WORKS! DONT RM ANYTHING ANYMORE, POR FAVOR!!!!