// Class for Animal types.
class Animal {
    constructor(metabolism, expired) {
        this.metabolism = metabolism;
        this.expired = expired;
    }
}

// Class for Fish types that inherits Animal properties and methods.
class Fish extends Animal{
    constructor(tasty) {
        super("medium-blooded", "fried");
        this.tasty = tasty;
    }
}

// Class for Mammal types.
class Mammal extends Animal {
    // constructor method must be included and will run when creating objects of this class. This one has many parameters.
    constructor(type, limbs, mouth, nose, eyes, tail, hair, mammary, life, heightInches, weightLb) {
        super("warm-blooded", false);
        // Keyword this refers to the current object being created. The value refers to the parameter.
        this.type = type;
        this.limbs = limbs;
        this.mouth = mouth;
        this.nose = nose;
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

//GETTER AND SETTERS for MAMMAL CLASS
    //naming convention of getter and setter
    //setPropertyName
    //getPropertyName
    getType() {
        return this.type;
    }
    setType(newType) {
        return this.type= newType; //nomenclature for it did pass
    }

    getLimbs() {
        return this.limbs;
    }
    setLimbs(newLimbs){
        return this.limbs= newLimbs;
    }

    getMouth(){
        return this.mouth;
    }
    setMouth(newMouth){
        return this.mouth= newMouth;
    }

    getNose(){
        return this.nose;
    }
    setNose(newNose){
        return this.nose = newNose;
    }

    getEyes(){
        return this.eyes; 
    }    
    setEyes(newEyes){
        return this.eyes= newEyes;
    }

    getMammary(){
        return this.mammary;
    }
    setMammary(newMammary){
        return this.mammary=newMammary;
    }

    getLifeExpectancy(){
        return this.lifeExpectancy;
    }
    setLifeExpectancy(newLife){
        return this.lifeExpectancy= newLife;
    }
    
    getHair(){
        return this.hair;
    }
    setHair(newHair){
        return this.hair=newHair;
    }

    getheight(){
        return this.heightInches;
    }
    setHeight(newHeightInches) {
        return this.height= newHeightInches;
    }

    getWeight(){
        return this.weightLb;
    }
    setWeight(newWeightLb){
        return this.weightLb=newWeightLb
    }

    getTail(){
        return this.tail;
    }
    setTail(newTail){
        return this.tail= newTail
    }
    
    getAge(){
        return this.age;
    }
    setAge(newAge){
        return this.age=newAge
    }

//END GETTER AND SETTER




    // One of three methods that belong to the mammal class.
    eat() {
        console.log(this.type + " eats food.");
    }

    sleep() {
        console.log(this.type + " sleeps.");
    }

    // Custom method that checks if the Mammal is dead or not after living a certain amount of years.
    live(years) {
        this.age = this.age + years;

        if (this.lifeExpectancy < this.age) {
            console.log(this.type + " is now dead.");
            this.expired = true;
        } else {
            console.log(this.type + " has successfully lived for an additional " + years + " years.");
        }
    }

    // This method creates a Mammal object similar to the "parent" object.
    reproduce(weightLb, heightInches) {
        console.log(this.type + " created a baby");
        
        let baby = new Mammal(this.type, this.limbs, this.mouth, this.nose, this.eyes, this.tail, this.hair, this.mammary, this.lifeExpectancy, heightInches, weightLb);

        return baby;
    }

    die() {
        console.log(this.type + " has lived a full life.");
    }
}

// Creating a dog.
const firstMammal = new Mammal("dog", 4, 1, 1, 2, 1, true, 2, 30, 24, 4);

// Dog eats and sleeps.
firstMammal.sleep();
firstMammal.eat();

// Dog makes baby.
let secondMammal = firstMammal.reproduce(4, 6);

console.log(secondMammal.heightInches);
console.log(firstMammal, secondMammal);

// Cat Mammal
let firstCatMammal = new Mammal("cat", 4, 1, 1, 2, 1, true, 8, 15, 10, 10);

// Array holding all the cat babies.
let litter = new Array();

litter.push(firstCatMammal.reproduce(1, 2));
litter.push(firstCatMammal.reproduce(1, 2));
litter.push(firstCatMammal.reproduce(1, 3));

litter[1].live(5);

litter[1].live(20);

// New Fish Object.
let tilapia = new Fish(true);

console.log(tilapia.metabolism);

