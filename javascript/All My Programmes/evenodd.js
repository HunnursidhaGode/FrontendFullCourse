const prompt = require("prompt-sync")();

let num=Number(prompt("enter the number"))
if(num%2==0)
{
  console.log("number is even")
}
else
{
  console.log("number is odd")
}