import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { BsPersonFill } from "react-icons/bs";
import { SiYourtraveldottv } from "react-icons/si";


export const NavbarApp = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <a className="navbar-brand" href="/">
        <SiYourtraveldottv />
        </a>
        <Navbar.Brand href="/">Travels</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/register">Registro</Nav.Link>
            <Nav.Link href="post">Posts</Nav.Link>
            <Button href="login" variant="outline-secondary">
              <BsPersonFill />
            </Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
