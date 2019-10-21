//Node
// C.R.U.D = Create, Read, Update, Destroy.Delete

// WRITE files, will overwrite existing filenames. Needs 3 arguments
var fs = require("fs");

fs.writeFileSync("my first file.txt", "I was created by a Javascript Project", 
"utf8");


fs.writeFileSync("this is anothe file.jpg", "Exercise now is to create a second file", "utf8");


// READ files, must load as utf8 to make sense. Needs 2 arguments. Assign a variable
var textThatWasReadFromFile = fs.readFileSync("some-file.txt", "utf8");

// console.log(textThatWasReadFromFile);


// UPDATE files, adds to the end of the file
fs.appendFileSync("some-file.txt", "This text file was updated.", "utf8");


//**OJO: write the correct file extension


/* For Terminal:
; nothing to do with each other
| has to do with each other
> to write text to a file
*/


