// KIM: Everything on the right side of the = happens first! Especially within parenthesis.  Never on the left.
//piperita- a more colorful iTerm


//Renaming ARGV array for easier reading
//When using ARGV, start with index 2, because 0 and 1 are not useful in our code.

//var terminalArguments = process.argv;

//var sum = terminalArguments[2] + terminalArguments[3];

//console.log(sum);

//all valid js but logical error 10 + 4 is 14 NOT 104, and 104 is returned in the terminal from node.
//Fix: ParseInt

var terminalArguments = process.argv;
   

// Tests if index 2 has something and can be converted to number, otherwise send error message.
    if ( isNaN( parseInt(terminalArguments[2]) ) ) {
        console.log("You are missing the first number, please type in two numbers after the command with spaces. Example: node calculator.js 50 100");

    return;
}

// Tests if index 3 has something and can be converted to number, otherwise send error message.
if ( isNaN( parseInt(terminalArguments[3]) ) ) {
    console.log("You are missing second number, please type in two numbers after the command with spaces. Example: node calculator.js 50 100");

return;
}


//Warns users that we can only use the first two numbers.

if (terminalArguments[5] != undefined) {
    console.log(" Unforntunately this program can only use the first two numbers. Subscribe for future updates.")
}




var number1 = parseInt(terminalArguments[2]);
var number2 = parseInt(terminalArguments[3]);
//Safe to use number1, and number2 as they are Number DataTypes.


//Need adnother terminal Argument! To allow user to select what mathematical operation they want to execute.
//Decide what we want to do with these numbers.
if (terminalArguments[4] == undefined) {
    console.log("You need to type in the operation adter the two numbers, try the following vaules: add, subtract, multiply, divide, remainder");

    return;
} else if (terminalArguments[4] == "add") {
    add(number1, number2);
} else if (terminalArguments[4] == "subtract") {
    subtract(number1, number2);
} else if (terminalArguments [4] == "multiply") {
    multiply( number1, number2);
} else if (terminalArguments [4] == "divide") {
    divide( number1, number2);
}else if (terminalArguments [4] == "remainder") {
    modulate(number1, number2);
} else {
    console.log("Sorry we did not understand the operation you selected.")
}

// Switch statements are also an option


//CHALLENGE: CREATE MATHEMATICAL OPERATIONS OF SUM, DIVISION, MULTIPLICATION, AND MODULUS.
add( number1, number2);
subtract( number1, number2);
multiply( number1, number2);
divide( number1, number2);
modulate(number1, number2);


//addition:
function add(num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
}

//subtraction:
subtract( number1, number2);

function subtract( num1, num2) {
    var difference = num1 -num2;
    console.log(difference);
}

//division:
division( number1, number2);


function division(num1, num2) {
    var quotient = num1 / num2;
    console.log(quotient);
}

//multiplication:  
multiply( number1, number2);


function multiply(num1, num2) {
    var product = num1 * num2;
    console.log(product);
}

//remainder:
remainder( number1, number2);

function modulate(num1, num2) {
    var remainder = num1 % num2;
    console.log(remainder);
}


//bug vs. error: it works but doesn't return the value you expected. Error just can't run

//100 + undefined = Nan
//NaN tells you there is an issue
// logical prblm in the code not passing the correct values.
/*Ask a question via an if statement to test. (See yesterday's file from Wed Oct 23. ) This if statement should go
right after var terminalArguments = process.argv; */

