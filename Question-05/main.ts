// Question 05
/* Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name
in a variable called famous_person. Then compose your message and store it in a
new variable called message. Print your message. */

let quote: string = "A person who never made a mistake never tried anything new.";
let famous_person: string = "Albert Einstein";
// storing the message in new varriable called message.
let message = `${famous_person} once said, "${quote}"`;
// printing the message
console.log(message);