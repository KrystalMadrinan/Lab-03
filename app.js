'use strict'
var firstName = prompt('What is your name?');
console.log('firstName: ', firstName);

alert('Hello ' + firstName + "!");
//Question 1
var stateQuestion= prompt('Am I from Florida?');
stateQuestion = stateQuestion.toLowerCase();

if (stateQuestion === 'y' || stateQuestion === 'yes') {
  alert('Ahh! Wrong! I am from the great state of Texas.');
} 
if (stateQuestion === 'n' || stateQuestion === 'no') {
  alert('You are correct. Thank you.');
  console.log("You are correct!");
}
 else {
  alert('I don\'t know what that means, but okay.');
}
//Question 2
var favoriteColor = prompt('Is my favorite color red?');
favoriteColor = favoriteColor.toUpperCase();

if (favoriteColor === 'Y' || favoriteColor === 'YES') {
  alert('You are correct!');
  console.log('Correct!');
} else {
  alert('Really? How hard is it to read?');
}
//Question 3
var favoriteFood = prompt('Is my favorite food pizza?');
favoriteFood = favoriteFood.toLowerCase();

if (favoriteFood === 'n' || favoriteFood === 'no') {
  alert('Yep. You know me so well.');
  console.log('Correct!');
} else {
  alert('Nope, but I do like pizza.');
}

//Question 4
var dogQuestion = prompt('Is my dog\'s name Polly?');
dogQuestion = dogQuestion.toLowerCase();

if (dogQuestion === 'n' || dogQuestion === 'no') {
  alert('Yes! You remembered her name.');
  console.log('Correct!');
} else {
  alert('Incorrect answer. Her name is Joy.');
}
//Question 5
var workBackground = prompt('Prior to coming to Code Fellows, did I work as a teacher?');
workBackground = workBackground.toLowerCase();

if (workBackground === 'n' || workBackground === 'no') {
  alert('Right. I work in IT.');
  console.log('Right!');
} else {
  alert('Wrong. I was never a teacher.');
}
