const prompt = require("prompt-sync")();
let num= Number(prompt("enter the number/n"))
let count=0;
while(num>0)
{
  num=Math.floor(num/10);
  count++;
}
console.log("total digits=", count)