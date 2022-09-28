// Country Detail Box

import React from 'react';

function Country() {
  return (

    <div className="country-container">
      <div className="country-info">
        <p className="country-name">Bahrain</p>
        <div className="country-flag">
          <img src="https://flagicons.lipis.dev/flags/4x3/bh.svg">
          </img>
        </div>
        <div className="country-plot">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/2018_Year_to_Date_SPMD_Line_Chart_as_of_19%2C_Sep_18.png">
          </img>
        </div>
      </div>

      <div className="country-indexes">
        <table>
          <tbody>
            <tr>
              <td>Corruption</td>
              <td>77</td>
            </tr>
            <tr>
              <td>Economy</td>
              <td>86</td>
            </tr>
            <tr>
              <td>Inequality</td>
              <td>59</td>
            </tr>
            <tr>
              <td>Unemployment</td>
              <td>88</td>
            </tr>
            <tr>
              <td>Index</td>
              <td>83</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Country;

























