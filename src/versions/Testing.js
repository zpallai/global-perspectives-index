// Tests

// set name and corruption
var name_corruption = [];
for (var x = 0; x < cpiScores.length; x++) {
    name_corruption.push({
        title: cpiScores[x]['Country Name'],
        2020: cpiScores[x]['2020']
    })
}

// set columns widths
<th
{...column.getHeaderProps({
  style: { minWidth: column.minWidth, width: column.width },
})}
>
<span>{column.render('Header')}</span>
</th>

async function gdp_growth() {

  const requestURL = 'https://api.worldbank.org/v2/country/' + 'br' + '/indicators/NY.GDP.MKTP.KD.ZG?format=json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const gdp_growth = await response.json();

  var brazil_year = gdp_growth[1][0];
  console.log(brazil_year.date);
  console.log(brazil_year.value);
}

function Table_row() {
    var cpi_json =  parse_json();
    // cpi_json = cpi_json[0];
    // console.log(cpi_json);

    for (var x = 0; x  < cpi_json.length; x++)
    {
    return (
      <tr> 
        <td>
          { cpi_json[x]['Country Name'] }
        </td>
        <td>
          77
        </td>
        <td>
          87
        </td>
        <td>
          73
        </td>
        <td>
          55
        </td>
        <td>
          74
        </td>
      </tr>
    )
  }
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
            <Table_row cpi = { props.cpi }/>
          </tbody>
        </table>
      </div>
    );
  }

function Table_row(props) {

  console.log(props.cpi[0][2012]);
  var table_rows = props.cpi.map((row) =>
  <tr>
    <td> { row[2012] } </td> 
    <td> { row[2013] } </td>
    <td> { row[2014] } </td>
    <td> { row[2015] } </td>
    <td> { row[2016] } </td>
    <td> { row[2017] } </td>
  </tr> );
  
  return { table_rows };



}