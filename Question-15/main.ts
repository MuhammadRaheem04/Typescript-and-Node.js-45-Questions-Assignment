// Question 15

/* Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite. 
• Start with your program from Exercise 14. Add a print statement at the end of your
program stating the name of the guest who can’t make it. 
• Modify your list, replacing the name of the guest who can’t make it with the name of
the new person you are inviting. 
• Print a second set of invitation messages, one for each person who is still in your list. */

// starting from Question 14:
let Guest_List: string[] = ["Naveed", "Ali Raza", "Sajjad" , "Mansoor", "Mughees"]
for (let i=0; i< Guest_List.length; i++ ) {
    console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
}
let absent_Guest = "Sajjad" ;
let new_Guest = "Dr saleh"; 
Guest_List[2] = new_Guest;
for (let i=0; i< Guest_List.length; i++ ) {
    console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
}
console.log(` Mr ${absent_Guest} will not come on dinner for tomarrow! `);