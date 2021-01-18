import PropTypes from "prop-types";

export const Descripcion = ({ descripcionBicho }) => {
    return (
        <section className="explicacion">
            {descripcionBicho}
        </section>
    )
}

Descripcion.propTypes = {
    descripcionBicho: PropTypes.string.isRequired
}