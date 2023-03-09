import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import ScrollToTop from 'react-scroll-to-top'
// import NavbarSection from 'react-daisyui/dist/Navbar/NavbarSection'


const Header = () => {
    return (
        <>
        <section className='contenedor-header'>
        <div className="contenedor-nombre">
        <h3>Agustin Sosa</h3>
        </div>
        <div className='contenedor-links'>
            <nav>
                <Link to={'Sobremi'}><span>Sobre mi</span></Link>
                <Link to={'Proyectos'}><span>Proyectos</span></Link>
                <Link to={'Contactos'}><span>Contacto</span></Link>
            </nav>
        </div>
        </section>
        <div className="contenedor-scroll-top">
        <ScrollToTop smooth className='scroll-top'/>

        </div>
        </>
    )
}

export default Header