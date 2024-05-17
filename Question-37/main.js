function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "Polo T- Shirt"; }
    console.log("The size of the T-Shirt is ".concat(size, " and the label printed on it is ").concat(message, " "));
    // Or we can also print this message as follow.
    // console.log("The size of the T-Shirt is " + size + " and the label printed on it is " + message);
}
// call the function 
make_shirt(); // it will print size and message by default
make_shirt("medium"); // default message and medium size
make_shirt("small", " <Raheem/> "); // it will print small size and a message: "<Raheem/>" 
