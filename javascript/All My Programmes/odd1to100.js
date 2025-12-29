const prompt = require("prompt-sync")();
let lowerlimit=Number(prompt("enter lower limit"))
let upperlimit=Number(prompt("enter the upperlimit"))
for (let i=lowerlimit;i<=upperlimit;i++)
{
  if(i%2!==0)
  {
    console.log(i);
  }
}