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
    if (answer == "rock" || answer == "paper" || answer == "scissors"){
    return answer;
    }
    else{
        return " ";
    }
}








function playGame(){
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
   console.log("Rock, Paper, Scissors! Ready?")

    const humanC = getHumanChoice();
    const compC = getComputerChoice();
    playRound(humanC, compC)


    const humanC2 = getHumanChoice();
    const compC2 = getComputerChoice();
    playRound(humanC2, compC2)

    const humanC3 = getHumanChoice();
    const compC3 = getComputerChoice();
    playRound(humanC3, compC3)

    const humanC4 = getHumanChoice();
    const compC4 = getComputerChoice();
    playRound(humanC4, compC4)

    const humanC5 = getHumanChoice();
    const compC5 = getComputerChoice();
    playRound(humanC5, compC5)

    console.log("Human Score:  " + humanScore)
    console.log("Computer Score:  " + computerScore)
   }

playGame()
    

    



