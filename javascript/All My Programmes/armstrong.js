const prompt = require("prompt-sync")();
let num=Number(prompt("enter the number"))
 let sum=0;
let temp=num;
while(num>0)
{
   let rem=num%10;
  
   sum=sum+(rem*rem*rem);
   num=Math.floor(num/10);

}
if(sum==temp)
{
  console.log("number is armstrong")
}
else
{
  console.log("number is not armstrong")
}