// Question 39 
/*City Names: Write a function called city_country() that takes in the name of a city
and its country. The function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value that’s
returned. */
function city_country(nameofCity, Country) {
    return "".concat(nameofCity, " , ").concat(Country, " ");
}
var city1 = city_country("Karachi", "Pakistan");
var city2 = city_country("Dehli", "Indea");
var city3 = city_country("Tokyo", "Japan");
var city4 = city_country("London", "United Kingdom");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
