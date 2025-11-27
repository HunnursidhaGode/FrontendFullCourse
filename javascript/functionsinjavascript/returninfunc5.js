const prompt = require("prompt-sync")();

let result = function sum(a, b) {
  return a + b;
};
console.log(result);
let num1 = Number(prompt("enter the number1"));
let num2 = Number(prompt("enter the number2"));
var myrsult = result(num1, num2);
console.log("addition=", myrsult);
