import { useState, useRef } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Game.css';

const Game = ({
    processWord,
    category,
    letters,
    score,
    wrongsLetters,
    attempts,
    guessedLetters,
    word
}) => {
    const [letter, setLetter] = useState('');
    const buttonRef = useRef(null);

    const handleSubmitLetter = (e) => {
        e.preventDefault();

        processWord(letter);

        setLetter('');

        buttonRef.current.focus();
    };

    console.log(`The randomly selected word is: ${word}`)

    return (
        <div className='game'>
            <div className='score'>
                <h2>Score: {score}</h2>
            </div>

            <h1>Guess the Word:</h1>

            <div className='tips'>
                <h2>Hint: <span>{category}</span></h2>
            </div>

            <p>Attempts: {attempts}</p>

            <div className='game-container-word'>
                <div className='word-container'>
                    {letters.map((l, i) => (
                        guessedLetters.includes(l) ?
                        (<span className='letter' key={i}>{l.toUpperCase()}</span>) : (<span className='white-canvas' key={i}></span>)
                    ))}
                </div>
            </div>

            <div className='input-letter'>
                <h2>Enter a letter</h2>
                <form onSubmit={handleSubmitLetter}>
                    <input type="text" name='letter' maxLength='1' required value={letter} onChange={(e) => { setLetter(e.target.value) }} ref={buttonRef} />
                    <button type='submit' >Play</button>
                </form>
            </div>

            <div className='wrong-words-container'>
                <p>Used letters:</p>
                {wrongsLetters.map((w, i) => (
                    (<span key={i}>{w}, </span>)
                ))}
            </div>
        </div>
    );
};

Game.propTypes = {
    processWord: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired,
    letters: PropTypes.array.isRequired,
    score: PropTypes.number.isRequired,
    wrongsLetters: PropTypes.array.isRequired,
    attempts: PropTypes.number.isRequired,
    guessedLetters: PropTypes.array.isRequired,
    word: PropTypes.string.isRequired
};

export default Game;
