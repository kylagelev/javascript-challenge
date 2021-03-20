// Assign the data from `data.js` to a descriptive variable
var alien = data;

// Select the button
var button = d3.select("#filter-btn");
var clear = d3.select("#clear-btn");
var tbody = d3.select('#table')

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
clear.on("click", runClear);

function runClear() {
    d3.event.preventDefault();
    console.log('Clear Data');
    tbody.html('')
};

function runEnter() {
    d3.event.preventDefault();
    var tbody = d3.select('#table')
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = alien.filter(alien => alien.datetime === inputValue);

    console.log(filteredData.length);

    if (filteredData.length === 0){
        console.log('No data');
        var row = tbody.append("tr");
        row.text('Search has no results');
     };

    console.log(filteredData);
    var tbody = d3.select("tbody");

    filteredData.forEach(function(alienReport) {
            row = tbody.append("tr");

            Object.entries(alienReport).forEach(function([key, value]) {
                //console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
            });
    });

};