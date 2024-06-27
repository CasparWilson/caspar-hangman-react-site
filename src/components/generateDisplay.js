function generateDisplay(guessedLetters, answer) {
    const guessProgressArray = answer.split("").map(() => "_");

    guessedLetters.push(" ");

    for (let i = 0; i < answer.length; i++) {
        if (guessedLetters.includes(answer[i])) {
            guessProgressArray[i] = answer[i];
        }
    }
    return guessProgressArray;
}

export { generateDisplay };
