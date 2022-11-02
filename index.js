const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector("#results");
const userChoice = document.querySelector("#user-choice");
const compChoice = document.querySelector("#comp-choice");

var game = {
    0: 'rock',
    1: 'paper',
    2: 'scissors'
};

var tieCount = 0;

function playGame(rpc) {
    userChoice.innerHTML = "You chose: " + rpc;
    let comprpc = game[Math.floor(Math.random() * 3)];
    compChoice.innerHTML = "I chose: " + comprpc;
    if( rpc === comprpc ){
        console.log("It's a tie!!");
        results.innerHTML = "It's a tie!!";
        tieCount++;
        console.log(tieCount);
    } else if (rpc === 'rock'){
        tieCount = 0;
        if (comprpc === 'paper') {
            results.innerHTML = "You Lose!!";
            return;
        }
        results.innerHTML = "You Win!";
    } else if (rpc === 'paper'){
        tieCount = 0;
        if (comprpc === 'scissors') {
            results.innerHTML = "You Lose!!";
            return;
        }
        results.innerHTML = "You Win!";
    } else if (rpc === 'scissors'){
        tieCount = 0;
        if (comprpc === 'rock') {
            results.innerHTML = "You Lose!!";
            return;
        }
        results.innerHTML = "You Win!";
    }
}

function playRock(){
    playGame(game[0]);
}
function playPaper(){
    playGame(game[1]);
}
function playScissors(){
    playGame(game[2]);
}
if (tieCount === 100){
    alert("NONE SHALL WIN");
}

rockButton.addEventListener("click", playRock);
paperButton.addEventListener("click", playPaper);
scissorsButton.addEventListener("click", playScissors);