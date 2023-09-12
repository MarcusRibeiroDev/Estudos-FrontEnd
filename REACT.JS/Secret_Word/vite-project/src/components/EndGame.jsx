import './EndGame.css'
import PropTypes from "prop-types";

const EndGame = ({retryGame}) => {
  return (
    <div>
        <h1>End Game</h1>

        <button onClick={retryGame}>Finalizar Game</button>
    </div>
  )
}

export default EndGame

EndGame.propTypes = {
    retryGame: PropTypes.func.isRequired
}