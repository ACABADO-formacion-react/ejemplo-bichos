import { useState } from "react";
import { Botonera } from "./componentes/Botonera";
import { Descripcion } from "./componentes/Descripcion";
import { Imagen } from "./componentes/Imagen";
import { Nombre } from "./componentes/Nombre";

function App() {
  const [formAbierto, setFormAbierto] = useState(false);
  const [bichos, setBichos] = useState({
    datos: [
      {
        id: "g",
        nombre: "gatete",
        alias: "gatete",
        texto: "Un gatete feliz",
        descripcion: "El animal más perfecto sobre la faz de la Tierra.",
        favorito: true
      },
      {
        id: "p",
        nombre: "perrete",
        alias: "perrete",
        texto: "Un perrete feliz",
        descripcion: "Bueno, vale, molan.",
        favorito: false
      }
    ],
    activo: "g"
  });
  const {
    id: idActivo,
    nombre,
    alias,
    texto,
    descripcion,
    favorito
  } = bichos.datos.find(bicho => bicho.id === bichos.activo);
  const [datosForm, setDatosForm] = useState({
    nombre,
    texto,
    descripcion,
    favorito
  });
  const onChangeNombre = (e) => {
    setDatosForm({
      ...datosForm,
      nombre: e.target.value
    });
  }
  const onChangeDescripcion = (e) => {
    setDatosForm({
      ...datosForm,
      descripcion: e.target.value
    });
  }
  const onChangeFavorito = (e) => {
    setDatosForm({
      ...datosForm,
      favorito: e.target.checked
    });
  }
  const setBicho = (idBicho) => {
    setBichos({
      ...bichos,
      activo: idBicho
    });
  }
  const toggleBicho = () => {
    setBichos({
      ...bichos,
      activo: bichos.activo === "g" ? "p" : "g"
    });
  }
  const abrirForm = (e) => {
    e.preventDefault();
    setFormAbierto(true);
  }
  const cerrarForm = (e) => {
    if (typeof e !== "undefined") {
      e.preventDefault();
    }
    setFormAbierto(false);
  }
  const onGuardarBicho = (e) => {
    e.preventDefault();
    setBichos({
      ...bichos,
      datos: bichos.datos.map(bicho => {
        if (bicho.id === idActivo) {
          return {
            ...bicho,
            ...datosForm
          }
        } else {
          return bicho;
        }
      })
    });
    cerrarForm();
  }
  return (
    <>
      <div className={`formulario-editar${formAbierto ? " on" : ""}`}>
        <form autoComplete="off" onSubmit={onGuardarBicho}>
          <label htmlFor="nombre">Nombre bicho:</label>
          <input
            type="text"
            id="nombre"
            value={datosForm.nombre}
            onChange={onChangeNombre}
          />
          <label htmlFor="explicacion">Descripción:</label>
          <input
            type="text"
            id="explicacion"
            value={datosForm.descripcion}
            onChange={onChangeDescripcion}
          />
          <label htmlFor="favorito">
            <input
              type="checkbox"
              id="favorito"
              checked={datosForm.favorito}
              onChange={onChangeFavorito}
            /> ¿Es tu bicho favorito?
            </label>
          <button type="submit">Guardar</button>
        </form>
        <a href="cerrar" className="cerrar-form" onClick={cerrarForm}>❌</a>
      </div>
      <main>
        <header>
          <Nombre nombreBicho={nombre} />
        </header>
        <Imagen
          alias={alias}
          texto={texto}
          favorito={favorito}
          abrirForm={abrirForm}
        />
        <Botonera
          bichos={bichos.datos}
          idActivo={idActivo}
          setBicho={setBicho}
          toggleBicho={toggleBicho}
        />
        <Descripcion descripcionBicho={descripcion} />
      </main>
    </>
  );
}

export default App;
