var Guest_List = ["Naveed", "Ali Raza", "Sajjad", "Mansoor", "Mughees"];
// for (let i=0; i< Guest_List.length; i++ ) {
//     console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
// } 
var absent_Guest = "Sajjad";
var new_Guest = "Dr saleh";
Guest_List[2] = new_Guest;
// for (let i=0; i< Guest_List.length; i++ ) {
//     console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
// }
//console.log(` Mr ${absent_Guest} will not come on dinner for tomarrow! `); 
// Question 16 starts from here
// console.log(" Hello everyone, As We have found a bigger dinner table so now we are inviting three more people ")
// Adding a new guest in the begining 
var new_Guest1 = "Sir Usama";
Guest_List.unshift(new_Guest1);
// adding a new guest in the middle of an array
var middle_Guest = "Sir Ameen";
Guest_List.splice(3, 0, middle_Guest);
// adding a new guest in the end of an array
var last_Guest = "Noman Ahmed";
Guest_List.push(last_Guest);
// for (let i=0; i< Guest_List.length; i++ ) {
//     console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
// }
console.log("\n Unfortunately we cannot manage new bigger table So we can invite only two people for dinner, sorry!");
while (Guest_List.length > 2) {
    var remove_Guest = Guest_List.pop();
    console.log("\n Sorry sir ".concat(remove_Guest, " we don't have much space so we cannot invite You on dinner "));
}
for (var i = 0; i < Guest_List.length; i++) {
    console.log(" \n Respected sir " + Guest_List[i] + "\n You are still invited on dinner tomarrow! \n Thank you");
}
Guest_List.splice(0, 2);
console.log(Guest_List);
