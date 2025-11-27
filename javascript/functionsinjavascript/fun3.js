// function with parameter and argument
const prompt = require("prompt-sync")();
function sum(a, b) {
  let num3 = a + b;
  console.log(num3);
}
let num1 = Number(prompt("enter first number1"));
let num2 = Number(prompt("enter the number 2"));
sum(num1, num2);
