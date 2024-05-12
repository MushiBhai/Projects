//Game Variables & HTML Attributes:
let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msgContainer");
let msgPara = document.querySelector("#msgPara");
let user_Score = document.querySelector("#user-Score");
let comp_Score = document.querySelector("#comp-Score");

//Winner Declaration:
let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        user_Score.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msgContainer.style.backgroundColor = "#7FACFF";
    }
    else{
        compScore++;
        comp_Score.innerText = compScore;
        console.log("You Lose");
        msgContainer.style.backgroundColor = "#F083A2";
        msg.innerText = `You Lost! Your ${userChoice} loses to ${compChoice}`;
    }
}

//Copmuter Choice:
const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}
//Actual Game Logic:
const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);
    let compChoice = genCompChoice();
    console.log("Computer Choice = " ,compChoice);
    if(userChoice === compChoice){
        //Draw Condition:
        console.log("Game is Draw");
        msg.innerText = `Game was Drawn! Your ${userChoice} is same to ${compChoice}`;
        msgContainer.style.backgroundColor = "#C38EDC";
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            //Scissor, Paper
           userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            //Scissor, Rock
            userWin = compChoice === "Scissor" ? false : true;
        }
        else{
            //User Choice = Scissors:
            //comp Choice = Rock, Paper
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner (userWin, userChoice, compChoice);
    }
}

//Event Makers:
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

