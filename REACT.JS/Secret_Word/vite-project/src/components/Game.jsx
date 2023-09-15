import './Game.css'
import PropTypes from "prop-types";

const Game = ({processWord}) => {
  return (
    <div className='game'>

        <div className='score'>
            <h2>Pontuação: <span>000</span> </h2>
        </div>

        <h1>Adivinhe a Palavra:</h1>

        <div className='tips'>
            <h2>Dica sobre a palavra:</h2>
            <span>Category</span>
        </div>

        <div className='game-container-word'>
            <div className='word-container'>
                <span className='letter'>A</span>
                <span className='white-canvas'></span>
            </div>
        </div>

        <div className='input-letter'>
            <h2>Tente adivinhar a letra</h2>
            <form>
                <input type="text" name='letter' maxLength='1' required />
                <button>Jogar</button>
            </form>
        </div>

        <div className='wrong-words-container'>
            <p>Letras já utilizadas:</p> 
            <span>A,</span>
            <span>B,</span>    
        </div>

    </div>
  )
}

export default Game

Game.propTypes = {
    processWord: PropTypes.func.isRequired
}