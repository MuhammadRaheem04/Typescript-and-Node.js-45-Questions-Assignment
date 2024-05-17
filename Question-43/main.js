// Question 43
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* Unchanged Magicians: Start with your work from Exercise 40. Call the function
make_great() with a copy of the array of magicians’ names. Because the original
array will be unchanged, return the new array and store it in a separate array. Call
show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
*/
var MagicianNames = ['Aslam', 'Akhtar', 'Arshad', 'Azhar'];
// Making copy of above array:
var MagicianNamesCopy = __spreadArray([], MagicianNames, true);
function show_magicians(greet) {
    var with_greeting = "";
    for (var _i = 0, MagicianNamesCopy_1 = MagicianNamesCopy; _i < MagicianNamesCopy_1.length; _i++) {
        var MagicianName = MagicianNamesCopy_1[_i];
        with_greeting += "".concat(greet, " ").concat(MagicianName, "\n");
    }
    return with_greeting;
}
var myGreetings = show_magicians("Hello");
var makeArray = myGreetings.split('\n');
console.log(myGreetings);
// printing the orignal Array
console.log(MagicianNames);
