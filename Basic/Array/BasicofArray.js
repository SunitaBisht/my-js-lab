//create a array

//let shopping = [];

//store values in array: contain diffrent types values in single object

let shopping = [34, 43, 12];
//let shopping = ['sunita','Ram','sita'];
//let shopping=['sunita',34,true];

//modify the array--------------------

shopping[0] = "tani";

//find value-----------------------
console.log(shopping);

//find value index wise-------------------
console.log(shopping[1]);

//find the length of array------------------------------
console.log(shopping.length);

//array numbers is iterated through by looking at the length property.-------------------
var number = [1, 2, 3, 4, 5];
var length = number.length;
for (var i = 0; i < length; i++) {
  number[i] *= 2;
}
console.log(number);

//find the 2nd index value---------------------------------
console.log(number[2]);
