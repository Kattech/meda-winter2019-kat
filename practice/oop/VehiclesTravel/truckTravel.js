/*Homework:
1. Create truck class similar to car class but with the following:
    - enginetype: only diesel
    - transport(tons) --> yes or no
    - this.capacity
    */

    const Vehicle = require("../practice/oop/vehiclesTravel/vehicleTravel.js");

const Truck = class Truck extends Vehicle {
    constructor(owner, make, model, year, color,license, mileage, mpg, tankSize, engineType,topSpeed) {
        super(make, model, year, color, owner, engineType, topSpeed);
        this.license = license;
        this.mileage= mileage;
        this.tankSize = tankSize;
        this.currentFuel = this.tankSize;
        this.mpg= mpg;
        this.engineType = "diesel";
        this.capacityTons = capacityTons;
    }

    //Method: Travel. how long it took and the amount of fuel left
    travel(miles) {

        if (this.currentFuel >= 0) {
        
             if (this.currentFuel * this.mpg >= miles) {
                this.currentFuel = this.currentFuel - (miles / this.mpg);
                console.log("The " + this.make + " " + this.model + " has " + this.currentFuel.toFixed(1) + " gallons of " + this.engineType + " left.");
            } else {
                console.log("The " + this.make + " " + this.model + " doesn't have enough fuel to travel that far.");
            }
        } else {
            console.log("The " + this.make + " " + this.model + " has no gas.");
        }   
    }

    
/* Refuel
    1.) take in 1 number
    2.) must be 0 or positive
    3.) should not overflow tank
    4.) messages for any issues, otherwise console.log total new fuel
    */
    refuel(gallons) {

        if (gallons <= 0) {
            console.log("You need to provide fuel (positive number).");
            return 1;
        //unsuccessful refueling
        } else {
       
            if (gallons >= this.tankSize) {
                console.log("You provided too much fuel, cannot fit into tank.");
            } else {

                if (this.tankSize - this.currentFuel < gallons) {
                    console.log("there is not enough free space in the fuel tank to add that many gallons.");
                } else {
                    this.currentFuel = this.currentFuel + gallons;
                    console.log(this.model + "was successfully refueled with" + gallons + " gallons of gas.");
                };
            }
        }
    }
}

//Homework: 22,000 tons max for the trailer
    transport(tons) {

        if (this.tons <= 22)
    


module.exports = Car; 