import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import fredsjams from "../../assets/fredsjams.png";
import "./navbar.css";
function Navigation() {
  return (
    <Navbar collapseOnSelect data-bs-theme="dark" expand="lg">
      <Navbar.Brand>
        <Link to="/fredsjams_client_v2/" className="logo">
          <img src={fredsjams} alt="logo"></img>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse collapseOnSelect id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Item>
            <Nav.Link eventKey="1" as={Link} to="/Gear-Reviews">
              Gear Reviews
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" as={Link} to="/Music-Reviews">
              Music Reviews
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" as={Link} to="/Notes">
              Notes
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4" as={Link} to="/News">
              News
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="5" as={Link} to="/About">
              About
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
