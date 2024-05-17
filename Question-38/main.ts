// Question 38

// Write a function called describe_city() that accepts the name of a city and its country.
// Give the parameter for the country a default value.
function describe_city( nameofCity: string, country: string = "Pakistan"){

// The function should print a simple sentence, such as Karachi is in Pakistan.
    console.log(`The city ${nameofCity} is in ${country}`);
}

// call the function for different cities 
describe_city("Karachi");
describe_city("Hyderabad");
describe_city("Lahore");
describe_city("Islamabad");
describe_city("London", "UK"); // A city which is not in the default country
