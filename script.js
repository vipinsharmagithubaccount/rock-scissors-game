let userData = 0;
let compData = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = `you win your ${userChoice} beats ${compChoice}!`;
        console.log("you win!");
        userScore.innerText = ++userData;
        msg.style.backgroundColor = "green";
    }else{
        msg.innerText = `you lose ${compChoice} beats your ${userChoice}!`;;
        msg.style.backgroundColor = "red";
        compScore.innerText = ++compData; 
        console.log("you lose!");
    }
}

const drawGame = () => {
    console.log("game Draw");
    msg.innerText = "draw Game..play again";
    msg.style.backgroundColor = "blue";
}


const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    // genrate computer choice 
    const compChoice  = genCompChoice();
    console.log("comp choice", compChoice);    

    if(userChoice === compChoice){
        // draw game 
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors , paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});