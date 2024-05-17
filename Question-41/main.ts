// Question 41 
// Magicians: Make a array of magician’s names. Pass the array to a function called
// show_magicians(), which prints the name of each magician in the array.

let MagicianNames: string[] = ['Aslam', 'Akhtar', 'Arshad', 'Azhar']

function show_magicians() {
    for(let MagicianName of MagicianNames){
        console.log(MagicianName);
    }
}
show_magicians();