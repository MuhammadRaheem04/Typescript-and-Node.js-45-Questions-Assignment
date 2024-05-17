// Question 02 
/*
Personal Message: Store a person’s name in a variable, and print a message to
that person. Your message should be simple, such as, “Hello Eric, would you like
to learn some Python today?” */
var personName = "Eric";
// Printing message using Template Literals:
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
// we can do this by using string concatination method:
console.log("Hello " + personName + " would you like to learn some Python today?");
// or we can also concatinate as follows
console.log("Hello ", personName, " would you like to learn some Python today?");
