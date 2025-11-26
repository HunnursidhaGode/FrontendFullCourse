const prompt = require("prompt-sync")();
let num=Number(prompt("enter the number"))
let a=0,b=1;
console.log("fibonacci series= ")
console.log(a)
console.log(b)
for(i=3;i<=num;i++)
{
  let c=a+b;
  console.log(c);
  a=b;
  b=c;
}