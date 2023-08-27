import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import fredsjams from "../../assets/fredsjams.png";
import "./navbar.css";
import { useState } from "react";
function Navigation() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      collapseOnSelect
      data-bs-theme="dark"
      expanded={expanded}
      expand="lg"
      sticky="top"
      className="navOpacity"
    >
      <Navbar.Brand>
        <Link to="/fredsjams_client_v2/" onClick={() => setExpanded(false)}>
          <img className="logo" src={fredsjams} alt="logo"></img>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse collapseOnSelect id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Item>
            <Nav.Link
              eventKey="1"
              as={Link}
              to="/Gear-Reviews"
              onClick={() => setExpanded(!expanded)}
            >
              Gear Reviews
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="2"
              as={Link}
              to="/Music-Reviews"
              onClick={() => setExpanded(!expanded)}
            >
              Music Reviews
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="3"
              as={Link}
              to="/Notes"
              onClick={() => setExpanded(!expanded)}
            >
              Notes
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="4"
              as={Link}
              to="/News"
              onClick={() => setExpanded(!expanded)}
            >
              News
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="5"
              as={Link}
              to="/About"
              onClick={() => setExpanded(!expanded)}
            >
              About
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
