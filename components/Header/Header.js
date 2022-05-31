import {Navbar,Container,Nav} from 'react-bootstrap';
import style from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
function Header() {
  return (
    <>
          <Navbar bg="light" variant="light" fixed="top" className={style.navBar}>
              <Container>
              <Link href="/" passHref><Navbar.Brand><img src='https://kaspi.kz/img/Logo.svg'/></Navbar.Brand></Link>
                  <Nav className="me-auto">
                      <Link href="/" passHref><Nav.Link >На главную</Nav.Link></Link>
                      <Link  href="/bizkredit" passHref><Nav.Link >Бизнес</Nav.Link></Link>
                      <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
              </Container>
          </Navbar>
    </>
  )
}

export default Header