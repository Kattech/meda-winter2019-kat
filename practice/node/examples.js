//STRING LITERALS----review


var doubleQuotes = "this is a string";

var singleQuotes = 'this is a string';

//^ this one is for multiple lines
var stringLiterals = ` this
is
a 
string`;


var html = 
"<html>" + 
"<head>"
"<style></style>" +
"</head>" +
"<body> </body" +
"</html>";

var html2 = "< html><head><style></style></head><body></body></html>";

var html3= `
<html>
    <head>
            <style></style>
    </head>
    <body>
    </body>
</html>
`;

//Update this script to write the text of html3 to a file called "sample.html"
//Best solution: best practice
 var fs = require("fs");
 fs.writeFileSync( "sample.html", html3, "utf8");


//Also correct but NOT optimal
 var fs = require("fs");
 fs.writeFileSync( "sample.html", `
 <html>
     <head>
             <style></style>
     </head>
     <body>
     </body>
 </html>
 `, "utf8");
 