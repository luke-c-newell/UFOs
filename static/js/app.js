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