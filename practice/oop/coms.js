// Modules Export- is a node feature. Allows you to split code in multiple files
//OOP: Object Oriented Programming

var katLibrary = require("./library.js");
var katLibrary2 = require("./library2.js");
var coolLibrary = require("./library2.js");

var results= katLibrary.mathify( 100, 38, 48, 93);
//can re-use in the code when creating a var

//console.log(katLibrary.mathify(59, 830, 84, 20));
//console is the graveyard and can not be re-used

//console.log(results);

var newNumber = results + 10;

//Challenge from library2.js
var results =katLibrary2.toCelsius(60);
console.log(results);



