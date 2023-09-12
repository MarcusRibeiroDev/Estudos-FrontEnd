import './Game.css'
import PropTypes from "prop-types";

const Game = ({processWord}) => {
  return (
    <div>
        <h1>Game</h1>

        <button onClick={processWord}>Finalizar Game</button>
    </div>
  )
}

export default Game

Game.propTypes = {
    processWord: PropTypes.func.isRequired
}