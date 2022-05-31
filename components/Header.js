import {Navbar,Container,Nav} from 'react-bootstrap';
import style from '../styles/Header.module.css';
import Image from 'next/image';
function Header() {
  return (
    <>
          <Navbar bg="light" variant="light" fixed="top" className={style.navBar}>
              <Container>
                  <Navbar.Brand href="#home"><img src='https://kaspi.kz/img/Logo.svg'/></Navbar.Brand>
                  <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#features">Features</Nav.Link>
                      <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
              </Container>
          </Navbar>
    </>
  )
}

export default Header