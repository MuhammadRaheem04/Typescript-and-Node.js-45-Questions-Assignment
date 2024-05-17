var Guest_List = ["Naveed", "Ali Raza", "Sajjad", "Mansoor", "Mughees"];
// for (let i=0; i< Guest_List.length; i++ ) {
//     console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
// } 
var absent_Guest = "Sajjad";
var new_Guest = "Dr saleh";
Guest_List[2] = new_Guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
}
console.log(" Mr ".concat(absent_Guest, " will not come on dinner for tomarrow! "));
// Question 16 starts from here
console.log(" Hello everyone, As We have found a bigger dinner table so now we are inviting three more people ");
// Adding a new guest in the begining 
var new_Guest1 = "Sir Usama";
Guest_List.unshift(new_Guest1);
// adding a new guest in the middle of an array
var middle_Guest = "Sir Ameen";
Guest_List.splice(3, 0, middle_Guest);
// adding a new guest in the end of an array
var last_Guest = "Noman Ahmed";
Guest_List.push(last_Guest);
for (var i = 0; i < Guest_List.length; i++) {
    console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
}
