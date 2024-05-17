// Question 43

/* Unchanged Magicians: Start with your work from Exercise 40. Call the function
make_great() with a copy of the array of magicians’ names. Because the original
array will be unchanged, return the new array and store it in a separate array. Call
show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
*/

// starting from Question 42:
let MagicianNames: string[] = ['Aslam', 'Akhtar', 'Arshad', 'Azhar']
// Making copy of above array:
let MagicianNamesCopy = [...MagicianNames];

function show_magicians(greet: string) {
    let with_greeting = "";
    for(let MagicianName of MagicianNamesCopy){
         with_greeting += `${greet} ${MagicianName}\n`;
   }
   return with_greeting 
 } 
 let myGreetings = show_magicians("Hello");
 let makeArray = myGreetings.split('\n');
 console.log(myGreetings);

 // printing the orignal Array
 console.log(MagicianNames);