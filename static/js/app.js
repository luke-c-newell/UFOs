// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build a function to populate a table with data
function buildTable(data) {
    // Clear out any existing data
    tbody.html("");

    // Loop through each object and append a row and cells for each value
    data.forEach((dataRow) => {
        // Append a row to the table
        let row = tbody.append("tr");
        
        // Loop through each field and add each value as a table cell
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
        );
      });
    } 

// Build a function to filter the data
function handleClick() {
    // Create variables to hold date data
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };

   // Rebuild the table using the filtered data
    // If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

// Respond to the user clicking on the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page initially loads
buildTable(tableData);
