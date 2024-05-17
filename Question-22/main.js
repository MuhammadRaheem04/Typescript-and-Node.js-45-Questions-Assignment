// Question 22
/* Intentional Error: If you haven’t received an array index error in one of your
programs yet, try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the
program. */
var months = ["january", "february", 'march', 'april', 'may', 'june'];
console.log(months[6]); // it shows an index error b/c index 6 in above array does not exist b/c index starts frm 0.
// Correction 
console.log(months[5]);
