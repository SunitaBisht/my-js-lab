//Multidimentional Array
var questions = [
  ["How many states are in the India?", 28],
  ["How many Union territories are there?", 8],
  ["How many legs does an insect have?", 6],
];

var correctAnswers = 0;
var question;
var answer;
var response;

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  }
}

html = "You got " + correctAnswers + " question(s) right.";
print(html);
