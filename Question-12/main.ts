// Question 12
/* Greetings: Start with the array you used in Exercise 11, but instead of just printing
each person’s name, print a message to them. The text of each message should
be the same, but each message should be personalized with the person’s name. */

// startint fron excersise 11
let friends: string[] = ["Raheem", "Izhar", "Aamir" , "Javed", "Irshad"]
let message: string = " Kal University aaogy ";
// printing the same message to everyone in the array by using for loop 
for (let i=0; i< friends.length; i++ ) {
    console.log(message + friends[i]);
}