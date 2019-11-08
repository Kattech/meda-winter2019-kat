const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const port= 3000;
http.listen(port);


console.log("Express server running on port" + port);

//Needed to read data sent through POST request
//bodyParser is a package used with express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Routes:
app.use("/", express.static("client/"));

app.post("/updateData", (request, response) => {

    console.log(request.body);

    console.log("We recieved a request for updateData");
    response.sendStatus(200); 
});

// "/" = the route

//build out the HTML page