//very hard 

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