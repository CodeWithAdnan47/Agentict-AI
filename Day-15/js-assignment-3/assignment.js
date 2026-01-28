// Q1 (Spread Operator): Merge and Update Cart

const cart = ["Shoes", "T-Shirt"];
const newItems = ["Cap", "Socks"];

const updatedCart = ["Wallet", ...cart, ...newItems];

console.log(updatedCart);

//Q2 (Spread Operator): Copy Object + Add Discount

const product = {
    name: "Laptop",
    price: 60000
};

const discountedProduct = {
    ...product,
    discount: 10,
    price: 54000
};

console.log("Original Product:", product);
console.log("Discounted Product:", discountedProduct);

// Q3 (Destructuring): Extract Values from an Object

const user = {
    id: 101,
    name: "Chandra",
    city: "Hyderabad",
    skills: ["JS", "React", "Node"]
};

const { name, city } = user;

const [skill1, skill2] = user.skills;

console.log(`${name} lives in ${city} and knows ${skill1} and ${skill2}`);

//Q4 (Destructuring + Function): Student Report

const students = [
    { name: "Akhil", marks: [80, 75, 90] },
    { name: "Priya", marks: [60, 70, 65] }
];

function stdAvg(students) {
    for (const { name, marks } of students) {
    let total = 0;

    for (const mark of marks) {
        total += mark;
    }

    let average = total / marks.length;
    console.log(`${name} average: ${average}`);
    }
}
stdAvg(students);

// Q5 (Modules in JS): Create and Use a Utility Module

import { add, multiply } from "./mathUtils.js";

console.log("Sum of 12 and 8:", add(12, 8));
console.log("Product of 5 and 6:", multiply(5, 6));