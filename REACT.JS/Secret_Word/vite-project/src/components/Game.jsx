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
                        (<span className='letter' key={i}>{l}</span>) : (<span className='white-canvas' key={i}></span>)

                    ))
                }
            </div>
        </div>

        <div className='input-letter'>
            <h2>Digite uma letra</h2>
            <form>
                <input type="text" name='letter' maxLength='1' required />
                <button>Jogar</button>
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

Game.propTypes = {
    processWord: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    letters: PropTypes.arrayOf(PropTypes.string).isRequired,
    score: PropTypes.number.isRequired,
    wrongsLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
    guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
    attempts: PropTypes.number.isRequired
}