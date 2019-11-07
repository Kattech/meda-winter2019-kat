/*Find where this year is stored, found in object year
in order to detect cars 1940-1960. Loop that will go thru all cars.
create counter that will count the cars that did match
write a condition that will check for the year of each car, and see if it's outside 1960 and 1940.
if it does match year, increase the counter
*/

const fs = require("fs");

//crx ref the structure of index.js using the array to find data
let data = fs.readFileSync("carInventory.json", "utf8");

data = JSON.parse(data);

let cars = data.cars;
//step 1: confirm the year property in the data. b/c a dev could use year for yearDestroyed, YearBuilt.... etc...
//console.log(cars[0].year);

//step 3: 
let carsBtw1940And1960 = 0;

//step 2:
for (let i = 0; i < cars.length; i++) {
    //console.log(cars[i]);

    let currentCar = cars[i];

    //console.log(currentCar);

    //step 3:
    if (currentCar.year >= 1940 && currentCar.year <= 1960) { 
        //step 4:
        carsBtw1940And1960 = carsBtw1940And1960 + 1;
        //Another way of writing it:
        //carsBtw1940And1960 += 1;
        //carsBtw1940And1960++; //Adds only 1
    }

   /* This is another way of writing the range
    if (currentCar.year >= 1940) {
        if (currentCar.year <= 1960) {

        }
    }
    */
}

console.log(carsBtw1940And1960);
console.log("How many cars do we have that were built between 1940?");

//console.log(cars[cars.length -1].year);