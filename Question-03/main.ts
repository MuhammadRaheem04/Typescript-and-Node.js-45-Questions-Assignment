// Question 03
/*
Name Cases: Store a person’s name in a variable, and then print that person’s
name in lowercase, uppercase, and titlecase. */

let personName: string = "Raheem";

// lowercase 
console.log("lowercase:" , personName.toLowerCase());

// uppercase 
console.log("uppercase:" , personName.toUpperCase());

// titlecase
console.log("titlecase:" , personName.replace(/\bw/g,c => c.toUpperCase()));