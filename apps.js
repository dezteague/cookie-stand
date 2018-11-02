var stores = [];//this array is left empty so that stores can be added later
var hoursOfOps = ['Location','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(name, min, max, avg) { //the items below are things I want to know for each store individually
  //Key:value pairs
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.custPerHour = []; // this will be randomly generated below
  this.cookiesPerHour = []; // random # of customers * average cookies per customer
  this.dailyTotal = 0; //each store will display a total number of cookies for the day

  stores.push(this);// everything with 'this.' will be pushed into the stores variable
  this.render();

  createTableFooter();
}

Store.prototype.generateRandomCustPerHour = function (min, max) { //the purpose of this method is to get a number of customers for each hour of the day
  for (var i = 0; i < hoursOfOps.length; i++) { // the loop will run through all hours of operation, starting at position [0]
    var randomCust = Math.floor(Math.random() * (max - min + 1) + min); // floor rounds down, so there are no decimals
    // number of customers per hour based on a randomly generated number of customers that lies somewhere between in the max and min given
    this.custPerHour.push(randomCust); //random customers gets pushed into the value of customers per hour
  }
};

Store.prototype.generateHourlySales = function () {
  //this line is going to populate custPerHour array in the loop below
  this.generateRandomCustPerHour(this.min, this.max);

  //random number of customers will be multiplied by the average cookies per customer to get hourly sales
  //this is achieved by using a loop to push hourly sales into each hour of operation
  for (var i = 0; i < hoursOfOps.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avg);
    this.cookiesPerHour.push(perHour); // per hour is pushed into cookies per hour to populate hourly sales data

    this.dailyTotal += perHour; //+= means this.dailyTotal + perHour; per hour cookies are added into the daily sum
  }
};

Store.prototype.render = function () {
  //line below generates random customers per hour & generate hourly sales
  this.generateHourlySales();

  // ---> This is where the function will calculate cookies for each store
  var tbodyEl = document.getElementById('tbl-body'); // Anchor to tbl-body element in HTML
  var trEl = document.createElement('tr'); // Create a new <tr></tr>

  var thEl = document.createElement('th'); // Create a new <th></th>
  thEl.textContent = this.name; // Give the th element text content (store names)
  trEl.appendChild(thEl); // Add the th element as a child to the tr element

  // ---> Here, put a loop so that the function will run through all the hours of operation and find the number of cookies for each hour.
  for (var i = 0; i < hoursOfOps.length; i++) {
    var tdEl = document.createElement('td');// create a new <td></td>
    tdEl.textContent = this.cookiesPerHour[i];// populate td with number of cookies per hour
    trEl.appendChild(tdEl);// attach data element to the row parent in html
  }

  var totalEl = document.createElement('td');//create a new td that will eventually attach to the hours of operation row
  totalEl.textContent = this.dailyTotal;//populate the total element with content (daily total, per store)
  trEl.appendChild(totalEl);// attach totals to the table row

  tbodyEl.appendChild(trEl);// link the table row to the parent (body)
};

function createTable() {
  var mainEl = document.getElementById('main-content');// anchor main element to main-content in HTML
  var tblEl = document.createElement('table');//create <table>
  tblEl.id = 'sales-table';
  mainEl.appendChild(tblEl);//link the table to the main element (main-content in HTML)
}

function createTableHeader() {// this function will allow the table to print the hours of operation at the top
  var tblEl = document.getElementById('sales-table');//link to the id above in createTable
  var theadEl = document.createElement('thead');//creates new <head>
  var trEl = document.createElement('tr');//creates new <tr>
  var emptyTh = document.createElement('th');//leaves an empty space as the "table head"

  trEl.appendChild(emptyTh);//link the empty head to the row that exists inside the table header

  for (var i = 0; i < hoursOfOps.length; i++) {// this loop will make all the hours show up, not just 6am
    var thEl = document.createElement('th');//create <head>
    thEl.textContent = hoursOfOps[i];//the hours of operation are assigned to the header
    trEl.appendChild(thEl);//since the head of the row is empty, this header element attaches the the row (parent, aka empty head)
  }

  var totalEl = document.createElement('th');
  totalEl.textContent = 'Total';
  trEl.appendChild(totalEl);

  theadEl.appendChild(trEl);
  tblEl.appendChild(theadEl);
}

function createTableBody() {
  var tblEl = document.getElementById('sales-table');
  var tbodyEl = document.createElement('tbody');
  tbodyEl.id = 'tbl-body';
  tblEl.appendChild(tbodyEl);
}

function createTableFooter() {
  var tfootElCheck = document.getElementById('tbl-foot');

  if(tfootElCheck) {
    tfootElCheck.remove();
  }

  var tblEl = document.getElementById('sales-table');
  var tfootEl = document.createElement('tfoot');
  var trEl = document.createElement('tr');

  tfootEl.id = 'tbl-foot';

  var emptyThEl = document.createElement('th');
  trEl.appendChild(emptyThEl);

  var grandTotal = 0;
  for(var i = 0; i < hoursOfOps.length; i++) {
    var tdEl = document.createElement('td');
    var totals = 0;

    for(var j = 0; j < stores.length; j++) {
      totals += stores[j].cookiesPerHour[i];
    }

    tdEl.textContent = totals;
    trEl.appendChild(tdEl);

    grandTotal += totals;
  }

  var grandTotalEl = document.createElement('td');
  grandTotalEl.textContent = grandTotal;
  trEl.appendChild(grandTotalEl);

  tfootEl.appendChild(trEl);
  tblEl.appendChild(tfootEl);
}

(function run() {
  createTable();
  createTableHeader();
  createTableBody();
})();


//Below: these variables will make a table with the store info
new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

document.getElementById('sales-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = event.target.storename.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;

  new Store(name, min, max, avg);

  event.target.storename.value = '';
  event.target.min.value = '';
  event.target.max.value = '';
  event.target.avg.value = '';
});


