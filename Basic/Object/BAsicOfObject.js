//create a object in this person is a object and Name,city,Age,Isstudent,skills are properties.

const person = {
  Name: "Sunita",
  city: "delhi",
  Age: 22,
  IsStudent: true,
  Skills: ["c#", "javascript", "html"],
};
//another way

//var person = { Name: "Sunita", city: "Delhi", Age: 22, eyeColor: "blue" };

//another object
/* const cup = {
  color: "multicolor",
  design: "good",
  weight: 0.3,
  material: "plastic",
}; */

//Access object properties

//person.Name; // Dot Notation

//person["Name"]; // Bracket Notation

console.log(person.Name); //sunita

//set a value of object
person.nickname = "sona";

var message = `Hi, my name is ${person.Name}, I live in ${person.city}, And i'm ${person.Age} years old. 
most know me as ${person.nickname}. I have a ${person.Skills.length} skills- ${person.Skills}.`;
console.log(message);
