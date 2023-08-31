import PropTypes from "prop-types";

const UserDetails = ({userN, userA}) => {

    let result = userA > 18 ? "Permitido" : "Não permitido"

  return (
    <div>
        <ul>
            <li>Nome: {userN}</li>
            <li>Idade: {userA}</li>
            <li>Idade para dirigir: {result}</li>
        </ul>
    </div>
  )
}

export default UserDetails

UserDetails.propTypes = {
    userN: PropTypes.string.isRequired,
    userA: PropTypes.number.isRequired,
};