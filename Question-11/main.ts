// Question 11
/* Names: Store the names of a few of your friends in a array called names. Print
each person’s name by accessing each element in the list, one at a time. */

let friends: string[] = ["Raheem", "Izhar", "Aamir" , "Javed", "Irshad"]
// first we will print each person's name by using for loop
for (let i=0; i< friends.length; i++ ) {
    console.log(friends[i]);
}

// another method is acessing arrays by index:
// index of an array starts from 0.
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
console.log(friends[4]);