import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import { useState } from 'react'
import ScrollToTop from 'react-scroll-to-top'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
// import NavbarSection from 'react-daisyui/dist/Navbar/NavbarSection'
import 'bootstrap/dist/css/bootstrap.min.css';


import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = ({ name, ...props }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
        <header className='contenedor-header'>
        <div className="contenedor-nombre">
        <h3>Agustin Sosa</h3>
        </div>
            <nav>
                <Link to={'Sobremi'}><span>Sobre mi</span></Link>
                <Link to={'Proyectos'}><span>Proyectos</span></Link>
                <Link to={'Contactos'}><span>Contacto</span></Link>
            </nav>
        
        <div className="contenedor-slide" color='#E5BA73'>
        {['sm'].map((expand) => (
            <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="top"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Agustin Sosa
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link to={'Sobremi'} className='text-decoration-none link-slide'>
                    <Nav.Link href="#action1">Acerca de mi</Nav.Link>
                    </Link> 
                    <Link to={'Proyectos'} className='text-decoration-none link-slide'>
                        <Nav.Link href="#action2">Proyectos</Nav.Link>
                    </Link>             
                    <Link to={'Contactos'} className='text-decoration-none link-slide'>
                        <Nav.Link href='#action3'> Contacto</Nav.Link>
                    </Link>
                    </Nav>
                    
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        ))}
        </div>
        </header>
        <div className="contenedor-scroll-top">
        <ScrollToTop smooth className='scroll-top'/>

        </div>
        </>
    )
}

export default Header