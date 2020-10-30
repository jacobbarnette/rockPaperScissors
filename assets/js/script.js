let playGameBtn = document.getElementById('playBtn');
let resetGameBtn = document.getElementById('resetBtn');
let playerRockBtn = document.getElementById('playerRock');
let playerPaperBtn = document.getElementById('playerPaper');
let playerScissorsBtn = document.getElementById('playerScissors');
let playerScoreBoard = document.getElementsByClassName('playerScoreBoard');
let computerScoreBoard = document.getElementsByClassName('computerScoreBoard');
let computerSelection;

let playerWon = 0;
let computerWon = 0;

playGameBtn.addEventListener('click', activateGame);
resetGameBtn.addEventListener('click', resetGame);

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
        alert('draw');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWon++
        pointScored(playerWon);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
       computerWon++
       computerScored(computerWon);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWon++
        pointScored(playerWon);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerWon++
        computerScored(computerWon);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWon++
        pointScored(playerWon);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerWon++
        computerScored(computerWon);
    }
}

function pointScored(playerWon, computerWon) {
    if(playerWon === 1) {   
        let playerWon = 0;
        playerScoreBoard[playerWon].classList.add('stars');
    } else if (playerWon >= 2) {
        playerScoreBoard[playerWon -1].classList.add('stars');
    } else if (playerWon === 5) {
        playerScoreBoard[playerWon -1].classList.add('stars');
    }
}

function computerScored(computerWon) {
    if (computerWon === 1) {
        let computerWon = 0;
        computerScoreBoard[computerWon].classList.add('stars');
    } else if (computerWon <= 4) {
        computerScoreBoard[computerWon -1].classList.add('stars');
    } else if (computerWon === 5) {
        computerScoreBoard[computerWon -1].classList.add('stars');
        alert('You won the game, Press reset to play again');
    }
}


function resetGame() {
    let i = -1;
  while(playerScoreBoard.length >0) {
      i++;
      if(playerScoreBoard[i].classList.contains('stars')) {
        playerScoreBoard[i].classList.remove('stars');
        computerScoreBoard[i].classList.remove('stars');
      } else if (computerScoreBoard[i].classList.contains('stars')) {
          computerScoreBoard[i].classList.remove('stars');
      }
    }
    resetGameWon()
}
