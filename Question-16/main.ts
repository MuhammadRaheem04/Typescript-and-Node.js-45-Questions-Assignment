// Question 16 

/* More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner. 
• Start with your program from Exercise 15. Add a print statement to the end of your
program informing people that you found a bigger dinner table. 
• Add one new guest to the beginning of your array. 
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in
your list. */ 



let Guest_List: string[] = ["Naveed", "Ali Raza", "Sajjad" , "Mansoor", "Mughees"]

// for (let i=0; i< Guest_List.length; i++ ) {
//     console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
// } 
let absent_Guest = "Sajjad" ;
let new_Guest = "Dr saleh"; 
Guest_List[2] = new_Guest;
for (let i=0; i< Guest_List.length; i++ ) {
    console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
}
console.log(` Mr ${absent_Guest} will not come on dinner for tomarrow! `); 

// Question 16 starts from here

console.log(" Hello everyone, As We have found a bigger dinner table so now we are inviting three more people ")
// Adding a new guest in the begining 
let new_Guest1: string = "Sir Usama";
Guest_List.unshift(new_Guest1);
// adding a new guest in the middle of an array
let middle_Guest: string = "Sir Ameen";
Guest_List.splice(3, 0, middle_Guest);
// adding a new guest in the end of an array
let last_Guest: string = "Noman Ahmed";
Guest_List.push(last_Guest);

for (let i=0; i< Guest_List.length; i++ ) {
    console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
}