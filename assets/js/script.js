/* computer selection logic */
function computerPlay() {
    const computerChoice = ['rock', 'paper', 'scissors'];
    let arrayIndex = Math.floor(Math.random() * 3);
    let computerSelection = computerChoice[arrayIndex];
    return computerSelection;
}

function rockPaperScissors(playerSelection, computerSelection) {
    playerSelection = 'rock';
    computerSelection = computerPlay();

    if(computerSelection === playerSelection) {
        alert('You have drawn, please try again!');
    } else if (computerSelection == 'paper') {
        alert('The computer won! Paper covers rock');
    } else {
        alert('You won! Rock beats scissors');
    }
}
