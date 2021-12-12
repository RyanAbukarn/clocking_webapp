import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AppNavbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const authLinks = (
    <>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">My teams</Nav.Link>
          <Nav.Link href="#deets">My daily activies</Nav.Link>
          <Nav.Link href="#pricing">My logs</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">My account</Nav.Link>
          <Button
            variant="outline-success"
            onClick={(_) => {
              localStorage.setItem("token", false);
              localStorage.setItem("userInfo", "");

              setIsAuthenticated(false);
              navigate("/");
            }}
          >
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </>
  );

  const guestLinks = (
    <Nav>
      <Link className="nav-link" to="/">
        Login
      </Link>
    </Nav>
  );
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Clocking App</Navbar.Brand>
        {isAuthenticated ? authLinks : guestLinks}
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
