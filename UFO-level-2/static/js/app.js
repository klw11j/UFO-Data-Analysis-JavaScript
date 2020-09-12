// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("filter-btn");
var date = d3.select("#datetime");
var city = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "comments"]

console.log(data)

tableData.forEach(report => {
    console.log(report);
    var tableRow = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = tableRow.append("td");
        cell.text(value);
    })
})

var clickEvent = d3.select("#filter-btn");

clickEvent.on("click", function() {
    d3.select("tbody").html("");
    d3.event.preventDefault();

    var dateTime = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");

    filteredUFO = tableData; 

        if (dateTime) {
            filteredUFO = filteredUFO.filter(record => record.datetime === dateTime);
        }

        if (city) {
            filteredUFO = filteredUFO.filter(record => record.city === city);

        }

        if (state) {
            filteredUFO = filteredUFO.filter(record => record.state === state);
        }

        if (country) {
            filteredUFO = filteredUFO.filter(record => record.country === country);
        }

        if (shape) {
            filteredUFO = filteredUFO.filter(record => record.shape === shape);
        }
    
    filteredUFO.forEach(report => {
        var tableRow = tbody.append("tr");

        Object.entries(report).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
})
