import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './barraNavegacion.css'

const BarraNavegacion = () => {
  return (
    <Navbar bg="secondary" expand="lg" variant= 'dark'>
      <Container>
        <Navbar.Brand href="#home">
          <img id='logoNavbar' src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.625/c_scale,w_400/ncom/en_US/games/switch/n/new-super-mario-bros-u-deluxe-switch/description-image" alt="mario" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BarraNavegacion