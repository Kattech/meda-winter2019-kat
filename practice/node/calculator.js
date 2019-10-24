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
if (terminalArguemts[4] != undefined) {
    console.log(" Unforntunately this program can only use the first two numbers. Subscribe for future updates.")
}

// More readable and can be reused in the future if we still want the number
var number1 = parseInt(terminalArguments[2]);

var sum = number1+ parseInt(terminalArguments[3]);

console.log(sum);
console.log(true);


//bug vs. error: it works but doesn't return the value you expected. Error just can't run

//100 + undefined = Nan
//NaN tells you there is an issue
// logical prblm in the code not passing the correct values.
/*Ask a question via an if statement to test. (See yesterday's file from Wed Oct 23. ) This if statement should go
right after var terminalArguments = process.argv; */

