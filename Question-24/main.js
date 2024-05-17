// question 24
// Conditional tests: 
var Name = "Raheem";
// Test equility and enequility with string
// Test 01 (True)
console.log("Is name == 'Raheem'? I predict true. ");
console.log(Name == 'Raheem');
// Teat 02 (False)
console.log("Is name == 'Rahim'? I predict False. ");
console.log(Name == 'Rahim');
// Teat 03 (True)
console.log("Is name != 'Rahim'? I predict True. ");
console.log(Name != 'Rahim');
// Teat 04 (False)
console.log("Is name != 'Raheem'? I predict False. ");
console.log(Name != 'Raheem');
// LowerCase Function test
// Teat 05 (True)
console.log("Is name.toLowerCase == 'raheem'? I predict True. ");
console.log(Name.toLowerCase() == 'raheem');
// Test 06 (False)
console.log("Is name.toLowerCase === 'Raheem'? I predict False. ");
console.log(Name === Name.toLowerCase());
// Numerical tests
var a = 6;
var b = 7;
// Numbers equality and inequality tests:
// Test 07 
console.log(a == b); // false
console.log(a != b); // true
console.log(a === b); // false
console.log(a !== b); // true
// Greater than and Less than tests:
// Test 08
console.log(a > b); // false
console.log(a < b); // true
// Greater than or equal to and Less than or equal to tests:
// Test 09:
console.log(a >= b); // false
console.log(a <= b); // true 
// Test 10
// Logical operator: And (&&)
var c = 5;
var d = 6;
console.log(c < d && c == 5); // true + true = true
console.log(c < d && c == 6); // true + false = false
console.log(c > d && c == 6); // false + false = false
console.log(d < c && c != 6); // false + true = false 
// Test 11 
// Logical operator: Or (||)
console.log(c < d || c == 5); // true + true = true
console.log(c < d || c == 6); // true + false = true
console.log(c > d || c == 6); // false + false = false
console.log(d < c || c != 6); // false + true = true 
// Test 12
// combination of and && , or || operator
console.log(c < d || c != 5 && d != 6);
console.log(c < d || c == 5 && d != 6); // in this case of combination The entire expression is evaluated using the OR operator (||).
console.log(c > d || c != 5 && d == 6);
console.log((c < d || c != 5) && d != 6); // first parenthesis () will be solved
