//
var text = "This is an another example string!";


for (var i = 0; i < text.length; i++) {

    if (text.charAt(i) == "e"){
        console.log("We found an e at index " + i);
    }
}

//move the code to its own function