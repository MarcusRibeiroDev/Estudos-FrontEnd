import './StartScreen.css'
import PropTypes from "prop-types";

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1>Secret Word</h1>

        <p>Clique no botão abaixo</p>

        <button onClick={startGame}>Começar o jogo!</button>
    </div>
  )
}

export default StartScreen

StartScreen.propTypes = {
  startGame: PropTypes.func.isRequired
}
