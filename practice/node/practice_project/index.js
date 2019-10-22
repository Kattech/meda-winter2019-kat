var _ = require("lodash");

var randomNumber = _.random(60, 90);

var jsNumber = Math.floor((Math.random() * 90) + 60);

//jQuery();
// $();

// _.random(60, 90);

console.log(randomNumber, jsNumber)


//array1-array2;
var array1= [94, 302, 349];

var array2 = [302];

console.log(_.difference(array1, array2));




// Write a lodash methods (methods bc belongs to objects. Class is a description of the object ie: we are all human is class, individual person is the object)
//To write the date method:
var nowTime = _.now;

var timeStamp = _.now;

_.defer( function(stamp) {
    console.log(_.now() - stamp);
}, _.now());