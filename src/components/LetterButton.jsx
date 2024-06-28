import React from 'react'

export default function LetterButton(props){
    return(<button
        disabled={props.disabled(props.letter)}
        onClick={props.onClick(props.letter)}
        >{props.letter}</button>)
}