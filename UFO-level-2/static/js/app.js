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
 //clears data
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

    inputlist = []
    
    if(inputValuedate !== ''){
    inputlist.push(inputValuedate)
    }
    if (inputValuecity !== ''){
    inputlist.push(inputValuecity)
    }
    if (inputValuestate !== ''){
    inputlist.push(inputValuestate)
    }
    if (inputValuecountry !== ''){
    inputlist.push(inputValuecountry)
    }
    if (inputValueshape !== ''){
    inputlist.push(inputValueshape)
    }

    console.log(inputlist.length)
    console.log(inputValuedate)
    console.log(inputValuecity)


//I want to now decide what data to use depending on the inputlistlength


    var fData = alien.filter(alien => 
        alien.datetime === inputValuedate ||
        alien.city === inputValuecity ||
        alien.state === inputValuestate ||
        alien.country === inputValuecountry || 
        alien.shape === inputValueshape
    );

    var ffData = fData.filter(fData => 
    //datetime
        fData.datetime === inputValuedate &
        fData.city === inputValuecity ||
        fData.datetime === inputValuedate &
        fData.state === inputValuestate ||
        fData.datetime === inputValuedate &
        fData.country === inputValuecountry || 
        fData.datetime === inputValuedate &
        fData.shape === inputValueshape ||

    //city
        fData.city === inputValuecity &
        fData.state === inputValuestate ||
        fData.city === inputValuecity &
        fData.country === inputValuecountry ||
        fData.city === inputValuecity &
        fData.shape === inputValueshape ||

    //state
        fData.state === inputValuestate &
        fData.country === inputValuecountry ||
        fData.state === inputValuestate &
        fData.shape === inputValueshape ||

    //country
        fData.country === inputValuecountry &
        fData.shape === inputValueshape

    //no shape
        );


    
    var fffData = ffData.filter(ffData => 
    
    //datetime
        ffData.datetime === inputValuedate &
        ffData.city === inputValuecity & 
        ffData.state === inputValuestate ||

        ffData.datetime === inputValuedate &
        ffData.city === inputValuecity & 
        ffData.country === inputValuecountry ||

        ffData.datetime === inputValuedate &
        ffData.city === inputValuecity & 
        ffData.shape === inputValueshape ||

    //city
        ffData.city === inputValuecity &
        ffData.state === inputValuestate &
        ffData.country === inputValuecountry ||

        ffData.city === inputValuecity &
        ffData.state === inputValuestate &
        ffData.shape === inputValueshape ||

    //state
        ffData.state === inputValuestate &
        ffData.country === inputValuecountry &
        ffData.shape === inputValueshape

    //no country, no shape
    
    );

    var ffffData = fffData.filter(fffData => 

    //datetime
    fffData.datetime === inputValuedate &
    fffData.city === inputValuecity & 
    fffData.state === inputValuestate &
    fffData.country === inputValuecountry ||

    fffData.datetime === inputValuedate &
    fffData.city === inputValuecity & 
    fffData.state === inputValuestate &
    fffData.shape === inputValueshape ||

    //city
    fffData.city === inputValuecity &
    fffData.state === inputValuestate &
    fffData.country === inputValuecountry &
    fffData.shape === inputValueshape

    //no state, no country, no shape
    );

    var fffffData = ffffData.filter(ffffData => 
    
    //datetime
        ffffData.datetime === inputValuedate &&
        ffffData.city === inputValuecity &&
        ffffData.state === inputValuestate &&
        ffffData.country === inputValuecountry && 
        ffffData.shape === inputValueshape
    
    //no city, no state, no country, no shape
        
    );

//choicing the filtered data based on length of input list

    if (inputlist.length === 1){
        var filteredData = fData
    }
    if (inputlist.length === 2){
        var filteredData = ffData
    }
    if (inputlist.length === 3){
        var filteredData = fffData
    }
    if (inputlist.length === 4){
        var filteredData = ffffData
    }
    if (inputlist.length === 5){
        var filteredData = fffffData
    }

    console.log(filteredData.length);

     filteredData.forEach(function(alienReport) {
        var row = tbody.append("tr");

        if (filteredData.length === 0){
            console.log('No data');
            var row = tbody.append("tr");
            row.text('Search has no results');
         };
        
            Object.entries(alienReport).forEach(function([key, value]) {
                //console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
            });
        }); 
};

