const Vehicle = require("./vehicle.js");

const Car = class Car extends Vehicle {
    constructor(owner, make, model, year, color,license, mileage, mpg, tankSize, engineType,topSpeed) {
        super(make, model, year, color, owner, engineType, topSpeed);
        this.license = license;
        this.mileage= mileage;
        this.tankSize = tankSize;
        this.currentFuel = this.tankSize;
        this.mpg= mpg;
    }
//Method: Travel. how long it took and the amount of fuel left
travel(miles) {
    this.currentFuel = this.currentFuel - (miles/this.mpg);
    console.log("The car " + this.make + this.model + " has " + this.currentFuel.toFixed(1) + " gallons of " + this.engineType + " left.");
}

}

module.exports = Car;