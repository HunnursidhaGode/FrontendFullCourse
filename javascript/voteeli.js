const prompt = require("prompt-sync")();

let myage=Number(prompt("enter your age"))

if(myage>18)
{
  console.log("you can vote now")
}
else if(myage==17)
{
  console.log("wait for one year")
}
else
{
  console.log("you can not vote until 18 years complete")
}