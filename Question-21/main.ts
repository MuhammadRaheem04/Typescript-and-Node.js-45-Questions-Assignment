// Question 21

/* They think of something you could store in a TypeScript Object. Write a program
that creates Objects containing these items. */

interface item {
    name: string
    age: number
    city: string
}
// creating three objects
let person1 = {
    name: "Muhammad Raheem" ,
    age: 23,
    city: "karachi"
}
let person2 = {
    name: "Ali Raza" ,
    age: 22,
    city: "Lahore"
}
let person3= {
    name: "Naveed Ahmed",
    age: 24,
    city: "Islamabad"
}
console.log(`person1 Name: ${person1.name} , Age: ${person1.age}, City: ${person1.city} `);
console.log(`person2 Name: ${person2.name} , Age: ${person2.age}, City: ${person2.city} `);
console.log(`person3 Name: ${person3.name} , Age: ${person3.age}, City: ${person3.city} `);