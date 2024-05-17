// Question: 18 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["NewYork", "London", "Tokiyo", "Lahore", "Dehli"];
// print the array in the orignal order
console.log("Orignal order: ", places);
// print the array in alphabetical order without modifying the orignal array
console.log("Alphabetical order: ", __spreadArray([], places, true).sort());
// show that your array is still in it's orignal order
console.log("orignal order after sorting: ", places);
// reverse alphabetical order without changing order of orignal list
console.log("reverse alphabetical order: ", __spreadArray([], places, true).sort().reverse());
// show that your array is still in it's orignal order
console.log("orignal order after reverse sorting: ", places);
// reverse the order of the list
places.reverse();
console.log("reversed order: ", places);
// reverse the order again to get back orignal order
places.reverse();
console.log("back to orignal order: ", places);
// sort the array in alphabetical order
places.sort();
console.log("sorted in alphabetical order: ", places);
// sort the array in reverse alphabetical order
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order: ", places);
