function getComputerChoice(){
    let randomNumber = (Math.floor(Math.random()* 10));
    if (randomNumber < 3){
        console.log("scissors");
        return "scissors";
    }
    else if (randomNumber < 6 && randomNumber >=3){
        console.log("paper");
        return "paper";
    }
    else if (randomNumber < 9 && randomNumber >=6){
        console.log ("rock");
        return "rock";
    }

    
    }

    
function getHumanChoice(){
    let answer = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (answer == "rock" || answer == "paper" || answer == "scissors")
    return answer;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
   if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("Computer wins. Paper beats rock!");
        console.log(++computerScore);
   }

   else if (humanChoice == "rock" && computerChoice == "scissors"){
    console.log("Human wins. Rock beats scissors!");
    console.log (++humanScore);

   }
   else if (humanChoice == "rock" && computerChoice == "rock"){
    console.log("It's a tie!");
   }

   else if (humanChoice == "paper" && computerChoice == "paper"){
    console.log("It's a tie!");
   }

   else if (humanChoice == "paper" && computerChoice == "scissors"){
    console.log("Computer wins. Scissors beat paper!");
    console.log(++computerScore);
   }

   else if (humanChoice == "paper" && computerChoice == "rock"){
    console.log("Human wins. Paper beats rock!")
    console.log(++humanScore);
   }

   else if (humanChoice == "scissors" && computerChoice == "paper"){
    console.log("Human wins. Scissors beat paper!")
    console.log(++humanScore);
   }
   else if (humanChoice == "scissors" && computerChoice == "scissors"){
    console.log("It's a tie!");
   }

   else if (humanChoice == "scissors" && computerChoice == "rock"){
    console.log("Computer wins. Rock beats scissors!");
    console.log(++computerScore);
   }

}


const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection,computerSelection)






    

    



