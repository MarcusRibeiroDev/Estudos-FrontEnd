import PropTypes from "prop-types";

const Container = ({children, stringSet}) => {
  return (
    <>
        <h1>Container Component</h1>
        {children}
        <h1>{stringSet}</h1>
    </>
  )
}

export default Container

Container.propTypes = {
    children: PropTypes.node.isRequired,
    stringSet: PropTypes.string.isRequired,
};