# Global Perspectives Index (GPI)
[Video Demo](https://youtu.be/Gqyl3O0oQXc)

## Outline
- About
- Framework
- Libraries
- Project Files

## About

The Global Perspectives Index (GPI) is web app that calculates and tabulates a unique indicator-based evaluation of 150 countries.

The first inspiration was to create an index that sourced and manipulated complex data, based on issues important today. Initial research revealed a plethora of such indeces, almost all based on quantitative data. 

A unique opportunity presented itself with a [Gallup Poll:](https://www.gallup-international.bg/en/32507/corruption-tops-the-list-as-the-worlds-most-important-problem-according-to-win-gallup-internationals-annual-poll/) to use individual "perspectives" as to the importance of issues to the global community as a starting point to deterine a nation's performance. 

To make the scores easier to understand, data in a variety of forms was converted to percentiles, with higher marks reflecting positively. The countries are searchable and all indicators are sortable.

GPI was developed by Zoltan Pallai.

## Framework

The GPI app was written in Javascript, HTML (JSX) & CSS with React.

`create-react-app` was used to quickly deploy GPI with the necessary dependencies. `npm start` provides a live, local server that allowed for quick editing and development feedback. 

## Libraries 

Besides the included dependencies and React utilities such as `nvm` and `npm`, the web app utilizies [react-table](https://tanstack.com/table/v8), also known as "TanStack Table." react-table is a Headless UI, which allowed for customization and control over styling. 

The most important features of react-table for this use case were responsiveness, ability to work with JSON data, as well as searching and sorting. The search capability provides easy access to the 150 countries in the index, and the sorting plays into the ranking aspect of the index, allowing the user to see the best and worst performers not just for the final GPI but also for each indicator. 

## Project Files

### Datasets

Most of the data was sourced from the [World Bank API](https://data.worldbank.org), which provides downloads in .csv format. Since react-table works with Javascript objects, the .csvs had to be converted to .json and then filtered for the relavent data. This was primarily done with the online tool [convertcsv](https://www.convertcsv.com/csv-to-json.htm). 

There are three properties for each .json object: the ISO3 code for a given country, which acted as the key for the datasets, the country name, and the values for each set. The [datasets](./src/datasets/) folder contains the final percentiles for each indicator as well as the composite index .json, which the table imports and references. 

### Calculations 

A lot of data cleaning was required to create a percentile score for each indicator, as well as the final GPI, for each country. The folder [calculations](./src/calculations/) contains three files that were used in three phases to produce the final indeces:

#### Merging

Once the datasets above were compiled, each keyed to the ISO3 codes, an object for each country with all of the indicators was generated with [merging.js](./src/calculations/merging.js). Here, the composite array of already compiled indicators was paired with the next indicator. 

First, an array was initiliazed that would hold all of the new country objects. Next, an object was created for each country with the existing indicators, setting the new indicator to null. Finally, the new indicator array was parsed, setting the country's property for the indicator and pushing to the master array. These steps were repeated for each indicator until the country objects held the full dataset. 

#### Percentile

Two functions were created within [percentile.js](./src/calculations/percentile.js) to calculate an indicator's percentile rank compared to all the other country indicator scores. Economy, a positive indicator, went through the regular percentile() function, whereas corruption, inequality and unemployment, negative indicators, went through the reverse_percentile() function. The scores were rounded to the integer and new country objects with the percentile scores were created. 

#### GPI Calc

The last step to assemble composite index involved adjusting the percentile scores based on the weights from the Gallup poll. A function called index_weighting() in [gpi_calc](./src/calculations/gpi_calc.js) takes in all of the indicator percentiles and produces a final GPI index. One more iteration of the array of objects adds the GPI index to the collection of country scores.  

### Thanks for reading the GPI Docs!






























