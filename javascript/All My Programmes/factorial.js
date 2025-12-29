const prompt = require("prompt-sync")();
let num=Number(prompt("enter number for factorial\n"))
let fact=1;
for(let i=1;i<=num;i++)
  {
    fact=fact*i;5

  } 
  console.log("factorial of number "+ num+ "is ="+ fact);