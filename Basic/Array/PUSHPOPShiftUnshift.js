//use push method:add more elements to the end of an array

var city = ["delhi", "noida", "up", "mp"]; //create array
console.log(city); //print in console
var insert = city.push("patna", "kashi"); //insert two new city end of the array
console.log(insert); //print the number of city expected output is 6
console.log(city); //print all city after inserting new city

console.log("--------------------use apply method------------------------");
//apply() to push all elements from a second array.

let vegetables = ["parsnip", "potato"];
let moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot')
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']

console.log("--------------USE Unshift method--------------------------------");
//use unshift method:
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

console.log("--------------USE PoP method----------------------------------");
//use pop method

var branch = ["cs", "ME", "CE", "EC", "EE"];
console.log(branch.pop());
//expected output is :EE

console.log(branch);
//expected output is: ["cs", "ME", "CE", "EC"];

console.log(branch.pop());
//expected output is :EC

console.log(branch);
//expected output is: ["cs", "ME", "CE"];

console.log("---------------USE shift method--------------------------------");
//use shift method

const array2 = [1, 2, 3];

const firstElement = array2.shift();

console.log(array2);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

console.log("--------Math.max-----------------------");
// use Math.max()
//--------math.max return a largest of zero or more numbers
console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1

const array3 = [1, 3, 2];
console.log(Math.max(...array3));
// expected output: 3

console.log("--------Math.min---------------------------");
// use Math.min()
//--------math.min return a lowest number valued passed
console.log(Math.min(1, 3, 2));
// expected output: 1

console.log(Math.min(-1, -3, -2));
// expected output: -3

const array4 = [1, 3, 2];
console.log(Math.min(...array4));
// expected output: 1
