// from data.js
var tableData = data;

console.log(tableData)

// Get a reference to the table body 
var tbody = d3.select("tbody");
var button = d3.select("filter-btn");
var date = d3.select("#datetime");
var city = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "comments"]

console.log(data)

function appendTable(date) {
    d3.select("tbody").html("");
    data.forEach(selection => {
        var tableRow = d3.select("tbody").append("tr");
        Object.values(selection).forEach(value => {
            var tableData = tableRow.append("td");
            tableData.text(value);
        })
    })
};

appendTable(tableData);

function clickEvent() {
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var filteredDateTime = tableData;
    if (date) {
        filteredDateTime = filteredDateTime.filter(row => row.datetime === date);
    }
    appendTable(filteredDateTime);
}

d3.selectAll("filter-btn").on("click", clickEvent);