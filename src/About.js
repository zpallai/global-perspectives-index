// About 

import React from 'react';

function About() {

  return (

    <div className="about-container">
        <p className="about-intro">
            The Global Perspectives Index (GPI) departs from traditional, quantitative analyses of 
            social and economic performance by ranking countries based on a <a href="https://www.gallup-international.com/survey-results/survey-result/worlds-most-important-problem">
            Gallup poll</a> that asked 
            the international community a question: 
        </p>
        <p className="about-quote">
            What do you think is the most important problem
            facing the world today?
        </p>
        <p className="about-end">
            The GPI takes the top four areas of concern: corruption, economy, inequality and unemployment, 
            considering each according to its perceived importance. Each indicator is weighted based on 
            polling strenghth, resulting in the final composite index. All values are represented as
            percentiles, with higher scores reflecting better performance, and all columns can be sorted by rank. 
        </p>

        

      <div className="about-indexes">
        <table id="about-table">
          <tbody>
            <tr>
              <th id="area-header">Area</th>
              <th id="measure-header">Measure</th>
              <th id="source-header">Source</th>
              <th>Polling %</th>
              <th>Weight %</th>
            </tr>
            <tr>
              <td>Corruption</td>
              <td>Corruption Perceptions Index</td>
              <td><a href="https://www.transparency.org/en/cpi/2021">Transparency International</a></td>
              <td>21</td>
              <td>37</td>
            </tr>
            <tr>
              <td>Economy</td>
              <td>GDP Growth, annual %</td>
              <td><a href="https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG">World Bank</a></td>
              <td>14</td>
              <td>24</td>
            </tr>
            <tr>
              <td>Inequality</td>
              <td>GINI Coefficient</td>
              <td><a href="https://data.worldbank.org/indicator/SI.POV.GINI">World Bank</a></td>
              <td>12</td>
              <td>21</td>
            </tr>
            <tr>
              <td>Unemployment</td>
              <td>% of Labor Force</td>
              <td><a href="https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS">World Bank</a></td>
              <td>10</td>
              <td>18</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr></hr>
    </div>
  );
}

export default About;

























