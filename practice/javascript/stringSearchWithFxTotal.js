////move the code to its own function
characterSearch("This is an another string!", "s");

characterSearch("This is yet another string!", "o");

//absraction with keywords text, letter in the parameter. replace the e with these keywords
function characterSearch(text, letter) {
    console.log("Searching the string: " + text);

    var foundLetters = 0;  //this variable needs to be outside the loop so it doesn't reset back to zero

    for (var i = 0; i < text.length; i++) {

    

         if (text.charAt(i) == letter) {
            foundLetters = foundLetters +1;
            //Short hands:
            //can also be expressed as foundLetters++ , adds one to the existing variable
            // foundLetters += 2 , a lot like ++ but adds one to the existing variables
        }  
    }

    console.log("We found a total of  " + foundLetters + " " + letter + "'s");
}
