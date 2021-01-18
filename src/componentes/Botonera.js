import { BotonAccion } from "./BotonAccion"
import { BotonBicho } from "./BotonBicho"
import PropTypes from "prop-types";

export const Botonera = ({ idActivo, bichos, setBicho, toggleBicho }) => {
    return (
        <section className="controles">
            {
                bichos.map(({ id, alias }) => (
                    <BotonBicho
                        key={id}
                        alias={alias}
                        id={id}
                        idActivo={idActivo}
                        setBicho={setBicho}
                    />
                ))
            }
            <BotonAccion onClick={toggleBicho} className="toggle-bicho" />
        </section>
    )
}

Botonera.propTypes = {
    idActivo: PropTypes.string.isRequired,
    bichos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            nombre: PropTypes.string.isRequired,
            alias: PropTypes.string.isRequired,
            texto: PropTypes.string.isRequired,
            descripcion: PropTypes.string.isRequired,
            favorito: PropTypes.bool.isRequired
        })
    ).isRequired,
    setBicho: PropTypes.func.isRequired,
    toggleBicho: PropTypes.func.isRequired
}