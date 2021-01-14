export const Nombre = ({ nombreBicho }) => {
    return (
        <h1>{nombreBicho.charAt(0).toUpperCase() + nombreBicho.slice(1)}</h1>
    )
}