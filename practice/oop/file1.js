// Create file1.js in oop folder, export with 2 functions

function firstFunction(){
    console.log("Wakey, wakey...")
}


  function secondFunction() {
      console.log("Good Morning, San Francisco");
  }
 console.log("Get out of bed!");

  //object
module.exports = {
    firstFunction: firstFunction,
    secondFunction: secondFunction
};