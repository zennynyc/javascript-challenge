// from data.js
var tableData = data;
console.log(data);

var tbody=d3.select("tbody");
// loop and access each object in the table
tableData.forEach(addRow);

function addRow(item) {
    var row=tbody.append("tr");
    var row_vals=Object.values(item);


    row_vals.forEach(data=>{
        row.append('td').text(data);
    })
}

var button_click = d3.select('#filter-btn');
button_click.on('click', function(){
    tbody.html("");

    var formatedDate = d3.select('#datetime').property('value');
    console.log(formatedDate);

    var input_date = tableData.filter( x => x.datetime === formatedDate);
    console.log(input_date);

    input_date.forEach(addRow);

});