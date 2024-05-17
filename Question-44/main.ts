// Question 44: 

/* Sandwiches: Write a function that accepts a array of items a person wants on a
sandwich. The function should have one parameter that collects as many items as
the function call provides, and it should print a summary of the sandwich that is
being ordered. Call the function three times, using a different number of
arguments each time. */

function mySandwitches(...items : string[]) {
return ` I want ${items} sandwitch`;
}

let collection1 = mySandwitches("Ham", "cheese", "Tuna", "lettuce");
let collection2= mySandwitches("Turkey", "Penut butter", );
let collection3 = mySandwitches("Grilled chicken");

console.log(collection1);
console.log(collection2);
console.log(collection3);