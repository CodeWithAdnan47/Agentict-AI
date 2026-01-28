// Q.1 Write a program that asks the user for a number and checks if it's even or odd, displaying an appropriate message.
alert("You are Solving Q.1")
let num = Number(prompt("Enter a Number:"));

if (num % 2 === 0) {
    alert("The Number is Even");
}
else {
    alert("The Number is Odd");
}
alert("Q.1 Solved")
// Q.2 Write a program to accept two numbers from the user using prompt() and alert() the maximum value.
alert("You are Solving Q.2")
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

if (num1 > num2) {
    alert("Maximum number is: " + num1);
}
else if (num2 > num1) {
    alert("Maximum number is: " + num2);
}
else {
    alert("Both numbers are equal");
}
alert("Q.2 Solved")
// Q.3 Write a program that asks the user for a house name and checks specific conditions:

// If house name is "stark", print "Winter is coming"

// If house name is "lannister", print "A lannister always pays his debt"

// Otherwise, print "All men must die"

alert("You are Solving Q.3")

let house = prompt("Enter House Name:").toLowerCase();

if (house === "stark") {
    alert("Winter is Coming");
}
else if (house === "lannister") {
    alert("A lannister Always Pays his Debt");
}
else {
    alert("All Men Must Die");
}
alert("Q.3 Solved")
//Q.4 Write a program that takes the user's salary using prompt() and alerts the in-hand amount after tax deduction:

//Salary <= 20000: tax is 10%

//Salary <= 40000: tax is 20%

//Salary > 50000: tax is 30%

alert("You are Solving Q.4")

let salary = Number(prompt("Enter Your Salary:"));
let tax = 0;

if (salary <= 20000) {
    tax = salary * 0.10;
}
else if (salary <= 40000) {
    tax = salary * 0.20;
}
else {
    tax = salary * 0.30;
}

let inHandSalary = salary - tax;
alert("In-hand Salary After Tax is: " + inHandSalary);
alert("Q.4 Solved")
// Q.5 Write a program that uses any loop structure to find and print the first 10 numbers in the Fibonacci sequence.

alert("You are Solving Q.5")

let a = 0, b = 1;
let count = 10;

alert("First 10 Fibonacci Numbers: ");

for (let i = 1; i <= count; i++) {
    alert(a);
    let next = a + b;
    a = b;
    b = next;
}
alert("Q.5 Solved")
