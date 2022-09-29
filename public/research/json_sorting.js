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

// cpi array

function CPI_object(id, title, cpi) {
  this.id = id;
  this.title = title;
  this.cpi = cpi;
}

var cpi_array = [];

for (var x = 0; x < cpi.length - 1; x++) 
{
var country_first = cpi[x]['Country ISO3'];
var country_next = cpi[x + 1]['Country ISO3'];
if (country_first != country_next) 
{
  var id = country_first;
  var title = cpi[x]['Country Name'];
  var cpi_index = cpi[x]['2020'];
  var country = new CPI_object(id, title, cpi_index);
  cpi_array.push(country);
}
};

console.log(cpi_array);

// gini array

function GINI_object(id, gini) {
  this.id = id;
  this.gini = gini;
}

var gini_array = [];

for (var x = 0; x < gini.length - 1; x++) 
{
var country_first = gini[x]['LOCATION'];
var country_next = gini[x + 1]['LOCATION'];
if (country_first != country_next) 
{
  var id = country_first;
  var gini_index = gini[x]['Value'];
  var country = new GINI_object(id, gini_index);
  gini_array.push(country);
}
};

console.log(gini_array);











































