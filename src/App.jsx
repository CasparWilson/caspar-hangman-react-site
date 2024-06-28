import { generateDisplay } from "./components/generateDisplay";
import React from "react";
import { randomWord } from "./components/randomWord";
import { playerWon } from "./components/playerWon";
import LetterButton from "./components/LetterButton";

function App() {
    const [guessedLetters, setGuessedLetters] = React.useState([]);
    const [numberOfMisses, setNumberOfMisses] = React.useState(0)
    const [answer, setAnswer] = React.useState(randomWord())

    const numberOfLives = 10
    const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')

    function handleLetterClick(letter){
        return ()=>{
        setGuessedLetters((prevArray) => [...prevArray, letter])
        if(!answer.includes(letter)){
            setNumberOfMisses((prevValue) => prevValue + 1)
        }
    }
    }

    function disableLetterButton(letter){
        return guessedLetters.includes(letter) || numberOfMisses === numberOfLives || playerWon(guessedLetters, answer)
    }

    const letterButtons = alphabetArray.map((letter) => {
        return <LetterButton key={letter} letter={letter}
        disabled={disableLetterButton} onClick={handleLetterClick}/>
    })

    // const buttons = alphabetArray.map((letter) => {
    //     return(<button key={letter}
    //     disabled={guessedLetters.includes(letter) || numberOfMisses === numberOfLives || playerWon(guessedLetters, answer)}
    //     onClick={()=>{
    //         setGuessedLetters((prevArray) => [...prevArray, letter])
    //         if(!answer.includes(letter)){
    //             setNumberOfMisses((prevValue) => prevValue + 1)
    //         }
    //     }
    //     }
    //     >{letter}</button>)
    // })

    return (
        <div>
            <h1>Hangman Game</h1>
            <h2>{generateDisplay(guessedLetters, answer)}</h2>
            <h2>{playerWon(guessedLetters, answer) ? "You're a Winner Baby!": null}</h2>
            <h2>{numberOfMisses === numberOfLives ? `You lose,the answer was ${answer}.`: null}</h2>
            <h4>Number of misses: {numberOfMisses}</h4>
            <div >
                {letterButtons}
            </div>
            <button disabled={!(numberOfMisses === numberOfLives) || playerWon(guessedLetters, answer)}
                onClick={()=>{
                    setAnswer(randomWord())
                    setNumberOfMisses(0)
                    setGuessedLetters([])
                }
            }>New Game</button>
        </div>
    );
}

export default App;
