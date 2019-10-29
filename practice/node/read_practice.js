//Import the Package FS
var fs = required("fs");

//variable for furture Object.
var convertedObject;
/*KIM: undefined because not assigned a value logical error
null= 
0 represents a number
*/

// Read file saved.json to work on content.
var JSONText = fs.readFileSync("saved.json", "utf8");

/* Converting JSON to a Javascript Object:
 (has to be the JSON format). Using parse feeding it JSONText 
 MUST BE JSON FORMAT OR ELSE IT WILL BREAK */
var convertedObject = JSON.parse(JSONText);

console.log(convertedObject);

//Update the age property:
convertedObject.age = 15;

//Add the legs property:
convertedObject.legs = 2;

console.log(convertedObject);

// Convert Javascript Object to JSON text: (not updating it live. So it needs to be written to the file but it needs to be stringified by usinf JSON.stringify.)
var stringifiedObject = JSON.stringify(convertedObject);


// *******************----------------**********************
//This section adds a historical record of the data to a file called "history.txt".

//METHOD 1:
//Previous way of writing history, but unusable for js programs
//fs.appendFileSync("history.txt", stringifiedObject + "\n", "utf8");
//   "\n" creates a new line after the entry 


//METHOD 2:
//START this section adds a historical record of the data to a file called "history.txt"

//Step 1: Read history file
var historyString = fs.readFileSync("history.json", "utf8");

//Step 2: Convert JSON to JS Object
var historyObject = JSON.parse(historyString);

//"Pull out" arrays from historyObject
var historyArray = historyObject.objectsArray;
var timestampArray = historyObject.timestamp;

//Add new information to the arrays
historyArray.push(convertedObject);
timestampArray.push(new Date().toLocaleString());
//new Date creates a new object and converting it to a string

//Step 5: Update arrays in HistoryObject with the modified arrays. (put array back into object)
historyObject.objectsArray = historyArray;
historyObject.timestamp = timestampArray;

//Step 6: convert object to JSON
var newUpdatedJSON = JSON.stringify(historyObject);

//Step 7: Overwrite new JSON on history.json
fs.writeFileSync("history.json", newUpdatedJSON, "utf8");

// End History Record Save



//Save the JSON text to the same file, replacing old content.
// fs.writeFileSync("saved.json", convertedObject, "utf8"); this produced an object, Object.  with an Unexpected token error in JSON at position ....
fs.writeFileSync("saved.json", convertedObjectstringifiedObject, "utf8");


