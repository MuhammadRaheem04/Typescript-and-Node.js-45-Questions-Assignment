// Question: 18 

// Think of at least five places in the world you’d like to visit. • Store the locations in a array.
// Make sure the array is not in alphabetical order.
let places: string[] = ["NewYork" , "London", "Tokiyo", "Lahore","Dehli" ]
// print the array in the orignal order
console.log( "Orignal order: " , places);

// print the array in alphabetical order without modifying the orignal array
console.log("Alphabetical order: " , [...places].sort());

// show that your array is still in it's orignal order
console.log("orignal order after sorting: ", places );

// reverse alphabetical order without changing order of orignal list
console.log("reverse alphabetical order: " , [...places].sort().reverse());

// show that your array is still in it's orignal order
console.log("orignal order after reverse sorting: ", places );

// reverse the order of the list
places.reverse();
console.log("reversed order: " , places);

// reverse the order again to get back orignal order
places.reverse();
console.log("back to orignal order: ", places);

// sort the array in alphabetical order
places.sort();
console.log("sorted in alphabetical order: ", places);

// sort the array in reverse alphabetical order
places.sort((a,b) => b.localeCompare(a))
console.log("sorted in reverse alphabetical order: ", places);