import estilos from "./Boton.module.css";

export default function Boton({
  children,
  onClick,
  variante = "primario",
  activo = false,
  className = "",
  ...props
}) {
 
  const claseVariante = estilos[variante] || estilos.primario;
  

  const claseActivo = activo ? estilos.activo : "";

  return (
    <button
      onClick={onClick}
      className={`${estilos.boton} ${claseVariante} ${claseActivo} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}