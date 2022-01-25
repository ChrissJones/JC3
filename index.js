// VERY EASY: Challenge 
// Declaring only numerical values (not var="1")
var a = 4;
var b = 3;
console.log(a-b);

// EASY: Challenge 
// String: declaring a variable without using numbers
var a = "Christian";
var b = "Karla";
/// This checks how many charachters are in each string
var diff = a.length - b.length; 
//this is a 
var statement = `The name ${a} is longer than ${b} by ${diff} character” `;
console.log(statement);


// Med: Challenge 
var character = prompt("Enter a string: ");
if (character == character.toUpperCase()) {
console.log('Stop yelling!');
}
if (character == character.toLowerCase()){
console.log('Stop wispering :(');
} else {
   console.log('Thanks for talking Normal :)');
}

//hard
function add(a, b) {
    return a + b;   // The function returns the sum of a and b
  }
function subtract(a, b) {
    return a - b;   // The function returns the difference of a and b
  }
function multiply(a, b) {
    return a * b;   // The function returns the product of a and b
  }
function divide(a, b) {
    return a / b;   // The function returns the division of a and b
  }

//very hard 
// Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form.

var a = Number(prompt("Enter the first number"));
var operator = prompt("What do you want to do? Add: + , Divide: / , Multiply: * or Subtract: - ");
var b  = Number(prompt("Enter the second number"));

function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return  (a * b);
}

function divide(a, b) {
    return (a / b);
}

if (operator === "+") {
    add(a, b);
    alert(a + " + " + b + " = " + add(a, b));
}
else if (operator === "-") {
    subtract(a, b);
    alert(a + " - " + b + " = " + subtract(a, b));
}
else if (operator === "*") {
    multiply(a, b);
    alert(a + " * " + b + " = " + multiply(a, b));
}
else if(operator === "/") {
    divide(a, b);
    alert(a + " / " + b + " = " + divide(a, b));
}
else {
    alert("Apologies, Please try again!");