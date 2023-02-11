function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return ["Tie!", null]
    }

    switch(playerSelection) {
        case "rock":
            return (computerSelection === "scissors" ? ["You Win! Rock beats Scissors!", true]  : ["You Lose! Paper beats Rock!", false]);
        case "paper":
            return (computerSelection === "rock" ? ["You Win! Paper beats Rock!", true]  : ["You Lose! Scissors beats Paper!", false]);
        case "scissors":
            return (computerSelection === "paper" ? ["You Win! Scissors beats Paper!", true]  : ["You Lose! Rock beats Scissors!", false]);
    }
}

function game() {

    let computerWins = 0;
    let playerWins = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("Round " + (i+1) + ": Enter choice (rock, paper, scissors):");

        while (["rock", "paper", "scissors"].includes(playerSelection) === false) {
            playerSelection = prompt("Try again. Please enter either rock, paper, or scissors.");
        }

        let outcome = playRound(playerSelection.toLowerCase(), getComputerChoice());
        
        if (outcome[1] === true) {
            playerWins++;
        }
        else if (outcome[1] === false) {
            computerWins++;
        }
        else {
            ties++;
        }
    }

    if (playerWins > computerWins) {
        console.log("You Win!");
    }
    else if (playerWins < computerWins) {
        console.log("You Lose!");
    }
    else {
        console.log("You Tied!");
    }

    console.log("Player wins: " + playerWins);
    console.log("Computer wins: " + computerWins);
    console.log("Ties: " + ties);
}

game();