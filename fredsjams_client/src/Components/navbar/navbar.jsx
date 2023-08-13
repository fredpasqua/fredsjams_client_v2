import "./navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import fredsjams from "../../assets/fredsjams.png";
function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-custom"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand>
          <Link className="logo" to="/fredsjams_client_v2/">
            <img src={fredsjams} alt="logo"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Gear Reviews</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Music Reviews</NavDropdown.Item>

              <NavDropdown.Item href="#action5">Notes</NavDropdown.Item>
              <NavDropdown.Item href="#action5">News</NavDropdown.Item>
              <NavDropdown.Item href="#action5">About</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
