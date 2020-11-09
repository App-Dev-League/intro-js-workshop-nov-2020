/* 
 * Input a random number between 0 - 3 to get a random distribution
 */
function getAction(number) {
	if(number < 1) {
		return "rock";
	} else if(number < 2) {
		return "paper";
	} else {
		return "scissors";
	}
}

/* 
 * Determines winner based on the user's choice and computer's choice
 * Returns true if the user won, false if the computer won
*/
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

// Infinite loop until user ends
ended = false;
while(!ended) {
	input = prompt("Rock, paper, scissors, or end?");
	/*
	 * If user clicks cancel on prompt or types end, set end condition
	 * Also display end message
	 */
	if(input == null || input.toLowerCase() == "end") {
		ended = true;
		alert("Thanks for playing rock-paper-scissors with us!")
	} else {
		input = input.toLowerCase(); // Sanitize input by converting to lowercase (recommended)
		computerChoice = getAction(Math.random() * 3); // Random number from 0 to 1 times 3 is random number from 0 to 3

		// Check for tie or winner
		if(input == computerChoice) {
			alert(`You chose ${input}, and the computer chose ${computerChoice}. You tied.`);
		} else if(isWinner(input, computerChoice)) {
			alert(`You chose ${input}, and the computer chose ${computerChoice}. You won :)`);
		} else {
			alert(`You chose ${input}, and the computer chose ${computerChoice}. You lose :(`);
		}
	}
}
