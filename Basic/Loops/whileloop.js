//find random numbers use while loop

function getRandomNumbers(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

let counter = 0;
while (counter < 10) {
  console.log("The random number is:" + getRandomNumbers(10));
  counter += 1;
}

//use Break---------------------

let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}
console.log(i);
// expected output: 3

//use return ------------------------------------------------------

function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}
console.log(getRectArea(3, 4));
// expected output: 12

console.log(getRectArea(-3, 4));
// expected output: 0

//use break -------------------------------------------------------
for (let i = 5; i >= 1; i--) {
  let guess = prompt(`Enter the secret word. You have ${i} tries.`);
  if (guess === secretWord) {
    message = "Welcome to the secret loop world!";
    break; // immediately terminate the loop
  }
}
alert(message);
