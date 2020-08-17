//examples of modules /http modules--------------------------------------------------------------------
//use http module using require method
const http = require("http");
//create a server object
const server = http.createServer((req, res) => {
  res.end("Hello World\n"); //write a response to the client then end the rsponse
});
server.listen(4242, () => {
  //the server object listens the port 4242
  console.log("Server is running...."); //this message print in console
});

//one more example.-------------------------------------------------------------------------

var http = require("http");
//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

//print date and time----------------------------------------------------------------------
var http = require("http");
var dt = require("./myfirstmodule");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time is currently: " + dt.myDateTime());
    res.end();
  })
  .listen(8080);
