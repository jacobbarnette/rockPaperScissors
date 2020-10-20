let draw = 0;
let playerScore = 0;
let computerScore = 0;
let drawCount = document.getElementById('drawCount');
let playerScoreCount = document.getElementById('playerScoreCount');
let computerScoreCount = document.getElementById('computerScoreCount');




/* computer selection logic */
function computerPlay() {
    const computerChoice = ['rock', 'paper', 'scissors'];
    let arrayIndex = Math.floor(Math.random() * 3);
    let computerSelection = computerChoice[arrayIndex];
    return computerSelection;
}

/* rock paper scissors logic */
function rockPaperScissors(playerSelection, computerSelection) {
    playerSelection = prompt('Rock, Paper, or Scissors');
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

    if(playerSelection === computerSelection) {
        alert('The round has ended in a draw');
        draw++;
        drawCount.textContent = `Games Drawn: ${draw}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('Congrats! You won! Rock beats paper');
        playerScore++;
        playerScoreCount.textContent = `Player Rounds won: ${playerScore}`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('Sorry, you lost this round! Paper covers rock');
        computerScore++;
        computerScoreCount.textContent = `Computer Rounds won: ${computerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('Congrats! You won! Paper covers rock');
        playerScore++;
        playerScoreCount.textContent = `Player Rounds won: ${playerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('Sorry, you lost this round! Scissors cut paper');
        computerScore++;
        computerScoreCount.textContent = `Computer Rounds won: ${computerScore}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert('Congrats! You won! Scissors cuts paper');
        playerScore++;
        playerScoreCount.textContent = `Player Rounds won: ${playerScore}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('Sorry, you lost this round! Rock beats scissors');
        computerScore++;
        computerScoreCount.textContent = `Computer Rounds won: ${computerScore}`;
    }
}

/* run game to turn limit */
function game() {
    for(let i = 0; i < 5; i++) {
        rockPaperScissors();
        console.log(i);
    }
    console.log('You reached your turn limit!')
}