import { Route, Routes } from "react-router-dom";

// Componets (Componentes)
import HomePage from "../HomePage";
import About from "../About";
import Courses from "../Courses";
import Contact from "../Contact";
import DetailBloq from "../DetailBloq";

export default function Container() {
  return (
    <>
      <Routes>
        {/* 1.-Ruta Principal - HomePage */}
        {/* Ruta para la página de inicio */}
        <Route
          path="/"
          element={
            <>
              <HomePage/>
            </>
          }
        ></Route>

        {/* 2.-Ruta Nosotros - About */}
        {/* Ruta para nosotros - About */}
        <Route
          path="/about"
          element={
            <>
              <About/>
            </>
          }
        ></Route>

        {/* 3.-Ruta Cursos - Courses */}
        {/* Ruta para los cursos */}
        <Route
          path="/courses"
          element={
            <>
              <Courses/>
            </>
          }
        ></Route>

        {/* 4.-Ruta Contactos - Contact */}
        {/* Ruta para los contactos */}
        <Route
          path="/contact"
          element={
            <>
              <Contact/>
            </>
          }
        ></Route>

        {/* 5.-Ruta Detalle de Bloq - Detail Bloq */}
        {/* Ruta para los detalles por bloq */}
        <Route
          path="/detailBloq"
          element={
            <>
              <DetailBloq/>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}
