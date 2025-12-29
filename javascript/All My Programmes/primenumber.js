const prompt = require("prompt-sync")();
let num = Number(prompt("enter the number to check"));
let isPrime = true;
if (num <= 1) {
  isPrime = false;
}
for (i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrime = false;
    break;
  }
}
if (isPrime == true) {
  console.log("number is prime");
} else {
  console.log("number is not prime");
}
