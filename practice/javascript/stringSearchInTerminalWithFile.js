// Using a file 
var fs = require("fs");
var terminalArguments = process.argv;

//file method: .readFileSync 
//fx can take in data from parameters and arguments and returns therefore we need to store it somewhear via a variable
//KIM: "utf8" is a string "utf-8" is HTML

//create a varible
var textFromFile = fs.readFileSync(terminalArguments[2], "utf8");

characterSearch(textFromFile, terminalArguments[3]);

//need a package to read files
//sanitization- check info coming in for any obscurities. sanitize code for any "", {}, [] otherwise it will interpret these as javascript with in javascript and will break and is known as code injection. script injection. Therefore escape the quotes


























function characterSearch(text, letter) {
    console.log("Searching the string: " + text);

    var foundLetters = 0;  //this variable needs to be outside the loop so it doesn't reset back to zero

    for (var i = 0; i < text.length; i++) {

    

         if (text.charAt(i) == letter) {
            foundLetters = foundLetters +1;
            //Short hands:
            //can also be expressed as foundLetters++ , adds one to the existing variable
            // foundLetters += 2 , a lot like ++ but adds one to the existing variables
        }  
    }

    console.log("We found a total of  " + foundLetters + " " + letter + "'s");
}
