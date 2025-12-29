const prompt = require("prompt-sync")();

let lowelimit=Number(prompt("enter lower limit"))
let upperlimit=Number(prompt("enter upper limit"))
for (let i=lowelimit; i<=upperlimit; i++)
{
  console.log(i)
}