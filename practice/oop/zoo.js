class Animal {
    constructor(metabolism, expired) {
        this.metabolism= metabolism;
        this.expired= expired;
    }
}

class Fish extends Animal{
    constructor(tasty) {
        super("medium-blooded", "fried");
        this.tasty = tasty;
    }

}
//KIM: to declare units
class Mammal {
    constructor(type, limbs, mouth, nose, eyes, tail, hair, mammary, life, heightInches, weightLb) {
        this.type = type;
        this.limbs= limbs;
        this.mouth= mouth;
        this.nose= nose;
        this.eyes = eyes;
        this.mammary = mammary;
        this.LifeExpectancy= life;
        this.hair = hair;
        this.heightInches = heightInches;
        this.weightLb = weightLb;
        this.tail = tail; 
        console.log(this.type + " was born")
    }
    //Methods:
    eat () {
       console.log(this.type + " eats food.");
    }


    sleep () {
        console.log(this.type + " sleeps.");
    }

    // weightLb and heightInches are arguements with in the parameter because it will be small at birth compared to its parents. NOTE that these two items DO NOT have this. before them
    reproduce (weightLb, heightInches) {
        console.log(this.type + " created a baby.");
        let baby = new Mammal(this.type, this.limbs, this.mouth, this.nose, this.eyes, this.tail, this.hair, this.mammary, this.LifeExpectancy, heightInches, weightLb);

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

let litter = new Array();

litter.push(firstCatMammal.reproduce(1,2));
litter.push(firstCatMammal.reproduce(1,2));
litter.push(firstCatMammal.reproduce(1,3));

console.log(litter);

let tilapia = new Fish(true);

console.log(tilapia.metabolism);



