// Question 41 
// Magicians: Make a array of magician’s names. Pass the array to a function called
// show_magicians(), which prints the name of each magician in the array.
var MagicianNames = ['Aslam', 'Akhtar', 'Arshad', 'Azhar'];
function show_magicians() {
    for (var _i = 0, MagicianNames_1 = MagicianNames; _i < MagicianNames_1.length; _i++) {
        var MagicianName = MagicianNames_1[_i];
        console.log(MagicianName);
    }
}
show_magicians();
