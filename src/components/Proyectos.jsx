import React from 'react'
import '../styles/proyectos.css'
import dwCaptura from './assets/proyecto-dw.png'
import jsCaptura from './assets/proyecto-js.png'
import reactCaptura from './assets/proyecto-react.png'
// import reactCaptura2 from './assets/proyecto-react-2.png'
const Proyectos = () => {
  return (
    <>
    <div className="contenedor">
      <div className="contenedor-nav-rapida">
      <aside>
        <h5>Front End </h5>
        <ul>
          <li><a href="#proyecto-dw">Desarollo Web</a></li>
          <li><a href="#proyecto-js">Javascript</a></li>
          <li><a href="#proyecto-react">React JS</a></li>
        </ul>
      </aside>
      </div>
      <div className="contenedor-proyectos">
        <h2>Front End</h2>
        <section className="contenedor-proyecto" id='proyecto-dw'>
        <h3>Desarrollo Web</h3>
        <a href="https://github.com/Agus-Sosa/proyecto-desarrollo-web-Agustin-Sosa">
        <img 
        // src='./assets/Afterlife.png'
        src={dwCaptura}
        alt="" />
        </a>
        <p>Primer proyecto que hice como desarrollador Front End, utilizando lo basico para crear sitios web.</p>
        <p>El proyecto que realice fue un Ecommerce de Videojuegos, utilizando lo basico (HTML, CSS)</p>
        <div className="contenedor-herramientas">
          <h4>Herramientas</h4>
          <p>HTML, CSS, SASS, BOOTSTRAP, GIT, GITHUB</p>
        </div>
        </section>
        <div className="division"></div>
        <section className="contenedor-proyecto" id='proyecto-js'>
          <h3>Javascript</h3>
          <a href="https://github.com/Agus-Sosa/Proyecto-javascript-Agustin-Sosa">
            <img 
            src={jsCaptura}
            alt="" />
          </a>
          <p>Segundo Proyecto que realice en el segundo curso, utilizando Javascript vanilla.</p>
          <p>El Segundo proyecto realice fue una web dedicada a series, utilizando Javascript vanilla, hice la creacion del apartado de favoritos y tambien el apartado de las suscripciones </p>
          <div className="contenedor-herramientas">
            <h4>Herramientas</h4>
            <p>HTML, CSS, SASS, JS</p>
          </div>
        </section>
        <div className="division"></div>
        <section className="contenedor-proyecto" id='proyecto-react'>
          <h3>React Js</h3>
          <a href="">
            <img 
            src={reactCaptura}
            alt="" />
          </a>
          <p>Tercer Proyecto que realice en el ultimo curso de Desarrollador Front End, React JS</p>
          <p>Lo realizado en este proyecto fue crear un sitio web Ecommerce, con metodo de pagos y extraer datos de los productos desde una base de datos (FireBase).
            En la misma utilice bastantes librerias para mejorar la experiencia de la pagina 
          </p>
          <div className="contenedor-herramientas">
            <h4>Herramientas</h4>
            <p>HTML, CSS, REACT.JS, TAILWIND, DAISY UI, FIREBASE </p>
          </div>
        </section>
      </div>
    </div>
    </>
    )
}

export default Proyectos