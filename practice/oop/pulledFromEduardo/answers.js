const fs = require("fs");

let data = fs.readFileSync("carInventory.json", "utf8");

data = JSON.parse(data);


//console.log(data.cars[49].MPG);
//Another way to write it:
//let carsArray = data.cars;
//carsArray.length or data.cars.length

//What is the average mpg of these 100 cars.
//To find out the average, we add up all the MPG properties and divide by how many cars the were.

let total = 0;

for (let i=0; i < data.cars.length; i++) {
 total = total + data.cars[i].MPG;
}

let mpgAverage = total /data.cars.length;
console.log("What is the average mpg of these 100 cars?");
console.log(mpgAverage + " MPG");
