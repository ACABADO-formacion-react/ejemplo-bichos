import { Boton } from "./Boton"
import { BotonBicho } from "./BotonBicho"

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
            <Boton texto="Conmutar" onClick={toggleBicho} className="toggle-bicho" />
        </section>
    )
}