// Array.join()

const element = ["air", "fire", "water"];

console.log(element.join());
console.log(element.join(""));
console.log(element.join("-"));
console.log(element.join(", "));
console.log(element.join(" + "));

console.log("-------------------------use include method---------");
//use Array.include()

const number = [2, 6, 4, 9, 12, 56];
console.log(number.includes(4));

const pat = ["cat", "dog", "bat"];
console.log(pat.includes("cat"));

console.log(pat.includes("mat"));

console.log("----------------------------use indexOf-------------");
//use array.indexOf();

const fruit = ["apple", "banana", "orange", "mango"];

console.log(fruit.indexOf("apple"));
console.log(fruit.indexOf("kivi"));
console.log(fruit.indexOf("Apple"));
