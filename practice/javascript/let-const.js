var myFirstVariable = 1000;
//keyword to create variable

console.log(1000);


//const= constant. Common feature found in other programming languages. In js, it acts odd. Value that are not supposd to change.
//ex: 
const pi = 3.14
const firstName = "Eduardo";


const someVariable = 1000;
console.log(1000);

myFirstVariable = myFirstVariable + 1000;
console.log("added nore to myFirstVariable: " + myFirstVariable);

//someVariable = someVariable + 1000;

console.log("added more to someVariable: " + someVariable);

for (var i=0; i < 20; i++){

    setTimeout(function () {
        console.log(i);
}, 100);

}
//won't remember with "var" so the output is 20. var is FUNCTION SCOPE

for (let i=0; i < 20; i++){

    setTimeout(function () {
        console.log(i);
}, 100);

}
//note that "let" is BLOCK SCOPE remembers the value in a specific scope i++ happens after the code block
//setTimeOut is asynchronist bc there is a call back fx


const someArray = [10,20,30];
someArray[0] = 30;

console.log(someArray);