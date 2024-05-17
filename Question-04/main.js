// Question 04
/* Famous Quote: Find a quote from a famous person you admire. Print the quote
and the name of its author.
Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything
new."
*/
var quote = "A person who never made a mistake never tried anything new.";
var Author = "albert Einstein";
// using template literals 
console.log("".concat(Author, " once said, \"").concat(quote, "\""));
// or we can also do this by string concatination method
console.log(Author, " once said, ", '"', quote, '"');
