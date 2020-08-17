/* const lodash = require("lodash");
const sum = lodash.sum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("sum is", sum); */

//create and publish a module
/* const print=require(' SunitaBisht-frame-print');
print('HELLO NPM!'); */

//Module it means (file)

/* function dynamicArgsFunction() {
  console.log(arguments);
}
dynamicArgsFunction(3, 5, 7, 2, 5); */

//event loop

/* setInterval(() => {
  console.log("Hello event");
}, 5000); */

//exception

/* const path = require("path");
const fs = require("fs");

const files = [".bash_profile", "kjs", "fdf"];
files.forEach((file) => {
  try {
    const filePath = path.resolve(process.env, HOME, file);
    const data = fs.readFileSync(filePath);
    console.log("File data is", data);
  } catch (err) {
    console.log("File not found");
  }
}); */

//event
/* 
const EventEmitter = require("events");
const myEmitters = new EventEmitter();
setImmediate(() => {
  myEmitters.emit("TEST_EVENT");
});
myEmitter.on("TEST_EVENT", () => {
  console.log("TEST_EVENT was fire");
});
myEmitters.on("TEST_EVENT", () => {
  console.log("TEST_EVENT was fire");
});
 */

//Working with web server----------------------------

const http = require("http");
const requestListener = (req, res) => {
  // console.dir(req,{depth:0});
  console.log(req, url);
  res.write("HEllo World\n");
  res.end();
};
const server = http.createServer();
server.on("request", requestListener);

server.listen(4242, () => {
  console.log("Server is runnning.....");
});

//working with operating system

const os = require("os");
console.log("OS Plateform:", os.platform());
console.log("OS CPU architechture:", os.arch());
console.log("# of logical CPU cores", os.cpus().length);
console.log("Home directory for current users", os.directory());
console.log("line 1" + os.EOL + "line 2" + os.EOL + "line 3");
