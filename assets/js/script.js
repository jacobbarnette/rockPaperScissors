let playGameBtn = document.getElementById('playBtn');
let resetGameBtn = document.getElementById('resetBtn');
let playerRockBtn = document.getElementById('playerRock');
let playerPaperBtn = document.getElementById('playerPaper');
let playerScissorsBtn = document.getElementById('playerScissors');
let playerScoreBoard = document.getElementsByClassName('playerScoreBoard');
let computerSelection;

let playerWon = 0;
let computerWon = 0;

playGameBtn.addEventListener('click', activateGame);

function activateGame() {
    playerRockBtn.addEventListener('click', function() {
        playerSelection = 'rock';
        rockPaperScissors(playerSelection, computerSelection);
    });
    
    playerPaperBtn.addEventListener('click', function() {
        playerSelection = 'paper';
        rockPaperScissors(playerSelection, computerSelection);
    });
    
    playerScissorsBtn.addEventListener('click', function() {
        playerSelection = 'scissors';
        rockPaperScissors(playerSelection, computerSelection);
    });
}

    
/* computer selection logic */
function computerPlay() {
    const computerChoice = ['rock', 'paper', 'scissors'];
    let arrayIndex = Math.floor(Math.random() * 3);
    let computerSelection = computerChoice[arrayIndex];
    return computerSelection;
}

/* rock paper scissors logic */
function rockPaperScissors(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    if(playerSelection === computerSelection) {
        alert('The round has ended in a draw');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('Congrats! You won! Rock beats paper'); 
        playerWon++
        pointScored(playerWon);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('Sorry, you lost this round! Paper covers rock');   
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('Congrats! You won! Paper covers rock'); 
        playerWon++
        pointScored(playerWon);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('Sorry, you lost this round! Scissors cut paper');   
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert('Congrats! You won! Scissors cuts paper');  
        playerWon++
        pointScored(playerWon);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('Sorry, you lost this round! Rock beats scissors');
    }
}

function pointScored(playerWon) {
    if(playerWon === 1) {
        let playerWon = 0;
        console.log(playerWon);
        playerScoreBoard[playerWon].classList.add('stars');
    } else {
        console.log(playerWon);
        playerScoreBoard[playerWon -1].classList.add('stars');
    }
    // if(playerWon === 1) {
    //     console.log('hi');
    //     playerScoreBoard[0].classList.add('stars');
    // } else if (scoreBoardDown) {
    //     playerScoreBoard[scoreBoardDown].classList.add('stars');
    // }
}