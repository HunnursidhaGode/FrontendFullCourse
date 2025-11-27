const prompt = require("prompt-sync")();
let num = Number(prompt("enter the number"));
let sum = 0;
while (num > 0) {
  let rem = num % 10;
  sum = sum + rem;
  num = Math.floor(num / 10);
}
console.log("sum of dogits of number=", sum);
