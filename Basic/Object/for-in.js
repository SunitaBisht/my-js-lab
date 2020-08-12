//create a object and use for -in loop

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

//create a object

const person = {
  Name: "Sunita",
  city: "delhi",
  Age: 22,
  IsStudent: true,
  Skills: ["c#", "javascript", "html"],
};

//variable: const prop
for (const prop in person) {
  console.log(`${prop} :${person[prop]}`);
}

//use of Object.Key() method

const Information = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(Object.keys(Information));
// expected output: Array ["a", "b", "c"]

//use of Object.values() method
console.log(Object.values(Information));
// expected output: Array ["somestring", 42, false]
