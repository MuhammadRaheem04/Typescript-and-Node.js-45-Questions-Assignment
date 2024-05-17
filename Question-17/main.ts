// Question 17

// starting from Question 16:
let Guest_List: string[] = ["Naveed", "Ali Raza", "Sajjad" , "Mansoor", "Mughees"]

// for (let i=0; i< Guest_List.length; i++ ) {
//     console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
// } 
let absent_Guest = "Sajjad" ;
let new_Guest = "Dr saleh"; 
Guest_List[2] = new_Guest;
// for (let i=0; i< Guest_List.length; i++ ) {
//     console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
// }
//console.log(` Mr ${absent_Guest} will not come on dinner for tomarrow! `); 

// Question 16 starts from here

// console.log(" Hello everyone, As We have found a bigger dinner table so now we are inviting three more people ")
// Adding a new guest in the begining 
let new_Guest1: string = "Sir Usama";
Guest_List.unshift(new_Guest1);
// adding a new guest in the middle of an array
let middle_Guest: string = "Sir Ameen";
Guest_List.splice(3, 0, middle_Guest);
// adding a new guest in the end of an array
let last_Guest: string = "Noman Ahmed";
Guest_List.push(last_Guest);

// for (let i=0; i< Guest_List.length; i++ ) {
//     console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
// }

// Question 17 starts from here

console.log("\n Unfortunately we cannot manage new bigger table So we can invite only two people for dinner, sorry!")
while (Guest_List.length>2){
    let remove_Guest = Guest_List.pop();
    console.log(`\n Sorry sir ${remove_Guest} we don't have much space so we cannot invite You on dinner `)
}
for (let i=0; i< Guest_List.length; i++ ) {
 console.log(" \n Respected sir " + Guest_List[i] + "\n You are still invited on dinner tomarrow! \n Thank you");
 }
 Guest_List.splice(0, 2); // this will remove last 2 elements
 console.log(Guest_List); 