
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

// function to randomly return 'rock', 'paper', 'scissors'
function computerPlay(){
    let options = [rock, paper, scissors];
    return options[Math.floor(Math.random() * options.length)];
}

// console.log(computerPlay());

// takes two parameters and return the winner as string
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    switch(playerSelection){
        case rock:
            if(computerSelection == rock) {
                console.log('Draw! Both selected Rock');
                return 0;
            } else if (computerSelection == paper) {
                console.log('You lose! Paper beats Rock');
                return -1;
            } else {
                console.log('You win! Rock beats Scissors');
                return 1;
            }
        case paper:
            if(computerSelection == rock) {
                console.log('You win! Paper beats Rock');
                return 1;
            } else if (computerSelection == paper) {
                console.log('Draw! Both selected Paper');
                return 0;
            } else {
                console.log('You lose! Scissors beats Paper');
                return -1;
            }
        case scissors:
            if(computerSelection == rock) {
                console.log('You lose! Rock beats Scissors');
                return -1;
            } else if (computerSelection == paper) {
                console.log('You win! Scissors beats Paper');
                return 1;
            } else {
                console.log('Draw! Both selected Scissors');
                return 0;
            }
    }
}

// const playerSelection = rock;
// const computerSelection = computerPlay();
// console.log("computer selection -> " + computerSelection)
// console.log(playRound(playerSelection, computerSelection));

function game(){
    let wins = 0;
    let draws = 0;
    let losses = 0;
    for(let i=0; i<5; i++){
        playerInput = prompt("Choose between rock, paper and scissors");
        let roundResult = playRound(playerInput, computerPlay());
        if (roundResult == 0){
            draws++;
        } else if (roundResult == 1){
            wins++;
        } else {
            losses++;
        }
    }
    console.log(`wins | draws | losses = ${wins} | ${draws} | ${losses}`);
}

game();
