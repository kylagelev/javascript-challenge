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
 //so the remove works to clear the data, however it removes the entire tbody... i want to be able to empty the tbody so that it can be refilled with data
};

function runEnter() {
    d3.event.preventDefault();
    var tbody = d3.select('#table')

    var inputElementdate = d3.select("#datetime");
    var inputElementcity = d3.select("#city");
    var inputElementstate = d3.select("#state");
    var inputElementcountry = d3.select("#country");
    var inputElementshape = d3.select("#shape");

    var inputValuedate = inputElementdate.property("value");
    var inputValuecity = inputElementcity.property("value");
    var inputValuestate = inputElementstate.property("value");
    var inputValuecountry = inputElementcountry.property("value");
    var inputValueshape = inputElementshape.property("value");



    // if (alien.datetime === inputValuedate){
    //     filteredData = alien.filter(alien =>
    //             alien.datetime === inputValuedate
    //          );
    //     return filteredData
    // };



    var filteredData = alien.filter(alien => 
        alien.datetime === inputValuedate ||
        alien.city === inputValuecity ||
        alien.state === inputValuestate ||
        alien.country === inputValuecountry || 
        alien.shape === inputValueshape ||
        alien.datetime === inputValuedate && alien.city === inputValuecity ||
        alien.datetime === inputValuedate && alien.state === inputValuestate ||
        alien.datetime === inputValuedate && alien.country === inputValuecountry ||
        alien.datetime === inputValuedate && alien.shape === inputValueshape ||
        alien.city === inputValuecity && alien.state === inputValuestate ||
        alien.city === inputValuecity && alien.country === inputValuecountry ||
        alien.city === inputValuecity && alien.shape === inputValueshape ||
        alien.state === inputValuestate && alien.country === inputValuecountry ||
        alien.state === inputValuestate && alien.shape === inputValueshape ||
        alien.datetime === inputValuedate && alien.city === inputValuecity && alien.state === inputValuestate ||
        alien.datetime === inputValuedate && alien.city === inputValuecity && alien.state === inputValuestate && alien.country === inputValuecountry ||
        alien.datetime === inputValuedate && alien.city === inputValuecity && alien.state === inputValuestate && alien.country === inputValuecountry && alien.shape === inputValueshape ||
        alien.city === inputValuecity && alien.state === inputValuestate && alien.country === inputValuecountry && alien.shape === inputValueshape ||
        alien.city === inputValuecity && alien.state === inputValuestate && alien.country === inputValuecountry
);

//this is not really working, I think what is happening is because the datetime is first, that even if I had an additional value because it's "or" it will only show one value over the double, multiple filter...





    // var filteredData = alien.filter(alien =>
    //     alien.datetime === inputValuedate
    //  );

    //have to figure out how to do one or two or whatever many filter available, otherwise, it will only show the data that is the same
    //also want to make it so that when the filter doesn't match any data, it tell you instead of displaing data you know...

    console.log(filteredData.length);

    if (filteredData.length === 0){
        console.log('No data');
        var row = tbody.append("tr");
        row.text('Search has no results');
     }

    filteredData.forEach(function(alienReport) {
        var row = tbody.append("tr");
            

            Object.entries(alienReport).forEach(function([key, value]) {
                //console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
            });
        }); 
};

