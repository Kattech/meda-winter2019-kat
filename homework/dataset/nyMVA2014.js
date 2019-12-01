// The following dataset was obtained Data.gov and reflect hourly in military time
//https://catalog.data.gov/dataset/motor-vehicle-crashes-case-information-beginning-2009

//QUESTIONS:
// 1. What time of day do accidents most frequently occur?
// 2. Do lighting conditions impact accidents- if so, how?
// 3. Which county had the most and least accidents?
// 4. How do road surface conditions affect the topography aka Road Description
// 5. When there are accidents involving 3 cars or more, is it because of road conditions?
// 6. What is the number of accidents that have the following: injury, property damage or both?
// 7. Do accidents with deer occur more in the morning or the evening?
    
const fs = require("fs");
const log = console.log;

// MVA stands for "Motor Vehicle Accident"
class NYmva {
    constructor (time, county, lightingConditions, roadSurface, roadDescription, injuryAccident, propDamage, numVehicles, eventDescriptor) {
        this.time = time; 
        this.county = county;
        this.lightingConditions= lightingConditions;
        this.roadSurface= roadSurface;
        this.roadDescription= roadDescription;
        this.injuryAccident= injuryAccident;
        this.propDamage = propDamage;
        this.numVehicles= numVehicles;
        this.injuryAccident =injuryAccident;
    }
}       

const nyMVA2014 = fs.readFileSync("nyMotorVehicleCrashes.csv", "utf8");
// log(nyMVA2014);

//string everything in dataset... by using new line chatacter
const nyMVA2014Arr = nyMVA2014.split("\n");
// log(nyMVA2014Arr[0], nyMVA2014Arr[1]);

//remove the headings from the dataset
const headings  = nyMVA2014Arr.shift();
const dataArr = [];
for (let i = 0; i < nyMVA2014Arr.length; i++) {
     dataArr.push(nyMVA2014Arr[i].split(","));
}

// log(dataArr[0]);
// log(dataArr[1]);

// log(dataArr[dataArr.length-1]);
dataArr.pop();
// log(dataArr[dataArr.length-1]);

//Create an array within an array to split the military time to hours which will be index 0 and minutes which will be index 1.   12:35 = 12,35
for (let i=0; i < dataArr.length; i++) {
        dataArr[i][2] = dataArr[i][2].split(":");
}
log(dataArr[2]);

//JSon.parse...

//convert incident time to nearest hour in military time
//create a counter for hours and frequency
//