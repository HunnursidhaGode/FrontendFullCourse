const prompt = require("prompt-sync")();

let num=Number(prompt("enter number to reverse"));
let rev=0;
while(num>0)
{
  let rem= num%10;
  rev=rev*10+rem;
  num= Math.floor(num/10);
}
console.log("reversed number is",rev)