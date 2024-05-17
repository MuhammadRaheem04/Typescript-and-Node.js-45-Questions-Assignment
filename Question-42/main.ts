// Question 42

/* Great Magicians: Start with a copy of your program from Exercise 39. Write a
function called make_great() that modifies the array of magicians by adding the
phrase the Great to each magician’s name. Call show_magicians() to see that the
list has actually been modified.
*/
let MagicianNames: string[] = ['Aslam', 'Akhtar', 'Arshad', 'Azhar']

function make_greet(greet: string) {
    for(let MagicianName of MagicianNames){
         console.log(greet , MagicianName);
   }
 } 
 make_greet("Hello, How are you Mr.");
