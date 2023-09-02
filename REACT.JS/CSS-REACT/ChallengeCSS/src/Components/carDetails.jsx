import PropTypes from "prop-types";
import "./carDetails.css";

const CarDetails = ({ carModel, price, manufactureYear, color }) => {
  return (
    <>
      <ul className="ul-cardetails">
        <li className="li-cardetails">{carModel}</li>
        <li>R$ {price},00</li>
        <li>{manufactureYear}</li>
        <li>{color}</li>
      </ul>
    </>
  );
};

CarDetails.propTypes = {
  carModel: PropTypes.string.isRequired, // Espera uma string (obrigatória)
  price: PropTypes.number.isRequired, // Espera um número (obrigatório)
  manufactureYear: PropTypes.number.isRequired, // Espera um número (obrigatório)
  color: PropTypes.string.isRequired, // Espera uma string (obrigatória)
};

export default CarDetails;