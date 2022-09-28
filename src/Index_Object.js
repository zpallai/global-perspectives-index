// Index Object

import { cpi } from './CPI';
import { gini } from './Gini';

var Indexes = [];
var inequality = [];
var cpiScores = cpi.filter((element, index) => {
    return index % 2 === 0;
  })


class Index {
    constructor() {
        this.iso = "";
        this.title = "Country";
        this.corruption = 0;
        this.economy = 0;
        this.inequality = 0;
        this.unemployment = 0;
        this.index = 0;
    }

    setNameIsoCorruption(iso, title, corruption) {
        this.iso = iso;
        this.title = title;
        this.corruption = corruption;
    }

    setInequality(gini) {
        this.inequality = gini;
    }
}

function CreateIndexes() {

    // set name and corruption
    for (var x = 0; x < cpiScores.length; x++) {
        var country = new Index();
        country.setNameIsoCorruption(cpiScores[x]['Country ISO3'], cpiScores[x]['Country Name'], cpiScores[x]['2020']); 

        // set inequality based on latest gini value
        console.log(country.iso);
        // console.log(gini[0]['LOCATION']);


        for (var g = 0; g < gini.length - 1; g++) {
            if (gini[g]['LOCATION'] != gini[g + 1]['LOCATION'] && gini[g]['LOCATION'] == country.iso) {
                console.log(gini[g]['LOCATION']);
                country.setInequality(gini[g]['Value']);
            }
            // console.log(gini[g]['LOCATION'])
        }
        break;

        Indexes.push(country);
    }





}

    console.log(Indexes);


export default CreateIndexes;





