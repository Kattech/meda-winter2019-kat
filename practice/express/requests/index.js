//EXPRESS TEMPLATE: lines 2-15 (kim:express is a node package.)
const express = require("express");
const bodyParser = require("body-parser"); //static function. to understand the front end. will always habe body parser with express
const app = express(); //activates the server
const http = require("http").Server(app); // links together
const port= 3000; //
http.listen(port);


console.log("Express server running on port" + port);

//Needed to read data sent through POST request
//bodyParser is a package used with express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); // part of the http request.

//Custom Code for Express

//Routes:
app.use("/", express.static("client/")); //for static files.
//post is a http request: send and rec'v 
app.post("/updateData", (request, response) => { 
       ///updateData run thru ajax call is a GET REQUEST                 
    let objectFromRequest= request.body;
                                     // add message
    console.log(objectFromRequest.message);
 
    let text = objectFromRequest.message;
    
    console.log("We recieved a request for updateData: "+ text);
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