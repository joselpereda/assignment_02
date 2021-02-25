//Set it equal to a random number. 
let randomNum = Math.round(Math.random());

//Prompt user to select heads or tails
let choice = prompt("Chose heads or tails:");

// Use a conditional to check the result of the coin flip. If it’s less than a certain number (75), it will be heads. If it’s greater than a certain number, it will be tails. 
// If the result is heads and the user selects heads, display the following message within an alert: 
// The flip was heads and you chose heads...you win!
// If the result is heads and the user selects tails, display the following message within an alert: 
// The flip was heads but you chose tails...you lose!
// If the result is tails and the user selects heads, display the following message within an alert: 
// The flip was tails but you chose heads...you lose!
// If the result is tails and the user selects tails, display the following message within an alert: 
// The flip was tails and you chose tails...you win!
if (randomNum < 75) {
    if (choice === "heads" || choice === "Heads") {
        document.write("The flip was heads and you chose heads...you win!");
    } else if (choice === "tails" || choice === "Tails") {
        document.write("The flip was heads but you chose tails...you lose!");
    }
} else if (randomNum >= 75) {
    if (choice === "heads" || choice === "Heads") {
        document.write("The flip was tails but you chose heads...you lose!"); 
    } else if (choice === "tails" || choice === "Tails") {
        document.write("The flip was tails and you chose tails...you win!"); 
    }
}


