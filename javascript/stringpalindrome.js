const prompt = require("prompt-sync")();

let str = prompt("enter the string  ");
let rev = "";
//let temp = str;
for (let i = str.length - 1; i >= 0; i--) {
  rev = rev + str[i];
}
if (rev == str) {
  console.log("string is palindrome");
} else {
  console.log("string is not palindrome");
}
