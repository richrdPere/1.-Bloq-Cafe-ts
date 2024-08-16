export default function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor">
        <div className="barra">
          <a className="logo" href="index.html">
            <h1 className="logo__nombre no-margin centrar-texto">
              Blog<span className="logo__bold">DeCafé</span>
            </h1>
          </a>

          <nav className="navegacion">
            <a href="nosotros.html" className="navegacion__enlace">
              Nosotros
            </a>
            <a href="cursos.html" className="navegacion__enlace">
              Cursos
            </a>
            <a href="contacto.html" className="navegacion__enlace">
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
