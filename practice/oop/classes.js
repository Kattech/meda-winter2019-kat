//EX OF OBJECTS WITH MISSING DATA:
//Sample person:
let firstPerson = {
    firstName: "Eduardo",
    lastName: "Garcia",
    age: 29, //
    city:"San Francisco",
    state:"California",
    occupation:"Contractor",
    eye: "transparent",
    hair: "black",
    beard:"black",
    transportation: "teleportation",
    marital_status:"single",
    gender: "male",
    food: "sushi"
};

let secondPerson = {
    firstName: "Barbara",
    lastName: "Streisand",
    age: 50, //
    occupation:"singer",
  
    transportation: "private jet",
    marital_status:"single",
    gender: "female"
};

let thirdPerson = {
    firstName: "Brad",
    transportation: "car",
};


//console.log(firstPerson.firstName);
//console.log("Welcome! " + firstPerson.firstName + ", how was your day today?");


let people = [firstPerson, secondPerson, thirdPerson];


//A fx that calculates the average age of the people in the array provided.
function getAverageAge(personArray){

    let totalAge = 0;
    
    for (let i=0; i< personArray.length; i++) {
        //console.log(personArray[i].age)
        totalAge = totalAge + personArray[i].age;
    }
    return totalAge /personArray.length;
}

//console.log("The average age of the people in the array is: " + getAverageAge(people));

//EX OF SAME OBJECTS BUT USING CLASSES INSTEAD:
//Employee

class Employee {
    constructor(firstNameValue) {
        console.log("A new employee was created!");
        this.firstName = firstNameValue; 
    }
}

let firstEmployee = new Employee();
let secondEmployee = new Employee();

console.log(firstEmployee);