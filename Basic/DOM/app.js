//Use different Methods
// use of document.getElementById

const myHeading = document.getElementById("myHeadingId");
const myButton = document.getElementById("myButtonId");
const myTextInput = document.getElementById("myTextInputId");

myButton.addEventListener("click", () => {
  myHeading.style.color = myTextInput.value;
});

// use of document.getElementsByTagName
const myList = document.getElementsByTagName("li");
for (let i = 0; i < myList.length; i++) {
  myList[i].style.color = "purple";
}

// use of document.getElementsByClassName
const errorNotPurple = document.getElementsByClassName("error-not purple");
for (let i = 0; i < errorNotPurple.length; i++) {
  errorNotPurple[i].style.color = "red";
}

// use of document.querySelectorAll
const evens = document.querySelectorAll("li:nth-child(even)");
for (let i = 0; i < evens.length; i++) {
  evens[i].style.background = "lightgray";
}
