import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isProjectsSection = isHome && location.hash === "#projects";
  const isContactSection = isHome && location.hash === "#contact";

  return (
    <Navbar expand="lg" className="fariha-navbar">
      <Container fluid className="navbar-inner">
        <Navbar.Brand as={Link} to="/" className="navbar-brand-name">
          Fariha Ahmed
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" className="navbar-toggler-custom">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto navbar-links">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-link-item ${isHome && !location.hash ? "active-link" : ""}`}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              className={`nav-link-item ${location.pathname === "/about" ? "active-link" : ""}`}
            >
              About
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/#projects"
              className={`nav-link-item ${isProjectsSection ? "active-link" : ""}`}
            >
              Projects
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/#contact"
              className={`nav-link-item ${isContactSection ? "active-link" : ""}`}
            >
              Contact me!
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};