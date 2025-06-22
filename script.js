let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('your-choice').textContent = `You chose: ${playerChoice}`;
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;

    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "You lose!";
        computerScore++;
    }

    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Result: ${result}`;

    // Trigger bounce animation
    resultElement.classList.remove('animate');
    void resultElement.offsetWidth; // trick to restart CSS animation
    resultElement.classList.add('animate');


}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;

    document.getElementById('your-choice').textContent = 'You chose: -';
    document.getElementById('computer-choice').textContent = 'Computer chose: -';
    document.getElementById('result').textContent = 'Result: -';

    // Optional reset animation
    const resultElement = document.getElementById('result');
    resultElement.classList.remove('animate');
}