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

    let humancounterDiv = document.querySelector(".humanCounter");

    let computercounterDiv = document.querySelector(".computerCounter");

    let computerPickDiv = document.querySelector(".computerPick")

    let currentStatus = document.querySelector(".currentStatus")

    let humancounter = 0 

    let computercounter = 0

    let winner = document.querySelector(".winneR")
    
    
    function playRound(humanChoice, computerChoice){
       if (humanChoice == "rock" && computerChoice == "paper"){
            ++computercounter;
            computercounterDiv.textContent = computercounter;
            computerPickDiv.textContent = "Paper"
            currentStatus.textContent = "Computer won this round. Paper beats Rock!"
       }
    
       else if (humanChoice == "rock" && computerChoice == "scissors"){
            ++humancounter;
            humancounterDiv.textContent = humancounter;
            computerPickDiv.textContent = "Scissors"
            currentStatus.textContent = "You won this round. Rock beats Scissors!"

    
       }
       else if (humanChoice == "rock" && computerChoice == "rock"){
        computerPickDiv.textContent = "Rock";
        currentStatus.textContent = "It's a tie!";
       }
    
       else if (humanChoice == "paper" && computerChoice == "paper"){
        computerPickDiv.textContent = "Paper";
        currentStatus.textContent = "It's a tie!";
       }
    
       else if (humanChoice == "paper" && computerChoice == "scissors"){
             ++computercounter;
            computercounterDiv.textContent = computercounter;
            computerPickDiv.textContent = "Scissors"
            currentStatus.textContent = "Computer won this round. Scissors beats Paper!"
       }
    
       else if (humanChoice == "paper" && computerChoice == "rock"){
        ++humancounter;
            humancounterDiv.textContent = humancounter;
            computerPickDiv.textContent = "Rock"
            currentStatus.textContent = "You won this round. Paper beats Rock!"
       }
    
       else if (humanChoice == "scissors" && computerChoice == "paper"){
        ++humancounter;
            humancounterDiv.textContent = humancounter;
            computerPickDiv.textContent = "Paper"
            currentStatus.textContent = "You won this round. Scissors beats Rock!"
       }
       else if (humanChoice == "scissors" && computerChoice == "scissors"){
        computerPickDiv.textContent = "Scissors";
        currentStatus.textContent = "It's a tie!";
       }
    
       else if (humanChoice == "scissors" && computerChoice == "rock"){
        ++computercounter;
            computercounterDiv.textContent = computercounter;
            computerPickDiv.textContent = "Rock"
            currentStatus.textContent = "Computer won this round. Rock beats Scissors!"
       }
       if (humancounter >= 5){
        winner.textContent = "That's 5 points, You win!";
        humancounterDiv.textContent = "0";
        computercounterDiv.textContent = "0";
       }
       if (computercounter >= 5){
        winner.textContent = "That's 5 points, Computer wins!"
        humancounterDiv.textContent = "0";
        computercounterDiv.textContent = "0";
       }
    }
   console.log("Rock, Paper, Scissors! Ready?")

    

    

    let btnRock = document.querySelector(".btnRock")
    let btnPaper = document.querySelector(".btnPaper")
    let btnScissors = document.querySelector(".btnScissors")

    btnRock.addEventListener("click", ()=>{
        let compC = getComputerChoice();
        playRound("rock", compC)
    });
        
    btnPaper.addEventListener("click", ()=>{
        let compC = getComputerChoice();
        playRound("paper", compC)
    });

    btnScissors.addEventListener("click", ()=>{
        let compC = getComputerChoice();
        playRound("scissors", compC)});

    console.log("Human Score:  " + humanScore)
    console.log("Computer Score:  " + computerScore)

   }

   playGame()

    

    
/*let btnRock = document.querySelector(".btnRock")
let btnPaper = document.querySelector(".btnPaper")
let btnScissors = document.querySelector(".btnScissors")
*/




