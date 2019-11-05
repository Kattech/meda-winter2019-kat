// Class for Animal types.
class Animal {
    constructor(metabolism, expired) {
        this.metabolism= metabolism;
        this.expired= expired;
    }
}


//Class for Fish types that inherits Animal properties and methods.
class Fish extends Animal{
    constructor(tasty) {
        super("medium-blooded", "fried");
        this.tasty = tasty;
    }

}
//Class for Mammal types:
//KIM: to declare units
class Mammal extends Animal {
    //constructor method must be included and will run when creating objects of this class. This one has many parameters
    constructor(type, limbs, mouth, nose, eyes, tail, hair, mammary, life, heightInches, weightLb) {
        super("warm-blooded", false);
        //Keyword this refers to the current object being created. The value refers to the parameter.
        this.type = type;
        this.limbs= limbs;
        this.mouth= mouth;
        this.nose= nose;
        this.eyes = eyes;
        this.mammary = mammary;
        this.lifeExpectancy = life;
        this.hair = hair;
        this.heightInches = heightInches;
        this.weightLb = weightLb;
        this.tail = tail; 
        this.age = 0;

        console.log(this.type + " was born.");
        
    }

    //Methods: One of three methods that belong to the mammal class.
    eat () {
       console.log(this.type + " eats food.");
    }


    sleep () {
        console.log(this.type + " sleeps.");
    }

    live(years) {
        console.log(this.lifeExpectancy);
        this.age = this.age + years;
        console.log("check" + this.lifeExpectancy);

        if (this.lifeExpectancy < this.age) {
            console.log(this.type + " is now dead.");
            this.expired = true;
        } else {
            console.log(this.type + " has successfully lived for an additional " + years + " years.");
        }

    }
//This method creates a Mammal object similar to the "parent" object
    // weightLb and heightInches are arguements with in the parameter because it will be small at birth compared to its parents. NOTE that these two items DO NOT have this. before them
    reproduce(weightLb, heightInches) {
        
        console.log("parent" + this.lifeExpectancy);

        console.log(this.type + " created a baby.");
        let baby = new Mammal(this.type, this.limbs, this.mouth, this.nose, this.eyes, this.tail, this.hair, this.mammary, this.lifeExpectancy, heightInches, weightLb);

        console.log(this.lifeExpectancy);

        return baby;
    }

    die() {
        console.log(this.type + " has lived a full life.");
    }

}

const firstMammal = new Mammal("dog", 4, 1, 1, 2, 1, true, 2, 30, 24, 4);

firstMammal.sleep();
firstMammal.eat();

let secondMammal= firstMammal.reproduce(4, 6);

console.log(secondMammal.heightInches);

//console.log(firstMammal, secondMammal);

//Cat Mammal
//create cat reproduce 3x
let firstCatMammal = new Mammal("cat", 4, 1, 1, 2, 1, true, 8, 15, 10, 10);
console.log(firstCatMammal);
//Array holding all the cat babies
let litter = new Array();

litter.push(firstCatMammal.reproduce(1,2));
litter.push(firstCatMammal.reproduce(1,2));
litter.push(firstCatMammal.reproduce(1,3));

litter[1].live(5);

litter[1].live(20);

//New Fish Object.
let tilapia = new Fish(true);

console.log(tilapia.metabolism);

