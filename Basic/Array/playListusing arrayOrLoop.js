//array
const playlist = [
  "So What",
  "Respect",
  "What a Wonderful World",
  "At Last",
  "Three Little Birds",
  "The Way You Look Tonight",
  "cools sings",
];
//function
function createListItems(arr) {
  let items = "";
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}
//display in page   //function calling
document.querySelector("main").innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
`;
