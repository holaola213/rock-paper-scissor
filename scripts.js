// let humanScore= 0;
// let computerScore= 0;

// function getComputerChoice(){
//     let choice= Math.floor(Math.random()*3);
//     return choice;
// }

// function getHumanChoice(){
//     let answer= prompt('(1)Rock (2)Paper (3)Scissors');
//     return answer;
// }

// function playRound(human, cpu){
//     let win=false;
//     if(cpu ===0){
//         console.log("CPU picked Rock.");
//     }
//     else if(cpu===1){
//         console.log("CPU picked Paper.");
//     }
//     else{
//         console.log("CPU picked Scissors.");
//     }
//     if (human == 1){
//         if (cpu === 0){
//             console.log('Tied! Rock ties rock.');
//         }
//         else if(cpu === 1){
//             console.log('You lose! Paper beats rock.');
//         }
//         else{
//             console.log('You win! Rock beats scissors.');
//             win=true;
//         }
//     }
//     else if (human == 2){
//         if (cpu === 0){
//             console.log('You win! Paper beats rock.');
//             win=true;
//         }
//         else if(cpu === 1){
//             console.log('Tied! Paper ties paper.');
//         }
//         else{
//             console.log('You lose! Scissors beat paper.');
//         }
//     }
//     else if (human==3){
//         if(cpu===0){
//             console.log('You lose! Rock beats scissors.');
//         }
//         else if(cpu===1){
//             console.log('You win! Scissors beat paper.');
//             win=true;
//         }
//         else{
//             console.log('Tied! Scissors tie scissors.');
//         }
//     }
//     return win;
// }

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
    if(e.target.tagName === "BUTTON"){
        console.log(`${e.target.id} was clicked.`);
    }
});

function handleClick() {
    console.log("Button clicked!");
}