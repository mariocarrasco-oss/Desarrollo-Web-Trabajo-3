import { useState } from "react";
import { talleres } from "./data/talleres";

export default function App() {
  const [tema, setTema] = useState("claro");

  return (
    <main className="container py-5" data-tema={tema}>
      <h1>Catálogo de Talleres</h1>
      <button
        className="btn btn-primary mb-3"
        onClick={() => setTema(tema === "claro" ? "oscuro" : "claro")}
      >
        {tema === "claro" ? "Tema oscuro" : "Tema claro"}
      </button>

      <div className="row g-4">
        {talleres.map((taller) => (
          <div key={taller.id} className="col-12 col-md-6 col-lg-4">
            <article className="p-3 border rounded">
              <h2>{taller.titulo}</h2>
              <p>{taller.categoria}</p>
              <p>Cupos: {taller.cupo} | Inscriptos: {taller.inscriptos}</p>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}
