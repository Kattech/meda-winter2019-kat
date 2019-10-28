/* Warm up Challenge:
Build a sideways pyramid  of astericks ("*") in the console, 10 astericks tall, you can only use 2 console.log statements. Do not use  new line character return "\n".

Using basic Javascript:
-variables
-loops
-if statement
-console.log
-concatination
BONUS: use 1 loop only "DRY Code"-Don't Repeat Yourself"
*/
//PATTERN:
//console.log("*");
//console.log("**");
//console.log("***");
//console.log("****"); but can only use 2 
/*
*
**
***
****
***
**
*
*/

// Shows how to add stars and build up but not down:
/* var star= "*";
for (var counter = 0; counter < 10; counter = counter +1) {
    stars = stars + "*";
    console.log("*");
}
*/


// return is for fx
//break= breaks for any loops. break the loop statement.  that ideration and then moves to the next 

//continue breaks the current loop. don't worry 

var stars = "";

for (var counter = 0; counter < 10; counter = counter +1) {
    stars = stars + "*";
    console.log(stars);
}
/* ^Note that: stars = stars + "*"; adds one star at a time but if you want to accelerate the growth you can add more stars in the string so that the first step of the pyramid is
***
******
*********
*/

for (var counter = 9; counter > 0; counter =counter -1) {
    var newString = stars.slice(0, counter);
    console.log(newString);
}



