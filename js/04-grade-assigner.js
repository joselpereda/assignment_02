//Collect the a number between 1 and 100 from the user. 
let userNumber = Number(prompt("Enter a number beteen 1 and 100:"));

// If the score is between 60 and 69, write out “You received a D” into the console.
// If the score is between 70 and 79, write out “You received a C” into the console.
// If the score is between 80 and 89, write out “You received a B” into the console.
// If the score is between 90 and 100, write out “You received an A” into the console.
// If the score is less than 60, write out “You received an F” into the console.
if (userNumber >= 1 && userNumber <= 100) {
    if (userNumber >= 60 && userNumber <= 69) {
        document.write ("You received a D.");
    } else if (userNumber >= 70 && userNumber <= 79) {
        document.write ("You received a C.");
    } else if (userNumber >= 80 && userNumber <= 89) {
        document.write ("You received a B.");
    } else if (userNumber >= 90 && userNumber <= 100) {
        document.write ("You received a A!");
    } else if (userNumber <60) {
        document.write ("You received an F.");
    }

//If number input is not between 1 and 100, inform user entry is not valid
} else {
    document.write("Invalid input. Number must be between 1 and 100")
}
