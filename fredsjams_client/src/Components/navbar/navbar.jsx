import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import fredsjams from "../../assets/fredsjams.png";
import "./navbar.css";
function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/fredsjams_client_v2/" className="logo">
            <img src={fredsjams} alt="logo"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/Gear-Reviews">Gear Reviews</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/Music-Reviews">Music Reviews</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/Notes">Notes</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/News">News</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/About">About</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
