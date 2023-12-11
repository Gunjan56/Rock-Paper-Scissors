let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('#message');
let userScorePara = document.querySelector('#user-score');
let compScorePara = document.querySelector('#comp-score');

const genCompChoice = (comChoice) => {
    let options = ['rock', 'paper', 'scissors'];
    let rendomIdx = Math.floor(Math.random() * 3);
    return options[rendomIdx];
}

const drawGame = ()=> {
    msg.innerText = "Game was draw, Play again!"
}

const showWinner = (userWin, compChoice, userChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice} `
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose.${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "Red";
    }
}
const playGame = (userChoice, com) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true;
        }else if(userChoice === 'papar'){
            userWin = compChoice === 'scissors' ? false : true;
        }else{
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})