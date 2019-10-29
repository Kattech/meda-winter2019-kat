
var fs = require("fs");

//Math.random();

//Convert a JSON string into an actual Javascript Object.
//JSON.parse();

//Converts a Javascript Object into an actual JSON string
//JSON.string();

var exampleObject = {
    mainKey: 105,
    isThisTrue: true,
    someText: "some Text!",
    arrays: [100, "string", false],
    childObject: {nestedKey: "inside"},
    aCoolFunction: function (){
        console.log("I am a method that belongs to exampleObject.")
    }
};


//How to write a Javascript Object: can use string, numbers, booleans and arrays can go in. 
//KIM: YOU CANNOT STORE FX IN JSON. fx is a chunck of runable code.
//var exampleObject = {"mainKey": 105};

//Use dot notation in the parenthesis
console.log(exampleObject.mainKey);
console.log(exampleObject["mainKey"]);
exampleObject.mainKey= 106; 
exampleObject.mainKey2= 120;


// Console logging a normal object:
console.log(exampleObject);


var jsonText = JSON.stringify(exampleObject);
// Console logging JSON representation of the same Object.
console.log(jsonText);

//File Sync: be sure to declare at the very top!
fs.writeFileSync("exampleJSON.json", jsonText, "utf8");
console.log("File successfully written!");





