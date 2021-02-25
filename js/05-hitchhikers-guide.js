let readToPlayGame = prompt("Are you ready to play the game (yes, no)?");
let chosenDirection;
let userGameRating;

if (readToPlayGame === "yes" || readToPlayGame === "Yes") {
    //Alert the user of circumstance
    alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.");
    
    //Prompt user for direction
    chosenDirection = prompt("Which direction would you like to head (please enter forward, left, or right)?");

    //Evaluate direction chosen by user and inform him/her accordingly
    switch (chosenDirection) {
        case "foward":
            alert("Alert, You walk 100 yards and safely make your way out of the cave.");
            break;
        case "left":
            alert("Alert, Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
            break;
        case "right":
            alert("Alert, You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
            break; 
        default:
            alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
    }

} else if (readToPlayGame === "no" || readToPlayGame === "No") {
    document.write ("Thank you! Play again some time in the near future.");
} else {
    document.write ("Thank you! Play again some time in the near future.");
}

//The game is now over. Ask the user to rate the game between 1 and 10. If the user enters a number not between 1 and 10, thank the user for playing and end the game, If the user enters a number between 6 and 10, thank the user and ask them to play again. If the user enters a number between 1 and 5, thank the user and tell them that you are working hard to improve the game. 
userGameRating = prompt("Rate the game with a number between 1 and 10.")

if (userGameRating >= 1 && userGameRating <= 10) {
    if (userGameRating >= 6 && userGameRating <= 10) {
        document.write ("Big Thank you!");
    } else if (userGameRating >= 1 && userGameRating <= 5) {
        document.write ("Thank you. We are working hard to improve the game. Your feedback is greatly appreciated.");
    }

//If number input is not between 1 and 100, inform user entry is not valid
} else {
    document.write("Invalid input. Number must be between 1 and 100")
}
