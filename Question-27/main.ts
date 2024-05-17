// Question 27
// Alien_Colors #3

/* Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points. 
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points. 
• Write three versions of this program, making sure each message is printed for the
appropriate color alien. */

// Version 01:
let alien_colour: string = "green";
if(alien_colour == "green"){
    console.log("The player had earned 5 points");
}
else if (alien_colour == "yellow" ) {
    console.log("The player had earned 10 points");
}

 else if(alien_colour == "red"){
    console.log("The player had earned 15 points");
}

else{
    console.log("Plz select the right color")
}


// Version 02:
alien_colour = "yellow";
if(alien_colour == "green"){
    console.log("The player had earned 5 points");
}
else if (alien_colour == "yellow" ) {
    console.log("The player had earned 10 points");
}

 else if(alien_colour == "red"){
    console.log("The player had earned 15 points");
}

else{
    console.log("Plz select the right color")
}


// Version 03:
alien_colour = "red";
if(alien_colour == "green"){
    console.log("The player had earned 5 points");
}
else if (alien_colour == "yellow" ) {
    console.log("The player had earned 10 points");
}

 else if(alien_colour == "red"){
    console.log("The player had earned 15 points");
}

else{
    console.log("Plz select the right color")
}
