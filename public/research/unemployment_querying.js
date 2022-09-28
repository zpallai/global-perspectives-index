// OECD Unemployment Table

var unemployment_array = [];

var table_rows_countries = document.getElementsByClassName("table-chart-tbody-th");

var table_rows_values = document.getElementsByClassName("table-chart-value");


for (var x = 0; x < table_rows_countries.length; x++) {
  console.log(table_rows_countries[x].innerHTML);
  console.log(table_rows_values[x].innerHTML);
}

function CountryData(id, title, unemployment) {
    this.id = id;
    this.title = title;
    this.unemployment = unemployment;
}

for (var y = 0; y < table_rows_countries.length; y++) {
  var id = table_rows_countries[y].getAttribute('data-id');
  var title = table_rows_countries[y].innerHTML;
  var unemployment = table_rows_values[y].innerHTML;
  
  var country = new CountryData(id, title, unemployment)
  unemployment_array.push(country);
}

console.log(unemployment_array);

////// OECD CLI

var cli_array = [];

var table_rows_countries = document.getElementsByClassName("table-chart-tbody-th");

var table_rows_values = document.getElementsByClassName("table-chart-value");

function CountryData(id, title, cli) {
    this.id = id;
    this.title = title;
    this.cli = cli;
}

for (var y = 0; y < table_rows_countries.length; y++) {
  var id = table_rows_countries[y].getAttribute('data-id');
  var title = table_rows_countries[y].innerHTML;
  var cli = table_rows_values[y].innerHTML;
  
  var country = new CountryData(id, title, cli)
  cli_array.push(country);
}

console.log(cli_array);
















































