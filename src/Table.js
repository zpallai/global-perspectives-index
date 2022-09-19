// API Table

async function gdp_growth() {

  const requestURL = 'https://api.worldbank.org/v2/country/' + 'br' + '/indicators/NY.GDP.MKTP.KD.ZG?format=json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const gdp_growth = await response.json();

  var brazil_year = gdp_growth[1][0];
  console.log(brazil_year.date);
  console.log(brazil_year.value);

}

function Table() {

  gdp_growth();

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
            <Table_row />
          </tbody>
        </table>
      </div>
    );
  }

  function Table_row() {
    return (
      <tr> 
        <td>
          Monaco
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

export default Table;