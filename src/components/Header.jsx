import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import EmpDataServices from "../services/emp.services";

export const Header = () => {
  const handleLogOut = () => {
    EmpDataServices.logout();
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">E-manage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Nav className="me-end">
            <Nav.Link href="" onClick={handleLogOut}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
