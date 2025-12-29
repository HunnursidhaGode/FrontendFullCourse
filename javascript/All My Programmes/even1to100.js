const prompt = require("prompt-sync")();
let lowelimit=Number(prompt("enter lowerlimit"))
let upperlimit=Number(prompt("enter the upperlimit"))

for(let i=lowelimit; i<=upperlimit;i++)
{
   if (i%2==0)
   {
    console.log(i)
   }
}