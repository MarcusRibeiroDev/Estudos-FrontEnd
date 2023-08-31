import PropTypes from "prop-types";

const ChangeMesssage = ({changeMesssage}) => {

    const message = ["Oi", "Olá", "Eai"]

  return (
    <div>

        <button onClick={()=> changeMesssage(message[0])}>1</button>
        <button onClick={()=> changeMesssage(message[1])}>2</button>
        <button onClick={()=> changeMesssage(message[2])}>3</button>

    </div>
  )
}

export default ChangeMesssage

ChangeMesssage.propTypes = {
    changeMesssage: PropTypes.func.isRequired
}