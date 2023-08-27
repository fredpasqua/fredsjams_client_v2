import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <a href="#">
          <i className="icon ion-social-twitter"></i>
        </a>
        <a href="#">
          <i className="icon ion-social-facebook"></i>
        </a>
      </div>
      <ul className="list-inline">
        <li className="list-inline-item">
          <Link to="/fredsjams_client_v2/" className="logo">
            Home
          </Link>
        </li>

        <li className="list-inline-item">
          <Link to="/About">About</Link>
        </li>
      </ul>
      <p className="copyright">FredsJams © 2021</p>
    </footer>
  );
}

export default Footer;
