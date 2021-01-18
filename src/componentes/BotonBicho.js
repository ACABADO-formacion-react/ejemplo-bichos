import { Boton } from "./Boton";
import PropTypes from "prop-types";

export const BotonBicho = ({ idActivo, id, alias, setBicho }) => {
    const emoji = id === "p" ? "🐶" : "🐱";
    return (
        <Boton
            className={`set-${alias}${idActivo === id ? " activo" : ""}`}
            data-bicho={alias}
            onClick={() => setBicho(id)}
        >
            {emoji}
        </Boton>
    )
}

BotonBicho.propTypes = {
    idActivo: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    alias: PropTypes.string.isRequired,
    setBicho: PropTypes.func.isRequired
}