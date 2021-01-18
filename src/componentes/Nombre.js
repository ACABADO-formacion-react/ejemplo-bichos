import PropTypes from "prop-types";

export const Nombre = ({ nombreBicho }) => {
    return (
        <h1>{nombreBicho.charAt(0).toUpperCase() + nombreBicho.slice(1)}</h1>
    )
}

Nombre.propTypes = {
    nombreBicho: PropTypes.string.isRequired
}