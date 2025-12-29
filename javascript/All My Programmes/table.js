const prompt = require("prompt-sync")();
let num = Number(prompt("enter number to create table"));
for (i = 1; i <= 10; i++) {
  console.log(num * i);
}
