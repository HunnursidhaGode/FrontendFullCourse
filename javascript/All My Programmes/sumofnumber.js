const prompt = require("prompt-sync")();

let num= Number(prompt("enter number "));
let sum=0;
for(i=1;i<=num;i++)
{
  sum=sum+i;
}
console.log("sum of fist &{num} is= " +sum);