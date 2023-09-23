import './EndGame.css';
import PropTypes from 'prop-types';

const EndGame = ({ retryGame, score }) => {
  return (
    <div>
      <h1>Game Over</h1>

      <h1>Your score was: {score}</h1>

      <button onClick={retryGame}>Try Again</button>
    </div>
  );
};

export default EndGame;

EndGame.propTypes = {
  retryGame: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};
