# GLOBAL PERSPECTIVES INDEX
#### Video Demo:  <https://youtu.be/Gqyl3O0oQXc>
#### Description: A web app built with React that creates a unique global performative index.

## Outline
- App Intro
- Framework
- Libraries
- Design Choices
- Project Files
- About

## App Intro
The **Global Perspectives Index (GPI)** departs from traditional, quantitative analyses of social and economic performance by ranking countries based on a [Gallup poll]("https://www.gallup-international.com/survey-results/survey-result/worlds-most-important-problem") that asked the international community a question: 

**"What do you think is the most important problem facing the world today?"**

The GPI takes the top four areas of concern: corruption, economy, inequality and unemployment, considering each according to its perceived importance. Each indicator is weighted based on polling strenghth, resulting in the final composite index. All values are represented as percentiles, with higher scores reflecting better performance, and all columns can be sorted by rank. 

## Framework

The GPI app was written in Javascript, HTML (JSX) & CSS with React. React was an attractive choice because it is a leading front-end framework and presented the challenge of adapting to a new modality for web development.

`create-react-app` was used to quickly deploy GPI with the necessary dependencies. `npm start` provided a live, local server that allowed for quick editing and development feedback. 

## Libraries 

Besides the included dependencies and React utilities such as `nvm` and `npm`, the web app utilizies [react-table](https://tanstack.com/table/v8), also known as "TanStack Table." react-table is a Headless UI, which allowed for customization and control over styling. 

The most important features of react-table for this use case were responsiveness, ability to work with JSON data, as well as searching and sorting. The search capability provides easy access to the 150 countries in the index, and the sorting plays into the ranking aspect of the index, allowing the user to see the best and worst performers not just for the final GPI but also for each indicator. 

## Design Choices

The first inspiration was to create an index that sourced and manipulated complex data, based on indicators important today. Initial research revealed a plethora of such indeces, almost all based on quantitative data. 

A unique opportunity presented itself with the Gallup Poll: to use individual "perspectives" as to the importance of issues to the global community as a starting point to deterine a nation's performance. 

To make the scores easier to understand, data in a variety of forms was converted to percentiles, with higher marks reflecting positively. 

Initially a thought was to allow a user to click on any country, revealing the data associated with the country (and perhaps a national flag), but this became redundant with the table search capability. Preference was given to a clear and organized introductory section with a table explaining the index system. 

## Project Files

### Sources

The project sources and initial datasets are found in the [research](./public/research/) folder. Here are included the Gallup Poll, a library devoted to the gini index as well as the .csv and .json files with the raw GPI data. 

### Versions

The project developer has a habit of both using version control and squirelling away rought drafts just in case. Those can be found in the [versions](./src/versions/) folder. 

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

## About

This web app was created by Zoltan Pallai as the final project for Harvard CS50x: Introduction to Computer Science. 






























