const prompt = require("prompt-sync")();
let str = prompt("enter th string to reverse     ");
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev = rev + str[i];
}
console.log("reversed string =  ", rev);
