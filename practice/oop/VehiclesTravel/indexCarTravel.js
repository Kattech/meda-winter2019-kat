// Units in American, Miles and Gallons
//fs package allows us to write /save to our harddrive
const fs = require ("fs");
//pulling in car.js and car.js is pulling in vehicle.js so vehicle .js is pulled into index
//require pulls in file, "_" underscore is shorthand for lodash library
const _ = require("lodash");
const Car = require("./carTravel.js");
//const Helicopter = require("./helicopter.js");

//let honda = new Car("Jesse", "Honda", "Civic", 2000, "white", "8EFD39E9", 125000, 35, 12, "gas",150);

// console.log(honda);
// honda.travel(100);
// honda.travel(100);
// honda.travel(100);
// honda.travel(100);
// honda.travel(100);

console.log(_.random(10, 100) );

let randomCar = new Car ("User", "Generic", "Company", _.random(1930, 2020), "transport", _.random(1111111, 9999999), _.random(0, 300000), _.random(0,40), _.random(1, 40), "gas", _.random(28, 240) );

let stringifiedCar = JSON.stringify(randomCar);

//Writing a file:
                    //string, content, character set
fs.writerFileSync("carInventory.txt", randomCar, "utf8");