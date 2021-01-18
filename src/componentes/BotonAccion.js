import { Boton } from "./Boton"
import PropTypes from "prop-types";

export const BotonAccion = ({ className, onClick }) => {
    return (
        <Boton
            className={className}
            onClick={onClick}
        >
            Conmutar
        </Boton >
    )
}

BotonAccion.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}