//Function thag gets a random number
function getAction(number) {
	if(number < 1) {
		return "rock";
	} else if(number < 2) {
		return "paper";
	} else {
		return "scissors";
	}
}

//Determines the winner and accepts "parameters"
function isWinner(user, computer) {
	if(user == "rock" && computer == "scissors") {
		return true;
	} else if(user == "paper" && computer == "rock") {
		return true;
	} else if(user == "scissors" && computer == "paper") {
		return true;
	} else {
		return false;
	}
}

//Game Logic
ended = false;
while(!ended) {
	input = prompt("Rock, paper, scissors, or end?");
	// If the user types end, then terminate the program
	if(input == null || input.toLowerCase() == "end") {
		ended = true;
		alert("Thanks for playing rock-paper-scissors with us!")
	} else {
		input = input.toLowerCase();
		computerChoice = getAction(Math.random() * 3);

		// Checks if there is a win or tie, by calling the isWinner function
		if(input == computerChoice) {
			alert(`You chose ${input}, and the computer chose ${computerChoice}. You tied.`);
		} else if(isWinner(input, computerChoice)) {
			alert(`You chose ${input}, and the computer chose ${computerChoice}. You won :)`);
		} else {
			alert(`You chose ${input}, and the computer chose ${computerChoice}. You lose :(`);
		}
	}
}
