//Simple example of function

function calcRectArea(width, height) {
  return width * height;
}
console.log(calcRectArea(5, 6));
// expected output: 30

console.log("-------------------Random Numbers-------------------");
//-------------Single-----parameter-- argument--------------------------------------------
function getRandomNumber(upper) {
  const randomNumber = Math.floor(Math.random() * upper) + 1;
  return randomNumber;
}
console.log(getRandomNumber(7));
console.log(getRandomNumber(200));
console.log(getRandomNumber(1000));

console.log("------------------------RactArea-----------------");
//------ Multiple Parameter----- & conditional Statement ---------------------------------------------------

function getRactArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}
console.log(getRactArea(56, 3));
// expected output : 168
console.log(getRactArea(-3, 40));
//expected output : 0
