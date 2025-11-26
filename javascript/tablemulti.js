const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

console.log(`\nMultiplication Table of ${num}\n`);

for (let i = 1; i <= 10; i++) {

  //  console.log(`${num} x ${i} = ${num * i}`);
  console.log(`${num} * ${i}=${num*i}`);
}
