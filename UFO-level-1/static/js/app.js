// Assign the data from `data.js` to a descriptive variable
var alien = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = alien.filter(alien => alien.datetime === inputValue);

  console.log(filteredData);
  var tbody = d3.select("tbody");


    // Step 1: Loop Through `data` and console.log each weather report object
    filteredData.forEach(function(alienReport) {
        var row = tbody.append("tr");

        Object.entries(alienReport).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
    });
 });

  

};