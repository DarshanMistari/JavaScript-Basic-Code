/* Create a game where you start with any random game number. Ask the user to keep
 guessing the game number until the user enters correct value.*/

 let gameNumber = 15;
 let userNumber =  prompt("Guess the game Number 2 Digit :");

 while(userNumber != gameNumber)
    {
        userNumber =  prompt("You Entered the Wrong Numbers. Guess Again :");
    }

    console.log("Congratulation, You are Entered the Right Number.");