import { useState } from "react";
import estilos from "./TarjetaTaller.module.css";
import Boton from "../Boton/Boton";

export default function TarjetaTaller({ taller, esHorizontal = false }) {
  const { titulo, categoria, cupo, inscriptos, esNuevo, descripcion } = taller;

  const [expandido, setExpandido] = useState(false);

  // Valores derivados
  const libres = cupo - inscriptos;
  const porcentaje = Math.round((inscriptos / cupo) * 100);

  // Clases condicionales
  let claseDisponibilidad = estilos.disponible;
  if (libres === 0) {
    claseDisponibilidad = estilos.completo;
  } else if (libres <= 3) {
    claseDisponibilidad = estilos.pocos;
  }

  const claseExpandida = expandido ? estilos.expandida : "";
  const claseFormato = esHorizontal ? estilos.tarjetaHorizontal : "";

  return (
    <article
      className={`${estilos.tarjeta} ${claseDisponibilidad} ${claseExpandida} ${claseFormato}`}
    >
      {esNuevo && <span className={estilos.badgeNuevo}>Nuevo</span>}

      <div>
        <h2>{titulo}</h2>
        <p>Categoría: {categoria}</p>

        {libres === 0 ? (
          <p><strong>Completo</strong></p>
        ) : (
          <p>Cupos libres: {libres} de {cupo}</p>
        )}
      </div>

      <div style={{ flex: 1, maxWidth: esHorizontal ? "250px" : "100%" }}>
        <div className={estilos.barraContenedor}>
          <div
            className={estilos.barraProgreso}
            style={{ width: `${porcentaje}%` }}
          ></div>
        </div>
      </div>

      <div>
        {/* Reemplazamos el <button> por nuestro componente Boton */}
        <Boton
          onClick={() => setExpandido(!expandido)}
          variante="secundario"
        >
          {expandido ? "Ocultar detalles" : "Ver detalles"}
        </Boton>
      </div>

      {expandido && (
        <div className="w-100 mt-3">
          <p>{descripcion || "Sin descripción disponible para este taller."}</p>
        </div>
      )}
    </article>
  );
}