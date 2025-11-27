// function expression:-  we can asign entire function to a single variable
//single variable can hold the entire function
const prompt = require("prompt-sync")();

let result = function (a, b) {
  let c = a + b;
  console.log("addition of two numers=", c);
};
let num1 = Number(prompt("enter the value of first number"));
let num2 = Number(prompt("enter the value of second number"));
result(num1, num2);
