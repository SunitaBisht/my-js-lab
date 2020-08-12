//variable declare outside of a function
//Global variable

var x = "declared outside function";
exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);

//-------------variable declare inside of a function
//--------------Local variable

function exampleFunction() {
  var x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

console.log(x); // Causes error
