import { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";

export const Editar = ({ datosFormIniciales, formAbierto, onGuardarBicho, cerrarForm }) => {
    const { datosForm, onChangeCampo } = useForm(datosFormIniciales);
    const inputNombre = useRef(null);
    useEffect(
        () => inputNombre.current.focus()
        , [formAbierto]);
    return (
        <div className={`formulario-editar${formAbierto ? " on" : ""}`}>
            <form autoComplete="off" onSubmit={(e) => onGuardarBicho(e, datosForm)}>
                <label htmlFor="nombre">Nombre bicho:</label>
                <input
                    ref={inputNombre}
                    type="text"
                    id="nombre"
                    value={datosForm.nombre}
                    onChange={onChangeCampo}
                />
                <label htmlFor="descripcion">Descripción:</label>
                <input
                    type="text"
                    id="descripcion"
                    value={datosForm.descripcion}
                    onChange={onChangeCampo}
                />
                <label htmlFor="favorito">
                    <input
                        type="checkbox"
                        id="favorito"
                        checked={datosForm.favorito}
                        onChange={onChangeCampo}
                    /> ¿Es tu bicho favorito?
            </label>
                <button type="submit">Guardar</button>
            </form>
            <a href="cerrar" className="cerrar-form" onClick={cerrarForm}>❌</a>
        </div>
    )
}