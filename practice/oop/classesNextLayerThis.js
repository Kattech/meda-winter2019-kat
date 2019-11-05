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
    //license: "to kill"
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
    constructor(firstNameValue, salary, license, status, timesheet) {
        console.log("A new employee was created!");
        this.firstName = firstNameValue; 
        this.salary = salary;
        this.license = license;
        this.status = status;
        this.timesheet = timesheet;
    }

    //OBJECTS using .this .this represents the current object
    //Method: that will be applied to every employee
    work() {
        console.log(this.firstName + " is working really hard, for 1 hour.");

        this.timesheet = this.timesheet -1;
        //other notation:
        //this.timesheet--;

        console.log(this); // use this in the parameter to represent the ogjects we are working in
    }
}


new Employee();

let firstEmployee = new Employee("Eduardo", 7000, "2ji2klf", "active", 8);
let secondEmployee = new Employee("Pedro", 1200, "0123id", "inactive", 4);
let thirdEmployee = new Employee(null, null, null, null, 1);

console.log(firstEmployee);
//console.log(secondEmployee);
//console.log(thirdEmployee);

firstEmployee.work();
secondEmployee.work();
thirdEmployee.work();

console.log(firstEmployee);

firstEmployee.work();
console.log(firstEmployee);


