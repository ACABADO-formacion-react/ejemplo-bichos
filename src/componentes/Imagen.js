export const Imagen = ({ alias, texto, favorito, abrirForm }) => {
    return (
        <section className="imagenes">
            <img src={`img/${alias}.jpg`} title={texto} alt={texto} className={`${alias}${favorito ? " favorito" : ""}`} />
            <a href="editar" className="editar-bicho" onClick={abrirForm}>✍</a>
            <i className="bicho-favorito">👑</i>
        </section>
    )
}