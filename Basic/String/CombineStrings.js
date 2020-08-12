const name = prompt("What is your name?");
let message = "Hello ," + name + " Welcome to india";

message += "I am happy that come you visit";
message += name + ".";
message += "Please come again";

//const message =
//  "Hello ,${name}. Welecome to delhi , Happy to see you ${name}  please come again ";

console.log(message);

document.getElementById("demo").innerHTML = message;
