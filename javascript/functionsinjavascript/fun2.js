const prompt = require("prompt-sync")();
//function defination
function sum() {
  let num1 = Number(prompt("enter the first number"));
  let num2 = Number(prompt("enter the second number"));
  let num3 = num1 + num2;
  console.log("Addition=" + num3);
}
sum();
