    
    
                //parameters: num1, num2, num3, num4
function mathify(num1, num2, num3, num4) {

    return num1/ num2 * (num3 % num4);
}
//KIM: return= returns a value to the line that called it. Returns to that instance. It dies at the semicolon. Return is also used to kill a program


function shouldNotBeAccessed() {
    console.log("hello");
}

module.exports = {
    mathify: mathify,
    shouldNotBeAccessed
};
//Mathify: mathify Key name is the method name which needs to correspond to ln 6 in the coms.js file. Ex: somethingCool on ln 16 needs to read on line 6 in coms.js as var results= katLibrary.somethingCool( 100, 38, 48, 93);