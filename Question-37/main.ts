// Question 37
/* Large Shirts: Modify the make_shirt() function so that shirts are large by default
with a message that reads I love TypeScript. Make a large shirt and a medium
shirt with the default message, and a shirt of any size with a different message. */

function make_shirt(size: string= "large" , message: string= "Polo T- Shirt" ) {

     console.log(`The size of the T-Shirt is ${size} and the label printed on it is ${message} `);
    
    // Or we can also print this message as follow.
    // console.log("The size of the T-Shirt is " + size + " and the label printed on it is " + message);
    }
    // call the function 
    make_shirt();  // it will print size and message by default
    make_shirt("medium"); // default message and medium size
    make_shirt("small" , " <Raheem/> ") // it will print small size and a message: "<Raheem/>" 