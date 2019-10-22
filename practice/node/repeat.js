//Node File

var fs = require("fs");

fs.writeFileSync("repeat.txt", "", "utf8");

fs.appendFileSync("repeat.txt", "This is a sample sentence.", "utf8");

for (var i=0; i< 100; i=i+1){
    var lineNumber = i + 1;

    fs.appendFileSync("repeat.txt", `${lineNumber}"This is a sample sentence.\n`, "utf8");
}

//  \n = new line