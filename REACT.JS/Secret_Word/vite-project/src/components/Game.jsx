import { useState, useRef } from 'react';
import './Game.css'
import PropTypes from "prop-types";

const Game = ({
    processWord,
    category,
    word,
    letters,
    score,
    wrongsLetters,
    attempts,
    guessedLetters
}) => {

    const [letter, setLetter] = useState('')

    const buttonRef = useRef()

    const handleSubmitLetter = (e) =>{
        e.preventDefault()

        processWord(letter)

        setLetter('')

        buttonRef.current.focus()

    }

  return (
    <div className='game'>

        <div className='score'>
            <h2>Score: {score}</h2>
        </div>

        <h1>Adivinhe a Palavra:</h1>

        <div className='tips'>
            <h2>Dica: <span>{category}</span></h2>
        </div>

        <p>Tentativas: {attempts}</p>

        <div className='game-container-word'>
            <div className='word-container'>
                {
                    letters.map((l, i)=> (

                        guessedLetters.includes(l) ?
                        (<span className='letter' key={i}>{l.toUpperCase()}</span>) : (<span className='white-canvas' key={i}></span>)

                    ))
                }
            </div>
        </div>

        <div className='input-letter'>
            <h2>Digite uma letra</h2>
            <form onSubmit={handleSubmitLetter}>
                <input type="text" name='letter' maxLength='1' required value={letter} onChange={(e)=>{setLetter(e.target.value)}} ref={buttonRef} />
                <button type='submit' >Jogar</button>
            </form>
        </div>

        <div className='wrong-words-container'>
            <p>Letras já utilizadas:</p> 
            <span>A, </span>
            <span>B, </span>    
        </div>

    </div>
  )
}

export default Game