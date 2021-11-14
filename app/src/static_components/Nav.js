import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MyNave({ singout }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Clocking App</Navbar.Brand>
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
              onChange={(_) => {
                localStorage.setItem("token", false);
                singout(false);
              }}
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNave;
