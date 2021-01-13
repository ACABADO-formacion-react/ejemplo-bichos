import { useState } from "react";

function App() {
  const [bichos, setBichos] = useState({
    datos: [
      {
        id: "g",
        nombre: "gatete",
        texto: "Un gatete feliz",
        descripcion: "El animal más perfecto sobre la faz de la Tierra."
      },
      {
        id: "p",
        nombre: "perrete",
        texto: "Un perrete feliz",
        descripcion: "Bueno, vale, molan."
      }
    ],
    activo: "g"
  });
  const { id: idActivo, nombre, texto, descripcion } = bichos.datos.find(bicho => bicho.id === bichos.activo);
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
  return (
    <main>
      <header>
        <h1>{nombre.charAt(0).toUpperCase() + nombre.slice(1)}</h1>
      </header>
      <section className="imagenes">
        <img src={`img/${nombre}.jpg`} title={texto} alt={texto} className="gatete" />
      </section>
      <section className="controles">
        <button
          className={`set-perrete${idActivo === "p" ? " activo" : ""}`}
          data-bicho="perrete"
          onClick={() => setBicho("p")}
        >🐶</button>
        <button
          className={`set-gatete${idActivo === "g" ? " activo" : ""}`}
          data-bicho="gatete"
          onClick={() => setBicho("g")}
        >🐱</button>
        <button className="toggle-bicho" onClick={toggleBicho}>Conmutar</button>
      </section>
      <section className="explicacion">
        {descripcion}
      </section>
    </main>
  );
}

export default App;
