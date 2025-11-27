const prompt = require("prompt-sync")();
function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      //console.log("addition =", result);
      break;
    case "-":
      result = num1 - num2;
      //console.log("substraction=", result);
      break;
    case "*":
      result = num1 + num2;
      //console.log("multiplication= ", result);
      break;
    case "/":
      result = num1 / num2;
      //console.log("division=", result);
      break;
    case "%":
      result = num1 % num2;
      //console.log("modulus= ", result);
      break;
    default:
      "invalid operator or  invalid input";
  }
  console.log("result=", result);
}

let num1 = Number(prompt("enter the fist number"));
let num2 = Number(prompt("enter second number"));
let op = prompt("enter the operator");
calculator(num1, num2, op);
