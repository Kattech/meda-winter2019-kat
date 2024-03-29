//HTML GENERATOR:
//always start with line 3 at the beginning
var fs = require("fs");
var terminalText = process.argv;


var htmlTitle= "My First Web Page Generated by Javascript";
//var htmlStyle = "body {background-color: green;}";
//v example below to show string literals:
/*var htmlStyle = `
body {
    background-color: green;
}`;
*/
if (terminalText[3] == undefined) {
   console.log("there was no color specified , so the default is white will be used.");

    terminalText[3] = "white";
}
    var htmlStyle = `
    body {
        background-color: ${terminalText[3]};
}`;

var htmlBody = "";
var htmlFileName = terminalText[2];
//^ OJO: program will not run if there is no file name but you can create a program to check if there is a file name. See ln 38-45
var html;

//Copy and paste the Sitepoint HTML5 template
html = `
<!doctype html>

<html lang= "en">
    <head>
        <meta charset="utf-8">
        <title>${htmlTitle}</title>
        <meta name= "description" content="The HTML5 Herald">
        <meta name= "author" content="SitePoint">

        <link rel="stylesheet" href="css/styles.css?v=1.0">

        <style>${htmlStyle}</style>
    </head>

    <body>
        ${htmlBody}
    </body>
</html>`;

//To check if the file name is empty
//need a double == to compare both sides to see if they are the same or not
//KIM single = just assigns
if (htmlFileName == "" || htmlFileName == undefined) {
    console.log("You are missing a file name, can not continue. !!!!!!!ERROR!!!!");
    return;
    //at the global name space, RETURN kills js file and ends the fx
}

var fullFileName = htmlFileName + ".html";

// utf8 is for the file, unlike in the html template meta charset, which is for the browser.
fs.writeFileSync(fullFileName, html, "utf8");

console.log("Generation of HTML file has been completed! Check your folder!");