// var name = 'Michaelangelo';

// function sayHello(name){
//   return `Hello, ${name}, how are you today?`;
// }

// var turtleMichealangelo = {
//   name: 'Michaelangelo',
//   shell: true,
//   age: 15,
//   color: 'orange',
//   type: 'box',
//   size: 62.3,
//   ninja: true,
//   mutant: true,
//   sayHello: function() {
//     return `Hello, my name is ${this.name}, and I am ${this.size} .`;
//   },
// };

var hoursOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '6pm', '7pm', '8pm'];

var location1stAve = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  avgCus: [],
  avgCookie: [],
  totalCookies: 0,
  salesRandomCustomer: function () { //generates a random number of customers based on min & max
    for (var i = 0; i < hoursOperation.length; i++) {
      //   var min = Math.ceil(this.minCust);
      //   var max = Math.floor(this.maxCust);
      var ranNumCustomer = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust; //min & max are inclusive
      this.avgCus.push(ranNumCustomer);
    }
  },

  averageCookiesPerHour: function () {
    this.salesRandomCustomer();
    for (var i = 0; i < hoursOperation.length; i++) {
      var avgCookieCount = Math.floor(this.avgCus[i] * this.avgCookieSale); //number of cookies sold based on a random number of customers
      this.avgCookie.push(avgCookieCount);
    }
  },

  totalCookiesSum: function () {
    this.salesRandomCustomer();
    for (var i = 0; i < hoursOperation.length; i++) {
      this.totalCookies += this.avgCookie[i];
    }
    return this.totalCookies;
  }
};
location1stAve.salesRandomCustomer();
location1stAve.averageCookiesPerHour();
location1stAve.totalCookiesSum();

//   render: function() {
//     // create an element
//     // provide content for that element
//     // append the element to the page (in a specific place)
//     // var container = document.createElement('bananas');  // This will create <bananas></bananas> BUT DOES NOT WORK
//     var container = document.createElement('section');
//     var nameEl = document.createElement('h3');
//     var messageEl = document.createElement('p');

//     nameEl.textContent = this.name;
//     messageEl.textContent = `I am a ninja and I am ${this.color}.`;

//     container.appendChild(nameEl);
//     container.appendChild(messageEl);
//     console.log('container', container);

//     var mainEl = document.getElementById('main-content');
//     mainEl.appendChild(container);
//   }
// };

// var nums = [1, 2, 3, 4];

// turtleDonatello.render();