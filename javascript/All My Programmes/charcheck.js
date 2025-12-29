const prompt = require("prompt-sync")();
let ch=prompt("enter the character to check")
if (ch >='a' && ch<='z'|| ch>='A' && ch<='Z')
{
  console.log("This is alphabet")
}
else if(ch>='0' && ch<='9')
{
  console.log("this is number")
}
else{
  console.log("this is special character")
}