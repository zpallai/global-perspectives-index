// API Table
import React from "react";
import parse_json from "./Json";

async function gdp_growth() {

  const requestURL = 'https://api.worldbank.org/v2/country/' + 'br' + '/indicators/NY.GDP.MKTP.KD.ZG?format=json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const gdp_growth = await response.json();

  var brazil_year = gdp_growth[1][0];
  console.log(brazil_year.date);
  console.log(brazil_year.value);
}

function Table(props) {
  console.log(props.cpi[0]);

    return (
      <div className='Table'> 
        <table>
          <tbody>
            <tr>
              <th>
                Country
              </th>
              <th>
                Corruption
              </th>
              <th>
                Economy
              </th> 
              <th>
                Inequality
              </th>
              <th>
                Unemployment
              </th>
              <th>
                Index
              </th>
            </tr>
            <Table_rows cpi = { props.cpi }/>
          </tbody>
        </table>
      </div>
    );
  }

function Table_rows(props) {
  return (
    <tr>
      <Table_row cpi = { props.cpi }/>
    </tr>
  )
  

}

function Table_row(props) {

  console.log(props.cpi[0][2012]);
    var table_row = props.cpi.map((row) =>
      <td> { row[2012] } </td> 
   );
  
    return <tr>{ table_row }</tr>;

}
  

export default Table;






