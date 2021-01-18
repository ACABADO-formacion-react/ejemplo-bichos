import { useState } from "react";
import { Botonera } from "./componentes/Botonera";
import { Descripcion } from "./componentes/Descripcion";
import { Editar } from "./componentes/Editar";
import { Imagen } from "./componentes/Imagen";
import { Nombre } from "./componentes/Nombre";

function App() {
  const [formAbierto, setFormAbierto] = useState(false);
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
  const onGuardarBicho = (e, datosForm) => {
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
      <Editar
        formAbierto={formAbierto}
        datosFormIniciales={{
          nombre,
          texto,
          descripcion,
          favorito
        }}
        onGuardarBicho={onGuardarBicho}
        cerrarForm={cerrarForm}
      />
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
