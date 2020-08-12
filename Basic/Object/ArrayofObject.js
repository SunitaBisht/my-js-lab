// Array of pet objects

const pets = [
  {
    name: "Joey",
    type: "Dog",
    breed: "Australian Shepherd",
    age: 8,
    photo: "../Image/aa.jpg",
  },
  {
    name: "Patches",
    type: "Cat",
    breed: "Domestic Shorthair",
    age: 1,
    photo: "../Image/ccc.jpg",
  },
  {
    name: "Pugsley",
    type: "Dog",
    breed: "Pug",
    age: 6,
    photo: "../Image/download.jpg",
  },
  {
    name: "Simba",
    type: "Cat",
    breed: "Persian",
    age: 5,
    photo: "../Image/sss.jpg",
  },
  {
    name: "Comet",
    type: "Dog",
    breed: "Golden Retriever",
    age: 3,
    photo: "../Image/aa.jpg",
  },
];

const main = document.querySelector("main");
let html = "";
for (let i = 0; i < pets.length; i++) {
  let pet = pets[i];
  html += `
    <h3> ${pet.name}</h3>
    <h4> ${pet.type} | ${pet.breed}</h4>
    <p>Age:${pet.age}</p>
    <img src="${pet.photo} " alt="${pet.breed}"> `;
}
main.insertAdjacentHTML("beforeend", html);
