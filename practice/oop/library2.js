/* Challenge: 
Create another file, Name it library2.js.
Write a fx, then run this function in coms.js
*/

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
    console.log("Today's temperature");
  }
  
  
  module.exports = {
    toCelsius: toCelsius,
};
  
 
 /*module.exports = {
     //Key is the name that other files call, and the value is the data or function to run/return when they key is called.
     author: author,
     sayHello: sayHello,
     toCelsius: toCelsius
 }*/