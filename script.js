document.addEventListener("DOMContentLoaded", function () {

    const userGameScoreElement = document.getElementById("user-game-score");
    const computerGameScoreElement = document.getElementById("computer-game-score");
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("computer-score");
    const rollBtn = document.getElementById("roll-btn");
    const resetBtn = document.getElementById("reset-btn");

    let userGameScore = 0;
    let computerGameScore = 0;
    let playerScore = 0;
    let computerScore = 0;

    function updateScores() {
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;

        if (playerScore >= 20 || computerScore >= 20) {

            if (playerScore > computerScore) {
                userGameScore++;
            } else {
                computerGameScore++;
            }

            userGameScoreElement.textContent = userGameScore;
            computerGameScoreElement.textContent = computerGameScore;

            playerScore = 0;
            computerScore = 0;
            playerScoreElement.textContent = playerScore;
            computerScoreElement.textContent = computerScore;

            if (userGameScore >= 3 || computerGameScore >= 3) {
                alert(userGameScore > computerGameScore ? "You win the game!" : "Computer wins the game!");
                userGameScore = 0;
                computerGameScore = 0;
                userGameScoreElement.textContent = userGameScore;
                computerGameScoreElement.textContent = computerGameScore;
            }
        }
    }

    rollBtn.addEventListener("click", function () {
        const playerRoll = Math.floor(Math.random() * 6) + 1;
        const computerRoll = Math.floor(Math.random() * 6) + 1;

        playerScore += playerRoll;
        computerScore += computerRoll;
        updateScores();
    });

    resetBtn.addEventListener("click", function () {
        userGameScore = 0;
        computerGameScore = 0;
        playerScore = 0;
        computerScore = 0;

        userGameScoreElement.textContent = userGameScore;
        computerGameScoreElement.textContent = computerGameScore;
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
    });

});
