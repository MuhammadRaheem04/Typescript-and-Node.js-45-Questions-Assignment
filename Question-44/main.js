// Question 44: 
/* Sandwiches: Write a function that accepts a array of items a person wants on a
sandwich. The function should have one parameter that collects as many items as
the function call provides, and it should print a summary of the sandwich that is
being ordered. Call the function three times, using a different number of
arguments each time. */
function mySandwitches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return " I want ".concat(items, " sandwitch");
}
var collection1 = mySandwitches("Ham", "cheese", "Tuna", "lettuce");
var collection2 = mySandwitches("Turkey", "Penut butter");
var collection3 = mySandwitches("Grilled chicken");
console.log(collection1);
console.log(collection2);
console.log(collection3);
