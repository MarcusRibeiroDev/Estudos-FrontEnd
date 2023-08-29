import PropTypes from "prop-types";

function ExecuteFunction({functionComponent}) {
  return (
    <>
        <button onClick={functionComponent}></button>
    </>
  )
}

export default ExecuteFunction

ExecuteFunction.propTypes = {
    functionComponent: PropTypes.func.isRequired
};