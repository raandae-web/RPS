function getComputerChoice(){
    let randomNumber = (Math.floor(Math.random()* 10));
    if (randomNumber <= 3){
        console.log("scissors");
    }
    else if (randomNumber <= 6 && randomNumber >= 3){
        console.log("paper");
    }
    else {
        console.log("rock")
    }
    }

    
function getHumanChoice(){
    let answer = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (answer == "rock" || answer == "paper" || answer == "scissors")
    return answer;
}

let humanScore = 0
let computerScore = 0

    


console.log(getHumanChoice())