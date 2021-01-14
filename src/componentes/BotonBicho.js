export const BotonBicho = ({ idActivo, id, alias, setBicho }) => {
    const emoji = id === "p" ? "🐶" : "🐱";
    return (
        <button
            className={`set-${alias}${idActivo === id ? " activo" : ""}`}
            data-bicho={alias}
            onClick={() => setBicho(id)}
        >{emoji}</button>
    )
}