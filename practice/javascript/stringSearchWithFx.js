////move the code to its own function
characterSearch("This is an another string!", "i");

characterSearch("This is yet another string!", "o");

//absraction with keywords text, letter in the parameter. replace the e with these keywords
function characterSearch(text, letter) {

    for (var i = 0; i < text.length; i++) {

         if (text.charAt(i) == letter) {
            console.log("We found an " + letter +  "at index " + i);
         }  
    }
}
