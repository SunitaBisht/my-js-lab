//collect input from user
const HtmlBadge = prompt("How many Html Badge do you have?");
const JavascriptBadges = prompt("How many javaScript Badge do you have?");

const TotalBadges = HtmlBadge + JavascriptBadges;
//1234

//convert
const TotalBadges = parseInt(HtmlBadge) + parseInt(JavascriptBadges);
//so TotalBadge =46

//Type of input
console.log(typeof HtmlBadge, typeof JavascriptBadges);
//integer   integer

// convert string to interger
console.log(typeof parseInt(HtmlBadge), typeof parseInt(JavascriptBadges));

//Convert string to number type  (float)
const pi = "3.14";
console.log(typeof parseFloat(pi));
//number type

document.getElementById("Demo").innerHTML = TotalBadges;
