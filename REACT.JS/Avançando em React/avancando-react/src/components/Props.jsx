import PropTypes from "prop-types";

const Props = ({userName, userAge}) => {
  return (
    <div>
        <p>O nome dele é: {userName}</p>
        <p>A idade dele é: {userAge}</p>
    </div>
  )
}

Props.propTypes = {
    userName: PropTypes.string.isRequired,
    userAge: PropTypes.number.isRequired
};


export default Props