import { generateDisplay } from "./components/generateDisplay";
import React from "react";
import { randomWord } from "./components/randomWord";

function App() {
    const [guessedLetters, setGuessedLetters] = React.useState([]);
    const [numberOfmisses, setNumberOfMisses] = React.useState(0)
    const [answer, setAnswer] = React.useState(randomWord())
    // const [gameInProgress, setGameInProgress] = React.useState(true)

    function playerWon(guessedLetters, answer){
        for(let letter of answer){
            if (!guessedLetters.includes(letter)){
                return false
            }
            return true
        }
    }

    const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const buttons = alphabetArray.map((letter) => {
        return(<button key={letter}
        disabled={guessedLetters.includes(letter) || numberOfmisses === 10 || playerWon(guessedLetters, answer)}
        onClick={()=>{

            setGuessedLetters((prevArray) => [...prevArray, letter])
            if(!answer.includes(letter)){
                setNumberOfMisses((prevValue) => prevValue + 1)
            }
        }
        }
        >{letter}</button>)
    })

    return (
        <div>
            <h1>Hangman Game</h1>
            <h2>{generateDisplay(guessedLetters, answer)}</h2>
            <h2>{playerWon(guessedLetters, answer) ? "You're a Winner Baby!": null}</h2>
            <h2>{numberOfmisses === 10 ? `You lose,the answer was ${answer}.`: null}</h2>
            <h4>Number of misses: {numberOfmisses}</h4>
            <div className="letters">
                {buttons}
            </div>
            <button disabled={!playerWon(guessedLetters, answer) || numberOfmisses !== 10}
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
