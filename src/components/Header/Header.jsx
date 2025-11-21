import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './Header.module.css'; 
import logo from '../../assets/images/il-mio-logo.webp'

const Header = () => {
  return (
    <header>
      <Navbar fixed="top" expand="xl" className={styles.navbar} collapseOnSelect>
        <Container className={`header-container ${styles.headerContainer}`}>
          <Navbar.Brand href="/portfolio/" className={styles.logo}>
            <img src={logo} className={styles.myLogo} alt="logo" />
          </Navbar.Brand>
          <div className={styles.headerMobile}>
            <a className={styles.btnHeaderMobile} href="#cta">Contattami</a>
            <Navbar.Toggle aria-controls="navbarNavDropdown" className={styles.navbarToggler} />
          </div>
          <Navbar.Collapse id="navbarNavDropdown" className="justify-content-end">
            <Nav className={`navbar-nav ${styles.desktopMenu}`}>
              <Nav.Item className={`nav-item ${styles.navDesktop}`}>
                <Nav.Link href="#job" className={`nav-link ${styles.navLink}`}>I miei progetti</Nav.Link>
              </Nav.Item>

              {/* Mobile menu items */}
              <Nav.Item className={`nav-item ${styles.navMobile}`}>
                <Nav.Link href="#job" className={`nav-link ${styles.navLink}`}>I miei progetti</Nav.Link>
              </Nav.Item>

              <div className={styles.containerBtnHeader}>
                <a className={styles.btnHeader} href="#cta">Contattami</a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
