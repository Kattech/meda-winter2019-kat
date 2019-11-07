// Units is American, Miles and Gallons

const fs = require("fs");
const _ = require("lodash");
const Car = require("./car.js");
// const Helicopter = require("./helicopter.js");

// let honda = new Car("Jesse", "Honda", "Civic", 2000, "white", "8EFD39E9", 125000, 35, 12, "gas", 150);

function createCar(make){
    let randomCar = new Car(
        "User", 
        make, 
        "Company", 
        _.random(1930, 2020), 
        "transparent", 
        _.random(1111111, 9999999), 
        _.random(0, 300000), 
        _.random(10, 40), 
        _.random(4, 40), 
        "gas", 
        _.random(28, 240)
    );

    return randomCar;
}

let container = {
    cars: []
}

for (let i = 0; i <100; i ++){
    container.cars.push(createCar("Car " + i));
}


let stringifiedData = JSON.stringify(container);

fs.writeFileSync("carInventory.json", stringifiedData, "utf8");

//Challenge:
// allow me to provide "make" to createCar

console.log(container.cars[80].make);
