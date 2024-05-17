// Question 34
/* Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names
in a array, and then use a for loop to print the name of each pizza. 
• Modify your for loop to print a sentence using the name of the pizza instead of
printing just the name of the pizza. For each pizza you should have one line of output
containing a simple statement like I like pepperoni pizza. */

let myPizza = ["Pepperoni Pizza", "Cheese Pizza", "Vegiterian Pizza"]

for(let i=0; i < myPizza.length; i++){
    console.log(myPizza[i])
}


for(let i=0; i < myPizza.length; i++){
    console.log(` I like to eat ${myPizza[i]}`)
}

console.log("\n I really like different kinds of pizzas such as cheese pizza, pepperoni pizza and Vegiterian pizza. These are just a few examples of Pakistan’s biggest pizza flavours. Pakistani pizzas often offer a unique fusion of local and international flavours, making them a delicious and satisfying meal option.")