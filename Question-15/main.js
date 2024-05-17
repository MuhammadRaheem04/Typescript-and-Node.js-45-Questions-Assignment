var Guest_List = ["Naveed", "Ali Raza", "Sajjad", "Mansoor", "Mughees"];
for (var i = 0; i < Guest_List.length; i++) {
    console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
}
var absent_Guest = "Sajjad";
var new_Guest = "Dr saleh";
Guest_List[2] = new_Guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
}
console.log(" Mr ".concat(absent_Guest, " will not come on dinner for tomarrow"));
