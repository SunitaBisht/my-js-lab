let str = "";
for (let i = 0; i < 9; i++) {
  str = str + i;
}
console.log(str);
// expected output: "012345678"

//find random numbers----------------- with use for loop------------------------

function getRandomNumbers(upper) {
  return Math.floor(Math.random() * upper) + 1;
}
for (i = 0; i < 10; i++) {
  console.log("The random number is:" + getRandomNumbers(10));
}
