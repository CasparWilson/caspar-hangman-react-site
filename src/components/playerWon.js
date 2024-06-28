function playerWon(guessedLetters, answer) {
    for (let letter of answer) {
        if (!guessedLetters.includes(letter)) {
            console.log("no match");
            return false;
        }
    }
    console.log("Match");
    return true;
}

export { playerWon };
