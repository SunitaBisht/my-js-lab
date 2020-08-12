//arrow function:
//don't have a name
// refrence the function a variable name

const getRandomNumber = () => {
  const RandomNumber = Math.floor(Math.random() * 1) + 1;
  return RandomNumber;
};

// with single parameters-------------------------------------

const getRandomNumber = (upper) => {
  const RandomNumber = Math.floor(Math.random() * upper) + 1;
  return RandomNumber;
};

//single parameter---------------------------------------------

const square = (x) => {
  return x * x;
};
square(10);

//not allow you to remove the parentheses from arrow functions---------------------------

/* const getArea = width, length, unit => {
  const area = width * length;
  return `${area} ${unit}`;
}; 
getArea(10, 20, "sq ft");*/
// Uncaught SyntaxError: Missing initializer in const declaration

//mutliple parameter----------------------------------------------------------
const getArea = (width, length, unit) => {
  const area = width * length;
  return `${area} ${unit}`;
};
getArea(10, 20, "sq ft");
// 200 sq ft

// function default-value---------------------------------------------------------

function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(3, 7));
//expected output :21
console.log(multiply(2));
//expected output:2

//undefined------------------------------------------------------------------------

function test(t) {
  if (t === undefined) {
    return "undefined value!";
  }
  return t;
}
let x;
console.log(test(x));
//expected output:  undefined value!

//find random Number----------------------default value------------------------------------

function getRandomNumber(lower, upper = 100) {
  if (isNaN(lower) || isNaN(upper)) {
    throw Error("both arguments must be a number:");
  }
  return Math.floor(Math.random() * (upper - lower) + 1) + lower;
  //call the function and pass that different values
}
console.log(getRandomNumber(1, 6));
console.log("${getRandomNumber(10)} is a random number between 10 and 100");
console.log(getRandomNumber(200, "three hundred"));

//      Throw--------------------------------------------------
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  }
}
try {
  getRectArea(3, "A");
} catch (e) {
  console.error(e);
  // expected output: "Parameter is not a number!"
}
