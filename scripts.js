function getComputerChoice(){
    let choice= Math.floor(Math.random()*3);
    return choice;
}

function playRound(human, cpu) {
    let wlt = "";

    if (human === cpu) {
      wlt = "t"; // tie
    } else if (
      (human === 0 && cpu === 2) || // rock beats scissors
      (human === 1 && cpu === 0) || // paper beats rock
      (human === 2 && cpu === 1)    // scissors beats paper
    ) {
      wlt = "w"; // win
    } else {
      wlt = "l"; // lose
    }

    return wlt;
}


// function playGame(){
//     let i = 0;
//     let wins=0
//     while (i < 5){
//         let win=playRound(getHumanChoice(),getComputerChoice());
//         if(win){
//             wins++;
//         }
//         i++;
//     }
//     console.log('You won ' + wins + ' time(s) out of 5.');
// }

// playGame();


const container = document.querySelector("#container");

let humanChoice = "";
const humanResult = document.createElement("p");
humanResult.textContent = humanChoice;

container.append(humanResult);

const computerResult = document.createElement("p");
computerResult.textContent = "";

container.append(computerResult);

const result = document.createElement("p");
result.textContent = "";

container.append(result);

let humanScore= 0;
let computerScore= 0;
let tiedScore = 0;

const hScore = document.createElement("p");
hScore.textContent = "";

container.append(hScore);

const cScore = document.createElement("p");
cScore.textContent = "";

container.append(cScore);

const tied = document.createElement("p");
tied.textContent = "";

container.append(tied);





// Function to handle displaying choice
function updateDisplay(choice, computerChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    humanResult.textContent = `You picked: ${choices[choice]}`;
    computerResult.textContent = `Computer picked: ${choices[computerChoice]}`;
    hScore.textContent = "Human Score: " + humanScore;
    cScore.textContent = "Computer Score: " + computerScore;
    tied.textContent = "Tied Score: " + tiedScore;
}

// Button Container
const buttonContainer = document.querySelector("#buttonContainer");

const rock = document.createElement("button");
rock.innerText = "Rock";
rock.id = "rock";

buttonContainer.append(rock);

const paper = document.createElement("button");
paper.innerText = "Paper";
paper.id = "paper";

buttonContainer.append(paper);

const scissors = document.createElement("button");
scissors.innerText = "Scissors";
scissors.id = "scissors";

buttonContainer.append(scissors);

buttonContainer.addEventListener("click", e => {
    // if(e.target.tagName === "BUTTON"){
    //     console.log(`${e.target.id} was clicked.`);
    // }   
    if (humanScore >= 5 || computerScore >= 5) return;
    if (e.target.id === "rock"){
        humanChoice = 0; 
    }
    else if (e.target.id === "paper"){
        humanChoice = 1;
    }
    else if (e.target.id === "scissors"){
        humanChoice = 2;
    }


    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    if (playRound(humanChoice, computerChoice) === "w"){
        humanScore++;
    }
    else if (playRound(humanChoice, computerChoice) === "l"){
        computerScore++;
    }
    else{
        tiedScore++;
    }
    updateDisplay(humanChoice, computerChoice);

});


