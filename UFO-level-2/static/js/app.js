// Assign the data from `data.js` to a descriptive variable
var alien = data;

//setting variables
// var datetime = alien.map(alien => alien.datetime);
// var city = alien.map(alien => alien.city);
// var state = alien.map(alien => alien.city);
// var country = alien.map(alien => alien.city);
// var shape = alien.map(alien => alien.city);

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

    // if(inputValuedate !== null){
    //     var fData = alien.filter(alien => 
    //         alien.datetime === inputValuedate)
    //     console.log(Data.length);

    //     if (fData.length === 0){
    //         console.log('No data');
    //         var row = tbody.append("tr");
    //         row.text('Search has no results');
    //      }
    
    //      fData.forEach(function(alienReport) {
    //         var row = tbody.append("tr");
                
    
    //             Object.entries(alienReport).forEach(function([key, value]) {
    //                 //console.log(key, value);
    //                 var cell = row.append("td");
    //                 cell.text(value);
    //             });
    //         }); 
    // };

    // }

    // if(inputValuecity !== null){

    // }

    // if(inputValuestate !== null){

    // }

    // if(inputValuecountry !== null){

    // }

    // if(inputValueshape !== null){

    // }

    // if(inputValuedate !== null & inputValuecity !== null){
        
    // }
    // if(inputValuedate !== null & inputValuecity !== null & inputValuestate !== null){
        
    // }
    // if(inputValuedate !== null & inputValuecity !== null & inputValuestate !== null & inputValuecountry !== null){
        
    // }
    // if(inputValuedate !== null & inputValuecity !== null & inputValuestate !== null & inputValuecountry !== null & inputValueshape !== null){
        
    // }


    var fData = alien.filter(alien => 
        alien.datetime === inputValuedate ||
        alien.city === inputValuecity ||
        alien.state === inputValuestate ||
        alien.country === inputValuecountry || 
        alien.shape === inputValueshape
        // alien.datetime === inputValuedate && alien.city === inputValuecity ||
        // alien.datetime === inputValuedate && alien.state === inputValuestate ||
        // alien.datetime === inputValuedate && alien.country === inputValuecountry ||
        // alien.datetime === inputValuedate && alien.shape === inputValueshape ||
        // alien.city === inputValuecity && alien.state === inputValuestate ||
        // alien.city === inputValuecity && alien.country === inputValuecountry ||
        // alien.city === inputValuecity && alien.shape === inputValueshape ||
        // alien.state === inputValuestate && alien.country === inputValuecountry ||
        // alien.state === inputValuestate && alien.shape === inputValueshape ||
        // alien.datetime === inputValuedate && alien.city === inputValuecity && alien.state === inputValuestate ||
        // alien.datetime === inputValuedate && alien.city === inputValuecity && alien.state === inputValuestate && alien.country === inputValuecountry ||
        // alien.datetime === inputValuedate && alien.city === inputValuecity && alien.state === inputValuestate && alien.country === inputValuecountry && alien.shape === inputValueshape ||
        // alien.city === inputValuecity && alien.state === inputValuestate && alien.country === inputValuecountry && alien.shape === inputValueshape ||
        // alien.city === inputValuecity && alien.state === inputValuestate && alien.country === inputValuecountry
    
    );
//this is not really working, I think what is happening is because the datetime is first, that even if I had an additional value because it's "or" it will only show one value over the double, multiple filter...



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

    //no shape
    
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

    //no state, no shape
    );

    var fffffData = ffffData.filter(ffffData => 
    
    //datetime
        ffffData.datetime === inputValuedate &&
        ffffData.city === inputValuecity &&
        ffffData.state === inputValuestate &&
        ffffData.country === inputValuecountry && 
        ffffData.shape === inputValueshape
    
    //no city, no state, no shape
        
    );






    if (inputlist.length === 1)




    // var filteredData = alien.filter(alien =>
    //     alien.datetime === inputValuedate
    //  );

   // have to figure out how to do one or two or whatever many filter available, otherwise, it will only show the data that is the same
  //  also want to make it so that when the filter doesn't match any data, it tell you instead of displaing data you know...

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

