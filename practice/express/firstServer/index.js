//Use the Express package
const express = require("express");

//Run the Express server:
const app = express();

//Feed Express server to the HTTP package- hooking things up to the server...
const http = require("http").Server(app);

const port = 8080;

//Tell HTTP to which port to listen to. (Need to assign to port 8080 to have node listen to that port using .listen)
http.listen(port);

console.log("The express server is running on port " + port + "!");

//Express Routes: tell it what to do when requested. .use is a method
app.use("/client", express.static("./web_files") );

//Example:  (Note that if the folder is moved to another location and it isn't updated then it will not load.)
//app.use("/specialfile", express.static("../../../../Git Repositories/meda/practice"));

// Leap to another place like the above Example:
app.use("/myproject", express.static("../../../../meda-fall2019-eduardo/practice/html/web_project"));

//http://localhost:808-/client -> Gets sent to  -> web_files folder