const prompt = require("prompt-sync")();
let num=Number(prompt("enter the number"))
let sum=0;
let temp=num;
while(num>0)
{
    let r=num%10;
    sum=sum*10+r; 
    num=Math.floor(num/10);
}
if (sum==temp)
{
  console.log("number is palindrome")
}
else{
  console.log("number is not palindrome")
}