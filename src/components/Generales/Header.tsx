import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="contenedor">
        <div className="barra">
          <Link to={"/"}>
            <a className="logo">
              <h1 className="logo__nombre no-margin centrar-texto">
                Blog<span className="logo__bold">DeCafé</span>
              </h1>
            </a>
          </Link>

          <nav className="navegacion">
            <Link to={"/about"}>
              <a className="navegacion__enlace">Nosotros</a>
            </Link>

            <Link to={"/courses"}>
              <a className="navegacion__enlace">Cursos</a>
            </Link>

            <Link to={"/contact"}>
              <a className="navegacion__enlace">Contacto</a>
            </Link>
          </nav>
        </div>
      </div>

      <div className="header__texto">
        <h2 className="no-margin">Blog de café con consejos y cursos</h2>
        <p className="no-margin">
          Aprende de los expertos con las mejores recetas y consejos
        </p>
      </div>
    </header>
  );
}
