//Call script "readFile.js"
//1. Read file "repeat.txt
//2. Store text in variable, and console log the value


var fs = require("fs");

//Recieves text as a string and stores

var text = fs.readFileSync("repeat.txt", "utf8");

console.log(text);

