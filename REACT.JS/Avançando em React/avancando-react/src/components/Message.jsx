import PropTypes from "prop-types";

const Message = ({msg}) => {
  return (
    <div>
        <h3>Sua mensagem é {msg}</h3>
    </div>
  )
}

export default Message

Message.propTypes = {
    msg: PropTypes.string.isRequired
};