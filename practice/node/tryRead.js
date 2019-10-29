/* USING TRY CATCH...
1. try to read file "ex.txt"
2. if file does not exist, create it, no content inside of the text file.
3. if it does exist, append a string.
*/


//Import file system package:
var fs = require("fs");

//try to run the following code...
try{
    var fileText = fs.readFileSync("ex.txt", "utf8");

//If there is an error, then run the following:    
} catch (error) {
    console.log("we tried to read ex.txt but it seems it doesn't exist, We have created it for you!");

fs.writeFileSync("ex.txt", "", "utf8");
// Whether there was an error or not, run this.
} finally {
    fs.appendFileSync("ex.txt", "This is a string.\n", "utf8");
}


//Because our code was in a try catchm it will not stop the program and will complete.
console.log("the program has finished!");





