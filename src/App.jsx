import { generateDisplay } from "./components/generateDisplay";
import React from "react";

function App() {
    const [guessedLetters, setGuessedLetters] = React.useState([]);
    const [numberOfmisses, setNumberOfMisses] = React.useState(0)
    // const [gameInProgress, setGameInProgress] = React.useState(true)
    const answer = 'apple'

    // if(numberOfmisses === 10){
    //     setGameInProgress(false)
    // }

    const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const buttons = alphabetArray.map((letter) => {
        return(<button key={letter}
        disabled={guessedLetters.includes(letter) || numberOfmisses === 10}
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
            <h2>{numberOfmisses === 10 ? `You lose,the answer was ${answer}.`: null}</h2>
            <h4>Number of misses: {numberOfmisses}</h4>
            <div className="letters">
                {buttons}
            </div>
        </div>
    );
}

export default App;
