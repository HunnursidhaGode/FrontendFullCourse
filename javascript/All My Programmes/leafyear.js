const prompt = require("prompt-sync")();
 let year=Number(prompt("enter the year"))
 if (year%400==0 || (year%4==0&& year%100 !=0))
 {
   console.log("year is leaf")
 }
 else
 {
  console.log("year is not leap")
 }
