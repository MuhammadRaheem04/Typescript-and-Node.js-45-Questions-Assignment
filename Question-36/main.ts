// Question 36: T-Shirt:

/*Write a function called make_shirt() that accepts a size and the text of a
message that should be printed on the shirt. */ 

function make_shirt(size: number, message: string) {
// The function should print a sentence summarizing the size of the shirt and the message printed on it.
 console.log(`The size of the T-Shirt is ${size} and the label printed on it is ${message} `);

// Or we can also print this message as follow.
 console.log("The size of the T-Shirt is " + size + " and the label printed on it is" + message);
}
// call the function 
make_shirt(32, " Polo T-Shirt"); 