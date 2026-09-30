import { useState } from "react";
import estilos from "./TarjetaTaller.module.css";

export default function TarjetaTaller({ taller }) {
  const { titulo, categoria, cupo, inscriptos, esNuevo, descripcion } = taller;


  const [expandido, setExpandido] = useState(false);

 
  const libres = cupo - inscriptos;
  const porcentaje = Math.round((inscriptos / cupo) * 100);

 
  let claseDisponibilidad = estilos.disponible;
  if (libres === 0) {
    claseDisponibilidad = estilos.completo;
  } else if (libres <= 3) {
    claseDisponibilidad = estilos.pocos;
  }

  const claseExpandida = expandido ? estilos.expandida : "";

  return (
    <article
      className={`${estilos.tarjeta} ${claseDisponibilidad} ${claseExpandida}`}
    >
      {/* Elemento condicional: badge "Nuevo" */}
      {esNuevo && <span className={estilos.badgeNuevo}>Nuevo</span>}

      <h2>{titulo}</h2>
      <p>Categoría: {categoria}</p>

      {libres === 0 ? (
        <p><strong>Completo</strong></p>
      ) : (
        <p>Cupos libres: {libres} de {cupo}</p>
      )}

      {/* Estilo en línea solo para el ancho dinamico de la barra de ocupación */}
      <div className={estilos.barraContenedor}>
        <div
          className={estilos.barraProgreso}
          style={{ width: `${porcentaje}%` }}
        ></div>
      </div>

      <button
        onClick={() => setExpandido(!expandido)}
        className="btn btn-outline-primary btn-sm mt-2"
      >
        {expandido ? "Ocultar detalles" : "Ver detalles"}
      </button>

      {/* Detalle desplegable según el estado expandido */}
      {expandido && (
        <div className="mt-3">
          <p>{descripcion || "Sin descripción disponible para este taller."}</p>
        </div>
      )}
    </article>
  );
}