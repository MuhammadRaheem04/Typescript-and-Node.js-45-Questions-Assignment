// Question 14

/* Guest List: If you could invite anyone, living or deceased, to dinner, who would
you invite? Make a list that includes at least three people you’d like to invite to
dinner. Then use your list to print a message to each person, inviting them to
dinner. */

let Guest_List: string[] = ["Naveed", "Ali Raza", "Sajjad" , "Mansoor", "Mughees"]
// Then use your list to print a message to each person, inviting them to dinner.
for (let i=0; i< Guest_List.length; i++ ) {
    console.log(" Respected sir " + Guest_List[i] + "\n I am inviting you on dinner tomarrow , I hope you will accept my invitation! \n Thank you");
}
// I have created here app.ts file and main.js file to import this file in Question 19 easily.
export{Guest_List}