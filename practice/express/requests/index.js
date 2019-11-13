//Include into our code, the FS package (builtin)
const fs= require("fs");
//Includes into our code, the express.js, provided by NPM
//EXPRESS TEMPLATE: lines 2-15 (kim:express is a node package.)
const express = require("express");
//Includes into our code Body Parser, comes with Express.js
const bodyParser = require("body-parser"); //static function. to understand the front end. will always habe body parser with express
//Create an Express.js server object
const app = express(); //activates the server
//Includes the HTTP package (builtin), and we attach our Express.js server object to the HTTP object.
const http = require("http").Server(app); // links together
//We create a variable that will hold the port number we want to use.
const port= 3000; 
//We pass the port varibale to the listen function for the HTTP server:
http.listen(port);

//Signifying the Developer that Express.js is now running.
console.log("Express server running on port" + port);

//Needed to read data sent through POST request
//bodyParser is a package used with express
app.use(bodyParser.json());
    //Gives Body Parser specific options to run off of
app.use(bodyParser.urlencoded({extended: false})); // part of the http request.



//      -*-*-*-* Custom Code for Express.js after this line.-*-*-*-*
//Routes:
//First Argument is the route name, Second argument directory to load when someone requests the route name. "/"= Route path, second argument route directory
app.use("/", express.static("client/")); //for static files.

//An HTTP Post Handler called /submitComment. 
//First argument is HTTP Post route name, second argument is the callback function. The callback function will run every time someone requests the /submitComment post handler. request, response: rec'v and send. AKA in notation as: req, res
//Callback function parameters: request holds the object that was sent to us through the Internet, the response object holds a reference of where to send the response to (like an IP address)
app.post("/submitComment", (request, response) => { 
       
    ///Rename the data sent to us (located in request.body) to something simpler like objectFromRequest.
       //updateData run thru ajax call is a GET REQUEST                 
    let objectFromRequest= request.body;
                                     // add message
    console.log(objectFromRequest); //.message
 
    //let text = objectFromRequest.message;
    //console.log("We recieved a request for updateData: "+ text);
    let filename= "commentHistory.json";


    //If the file exists, do....
    if (fs.existsSync(filename)) {

            //... read the file and store the contents in the variable comments...
        let comments = fs.readFileSync(filename, "utf-8");

        //...parse the JSON and reuse the same comments variable...
        comments = JSON.parse(comments);
        //... add the new objectFromRequest object to the array inside of the comments object...
        comments.commentsArray.push(objectFromRequest);
        //... then convert comments back into a string as JSON...
        comments = JSON.stringify(comments);
        //... finally save the JSON string to a file.
        fs.writeFileSync(filename, comments, "utf8")
        console.log("New Comment Saved to Hard Drive!");
    } else {
        //If the file doesn't exist...
        //...We prebuild the object (which includes the comment we just recv'd) to save as JSON...
        let comments = {
            commentsArray: [objectFromRequest]
        };
        //...Convert it to actual JSON String...
        comments = JSON.stringify(comments);
        //...Finally save JSON string to new File.
        fs.writeFileSync(filename, comments, "utf8");
        console.log("Note: no save file detected, creating NewFile. New Comment Saved to Hard Drive!");
    }

    //If you don't want to send any data back, you can use .sendStatus(). You can only use sendStatus or send once to "fulfill" front-end request
    //response.sendStatus(200);
    //200 means OK


    let data = {
        text:"Thank you for your message"
    }
     
    response.send(data);
   
});
//response.sendStatus(200); 
// "/" = the route

//build out the HTML page