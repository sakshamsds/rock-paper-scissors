
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

// function to randomly return 'rock', 'paper', 'scissors'
function computerPlay(){
    let options = [rock, paper, scissors];
    return options[Math.floor(Math.random() * options.length)];
}

let count = 0;
win = 0;
lose = 0;
draw = 0;

// takes two parameters and return the winner as string
function playRound(playerSelection, computerSelection){
    count++;

    let output;
    switch(playerSelection){
        case rock:
            if(computerSelection == rock) {
                output = 'Draw! Both selected Rock';
            } else if (computerSelection == paper) {
                output = 'You lose! Paper beats Rock';
            } else {
                output = 'You win! Rock beats Scissors';
            }
            break;
        case paper:
            if(computerSelection == rock) {
                output = 'You win! Paper beats Rock';
            } else if (computerSelection == paper) {
                output = 'Draw! Both selected Paper';
            } else {
                output = 'You lose! Scissors beats Paper';
            }
            break;
        case scissors:
            if(computerSelection == rock) {
                output = 'You lose! Rock beats Scissors';
            } else if (computerSelection == paper) {
                output = 'You win! Scissors beats Paper';
            } else {
                output = 'Draw! Both selected Scissors';
            }
            break;
    }

    printResult(output);
    addHistoryDiv();
    updateScore(output);
    alertAfterFiveRounds();
}

function printResult(output){
    const result = document.querySelector('.result');
    result.textContent = output;
}

function addHistoryDiv(){
    const result = document.querySelector('.result');
    const clone = result.cloneNode(true);

    const history = document.querySelector('.history');
    history.appendChild(clone);

    let childCount = history.childElementCount;
    if(childCount>5){
        history.removeChild(history.firstChild);
    }
}

function updateScore(output){
    if (output.includes("win")){
        win++;
    } else if (output.includes("lose")) {
        lose++;
    } else{
        draw++;
    }
}

function alertAfterFiveRounds(){
    if(count%5===0){
        score = `win: ${win} | draw: ${draw} | lose: ${lose} `;
        let alertString;
        if (win>lose) {
            alertString = "You Win!!\n" + score;
        } else if (win===lose){
            alertString = "It's a draw\n" + score;
        } else {
            alertString = "You Lose!!\n" + score;
        }

        setTimeout(function() {
            alert(alertString);
        }, 0);

        //reset all;
        win = 0;
        lose = 0;
        draw = 0;
        count = 0;
    }
}

const inputs = document.querySelectorAll('input');

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('new-input');
}

inputs.forEach(input => {
    input.addEventListener('click', () => {
        input.classList.add('new-input');
        playRound(input.name, computerPlay());
    });

    input.addEventListener('transitionend', removeTransition);
})