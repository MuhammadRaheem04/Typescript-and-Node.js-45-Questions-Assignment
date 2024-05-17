// Question 04
/* Famous Quote: Find a quote from a famous person you admire. Print the quote
and the name of its author. 
Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything
new."
*/

let quote: string = "A person who never made a mistake never tried anything new.";
let Author: string = "albert Einstein";
// using template literals 
console.log(`${Author} once said, "${quote}"`); // this is an easy and best way to print a message.

// or we can also do this by string concatination method
console.log(Author,  " once said, ", '"',quote,'"');