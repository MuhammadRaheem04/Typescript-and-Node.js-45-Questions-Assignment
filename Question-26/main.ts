// Question 26 Alien Colors #2 

/* Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain. 
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien. 
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else
block. */

// First version of program
let alien_colour: string = "green";
if(alien_colour == "green"){
    console.log("the player had earned 5 points for shooting the alien");
}
else{
    console.log("the player has earned just 10 points")
}

// 2nd Version of program
alien_colour = "red";
if(alien_colour == "green"){
    console.log("the player had earned 5 points for shooting the alien");
}
else{
    console.log("the player has earned just 10 points")
}