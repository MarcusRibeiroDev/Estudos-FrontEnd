import PropTypes from "prop-types";

const Props = ({userName, userAge, userGrade, id}) => {
  return (
    <div>
        <p>O nome dele é: {userName} e seu id é {id}</p>
        <p>A idade dele é: {userAge}</p>
        <p>Sua nota foi: {userGrade}</p>
        {userGrade > 6 && <p>Aprovado no ano letivo</p>}
        {userGrade <= 6 && <p>Reprovado no ano letivo</p>}
        
    </div>
  )
}

Props.propTypes = {
    userName: PropTypes.string.isRequired,
    userAge: PropTypes.number.isRequired,
    userGrade: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
};


export default Props