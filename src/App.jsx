import { generateDisplay } from "./components/generateDisplay";
import React from 'react'

function App() {

    const[guessedLetters, setGuessedLetters] = React.useState(['a'])

    return (
        <div>
            <h1>Hangman Game</h1>
            <h2>{generateDisplay(guessedLetters, 'apple')}</h2>

            <h4>Number of misses:</h4>
            <div className='letters'>
                <button>a</button>
                <button>b</button>
                <button>c</button>
                <button>d</button>
                <button>e</button>
                <button>f</button>
                <button>g</button>
                <button>h</button>
                <button>i</button>
                <button>j</button>
                <button>k</button>
                <button>l</button>
                <button>m</button>
                <button>n</button>
                <button>o</button>
                <button>p</button>
                <button>q</button>
                <button>r</button>
                <button>s</button>
                <button>t</button>
                <button>u</button>
                <button>v</button>
                <button>w</button>
                <button>x</button>
                <button>y</button>
                <button>z</button>
        </div>

        </div>
    );
}

export default App;
