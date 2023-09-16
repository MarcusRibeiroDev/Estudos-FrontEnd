import './StartScreen.css'
import PropTypes from "prop-types";

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1>Palavra Secreta</h1>

        {/*Colocar nível de dificuldade*/}

        <p>Clique no botão abaixo</p>

        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen

StartScreen.propTypes = {
  startGame: PropTypes.func.isRequired
}
