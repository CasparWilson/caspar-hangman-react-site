import { words } from "./wordData";

function randomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

export { randomWord };
