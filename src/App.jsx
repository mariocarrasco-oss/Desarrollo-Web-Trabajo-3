import { useState } from "react";
import { talleres } from "./data/talleres";
import TarjetaTaller from "./components/TarjetaTaller/TarjetaTaller";
import Boton from "./components/Boton/Boton";

export default function App() {
  // Estado del Punto 1 (Tema)
  const [tema, setTema] = useState("claro");

  // Estados del Punto 3
  const [vista, setVista] = useState("grilla"); // "grilla" o "lista"
  const [compacto, setCompacto] = useState(false);

  const alternarTema = () => {
    setTema((prev) => (prev === "claro" ? "oscuro" : "claro"));
  };

  // Clases condicionales de Bootstrap según estado
  const claseContenedorPadding = compacto ? "py-2" : "py-5";
  const claseGrillaGap = compacto ? "g-2" : "g-4";
  const claseColumna = vista === "grilla" ? "col-12 col-md-6 col-lg-4" : "col-12";

  return (
    <div data-tema={tema} style={{ minHeight: "100vh" }}>
      <main className={`container ${claseContenedorPadding}`}>
        <header className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
          <h1>Catálogo de Talleres</h1>

          <div className="d-flex flex-wrap gap-2">
            <Boton onClick={alternarTema} variante="secundario">
              {tema === "claro" ? "Tema oscuro" : "Tema claro"}
            </Boton>

            <Boton
              onClick={() => setVista(vista === "grilla" ? "lista" : "grilla")}
              activo={vista === "lista"}
            >
              {vista === "grilla" ? "Vista Lista" : "Vista Grilla"}
            </Boton>

            <Boton
              onClick={() => setCompacto(!compacto)}
              activo={compacto}
              variante="secundario"
            >
              {compacto ? "Modo Normal" : "Modo Compacto"}
            </Boton>
          </div>
        </header>

        <div className={`row ${claseGrillaGap}`}>
          {talleres.map((taller) => (
            <div key={taller.id} className={claseColumna}>
              <TarjetaTaller
                taller={taller}
                esHorizontal={vista === "lista"}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}