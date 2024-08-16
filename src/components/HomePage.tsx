import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="contenedor contenido-principal">
      <main className="blog">
        <h3>Nuestro Blog</h3>

        <article className="entrada">
          <div className="entrada__imagen">
            <picture>
              {/* <source loading="lazy"  srcset="img/blog1.webp" type="image/webp"/> */}
              <img loading="lazy" src="img/blog1.jpg" alt="imagen blog" />
            </picture>
          </div>

          <div className="entrada__contenido">
            <h4 className="no-margin">Tipos de Grano de Café</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, rerum, reprehenderit consequatur perferendis officia,
              vitae fuga animi temporibus itaque atque reiciendis ea excepturi!
              Molestias aperiam fugiat deleniti laudantium atque numquam?
            </p>

            <Link to={"/detailBloq"}>
              <a href="entrada.html" className="boton boton--primario">
                Leer Entrada
              </a>
            </Link>
          </div>
        </article>

        <article className="entrada">
          <div className="entrada__imagen">
            <picture>
              {/* <source loading="lazy"  srcset="img/blog2.webp" type="image/webp"> */}
              <img loading="lazy" src="img/blog2.jpg" alt="imagen blog" />
            </picture>
          </div>

          <div className="entrada__contenido">
            <h4 className="no-margin">3 Deliciosas Recetas de Café</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, rerum, reprehenderit consequatur perferendis officia,
              vitae fuga animi temporibus itaque atque reiciendis ea excepturi!
              Molestias aperiam fugiat deleniti laudantium atque numquam?
            </p>
            <Link to={"/detailBloq"}>
              <a href="entrada.html" className="boton boton--primario">
                Leer Entrada
              </a>
            </Link>
          </div>
        </article>

        <article className="entrada">
          <div className="entrada__imagen">
            <picture>
              {/* <source loading="lazy"  srcset="img/blog3.webp" type="image/webp"> */}
              <img loading="lazy" src="img/blog3.jpg" alt="imagen blog" />
            </picture>
          </div>

          <div className="entrada__contenido">
            <h4 className="no-margin">Beneficios del Café</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, rerum, reprehenderit consequatur perferendis officia,
              vitae fuga animi temporibus itaque atque reiciendis ea excepturi!
              Molestias aperiam fugiat deleniti laudantium atque numquam?
            </p>
            <Link to={"/detailBloq"}>
              <a href="entrada.html" className="boton boton--primario">
                Leer Entrada
              </a>
            </Link>
          </div>
        </article>
      </main>

      <aside className="sidebar">
        <h3>Nuestros Cursos y Talleres</h3>

        <ul className="cursos no-padding">
          <li className="widget-curso">
            <h4 className="no-margin">Técnicas de Extracción de Café</h4>
            <p className="widget-curso__label">
              Precio:
              <span className="widget-curso__info">Gratis</span>
            </p>
            <p className="widget-curso__label">
              Cupo:
              <span className="widget-curso__info">20</span>
            </p>
            <a href="entrada.html" className="boton boton--secundario">
              Más Información sobre nuestros cursos
            </a>
          </li>

          <li className="widget-curso">
            <h4 className="no-margin">4 Recetas de Café para Principiantes</h4>
            <p className="widget-curso__label">
              Precio:
              <span className="widget-curso__info">Gratis</span>
            </p>
            <p className="widget-curso__label">
              Cupo:
              <span className="widget-curso__info">20</span>
            </p>
            <a href="entrada.html" className="boton boton--secundario">
              Más Información sobre nuestros cursos
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
