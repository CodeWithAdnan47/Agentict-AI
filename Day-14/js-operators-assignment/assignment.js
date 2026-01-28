// Part 1: Basic Arithmetic and Type Conversion

// Arithmetic Operations
console.log("Output of Arithmetic Operations: ")
console.log("1) ",11%3);
console.log("2) ",1 + "JS");
console.log("3) ",1 * "JS");
console.log("4) ",5 + true);
console.log("5) ",6 - false);
console.log("6) ",7 - false);
console.log("7) ", 1+2*3/4);
console.log("8) ", 8 + false);
console.log("9) ", true + true);

// Exponentiation

console.log("Output of Exponentiation Operations: ")

console.log("10) ", 7 ** 2);
console.log("11) ", 2 ** 3);

// String Operations

console.log("Output of String Operations: ")

console.log("12) ", "hello" + " " + "world");
console.log("13) ", "hello" * 10); 

// Type Conversion

console.log("Output of Type Conversion Operations: ")

console.log("14) ", true + false)
console.log("15) ", +true);
console.log("16) ", +"21");
console.log("17) ", +null);

// Part 2: Increment and Assignment Operations
console.log("Part2 Output: ")
let count = 46;
console.log("Initial Number: ",count)
console.log("1)count++ : ", count++);
console.log("2)++count : ", ++count);
console.log("3)count++ : ", count++);
console.log("4)++count : ", ++count);
console.log("5)count++ + 10 : ", count++ + 10);
console.log("6) ++count : ", ++count + 5);
console.log("7) count++ : ", count++);
console.log("8) count += 10 :", count += 10);
console.log("9) count *= 5 :", count *= 5);

// Part 3: Operator Precedence
console.log("Part3 Output: ")
console.log("1. ", 3 + 4 * 5);
console.log("2. ", (25 + 28) + 105);
console.log("3. ", 4 * 3 ** 2);

console.log("4. ", 4, 400 + 10);
console.log("5.", (4, 400) + 10);

console.log("6. ", 3 + "10" * 2);
console.log("7. ", 3 + 10 * "2");
console.log("8. ", "3" + 10 * 2);
console.log("9. ", 3 + 10 * 2);

console.log("10. ", 3 + (10 * 2));
console.log("11. ", (3 + 10) * 2);

console.log("12. ", 2 ** 3 ** 2);
console.log("13. ", 2 ** (3 ** 2));
console.log("14. ", (2 ** 3) ** 2);

console.log("15. ", +null + 10);
console.log("16. ", +"21" + (10, 20));
