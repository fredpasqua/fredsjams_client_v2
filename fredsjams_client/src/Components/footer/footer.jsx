import "./footer.css";
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
          <a href="#">Home</a>
        </li>

        <li className="list-inline-item">
          <a href="#">About</a>
        </li>
      </ul>
      <p className="copyright">FredsJams © 2021</p>
    </footer>
  );
}

export default Footer;
