import './EndGame.css'
import PropTypes from "prop-types";

const EndGame = ({retryGame, score}) => {
  return (
    <div>
        <h1>Game Over</h1>

        <h1>Seu score foi: {score}</h1>

        <button onClick={retryGame}>Tente novamente</button>
    </div>
  )
}

export default EndGame

EndGame.propTypes = {
    retryGame: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired
}