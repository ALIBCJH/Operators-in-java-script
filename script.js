//ARITHEMATIC OPERATORS IN JAVA SCRIPT
const now = 2037;

const ageJuma = now - 2024;
const ageSerah = now - 2023;

console.log(ageJuma, ageSerah);
console.log(ageJuma * 2, ageSerah / 2);

console.log(ageJuma ** 2, ageSerah ** 2); // Exponetial  operator

//String concentation using the + operator
let firstName = "Simon";
let secondName = "Juma";

console.log(firstName + secondName);

//ASSIGNMENT OPERATOR
let x = 10 + 5;
x += 10; //x = x + 10
x *= 4; // x = x * 4
x++; //x = x + 1
x--;
x--;
console.log(x);

//COMPARISON OPERATORS
console.log(ageJuma > ageSerah);

let ageSimon = 18;
let ageRose = 17;
if (ageSimon > ageRose);
console.log("Simon is allowed to vote");

console.log("Rose is too young to vote");

console.log(ageSerah >= 18);
console.loog(ageJuma >= 18);

//Ternary Operators in java script
let Age = 18;
let voting = age > 18 ? age : Age;
console.log(voting);
// Ternary operator example
const age = 20;
const message = age >= 18 ? "You are an adult" : "You are a minor";

console.log(message); // Output: "You are an adult"

