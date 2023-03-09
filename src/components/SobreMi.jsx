import React from 'react'
import '../styles/sobremi.css'
import {DiHtml5,DiCss3, DiJavascript1, DiReact} from 'react-icons/di'
const SobreMi = () => {
    return (
        <>
        <div className="contenedor">
            <div className="contenedor-sobre-mi">
                <h2 className='text-3xl font-bold underline'>Sobre Mi</h2>
                <p>Estudiante de CoderHouse, he desarrollado el curso completo de Desarrollador Front End, 
                    actualmente estoy estudiando Desarrollo Backend para convertirme en Desarrollador Full Stack, 
                    acompañado de la programación ando estudiando Ingles.</p>
            </div>
            <div className="contenedor-skills">
            <h2>Skills</h2>
                <p>HTML, CSS, Javacript, React JS</p>
            </div>
        </div>
        </>
        )
}

export default SobreMi