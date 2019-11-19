//Include packages we will be using
const fs = require("fs");
const _ = require("lodash");

//Read the dataset file into our script and store in a constant dataset variable.
const dataset = fs.readFileSync("Eviction_Notices.csv", "utf8");

//Converted string into array where each new line is a new index. Need to extract the first line of the dataset using .split
//KIM: ("") splits every character b/c this is a dataset, it is organized by lines therefore use "\n" 
const dataArray = dataset.split("\n");
//Removing the last index beacuse it is empty.
dataArray.pop();
//Removing first line but keeping it bc we will use it in the future.
let headings = dataArray.shift();

//Counter for the amount of 2018 entries we found.
let total = 0;

let json2018Data = {
    headings: headings,
    data: []
};

//Loop thru all the entries of the dataset (not including headings, and last empty line).
for (let i= 0; i< dataArray.length - 1; i++) {

        //Test the entry usung is2018 function
    let pass = is2018(dataArray[i]);

        //If pass is true then add a 1 to the counter as notes with total++
    if (pass === true) {
    //console.log("The line entry " + i + " is from the year 2018!");
    total++;
        json2018Data.data.push(dataArray[i]);
        //If we encounter an issue, tell us about it.
    } else if (pass === 1) {
        console.log("The line " + (i +1) + "has issues! PLEASE CHECK.");
        console.log(dataArray[i]);
    }
    //Otherwise if other than 2018, move on to the next entry.

}

//Finally console log the total amount of entries that matched 2018.
console.log(json2018Data);

//This accepts a string only, returns true, false, or 1 --- if there is an issue.
//splitting with commas since the dataset is separated with ,'s
function is2018(entry) {
    //Create an array that splits up the individual columns of the entry.
    const singleEntryArray = entry.split(","); 

    // Grab the date index, and split that byt its day, month, and year, store in another array.
    const entryDate = singleEntryArray[5].split("/");

     //if it is 2018, return true.
    if ("2018"== entryDate[2]) {
        return true;
    } else if (undefined === entryDate [2]){
        //If there is not value in index 2, that means there was an issue
        console.log("We found an issue with the line:\n " + entry);
        return 1;
    } else {
        //If it is not 2018, return false.
        return false;
    }
}

//console.log(dataArray[22]);

//Renamed the 23rd record into a specific variable name:
/*const singleEntry = dataArray[1900];
const singleEntryArray = singleEntry.split(",");
console.log(typeof singleEntryArray[5]);
const entryDate = singleEntryArray[5].split("/");
console.log(entryDate);
console.log(entryDate[2]);
*/ //^^^ The above lines have been moved and edited into the function is2018 and should be deleted ^^^^

console.log("The entry " + 23 + " is from the year 2018: " + is2018(dataArray[1]));
//line number is index + 1


