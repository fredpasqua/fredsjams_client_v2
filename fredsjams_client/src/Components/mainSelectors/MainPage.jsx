import "./MainPage.css";
import Footer from "../footer/footer";
import Navigate from "../navbar/navbar.jsx";
import reviewHero from "../../assets/ReviewsHero.jpg";
import musicReviewsHero from "../../assets/MusicReviewsHero.jpg";
import newsHero from "../../assets/NewsHero.jpg";
import blogHero from "../../assets/BlogHero.jpg";
import { Link } from "react-router-dom";
function MainPage() {
  return (
    <>
      {/* <Navigate /> */}
      <div className="grid-container">
        <div className="grid-item">
          <Link to="/Gear-Reviews">
            <img src={reviewHero} alt="Gear Reviews Hero" />
          </Link>
        </div>

        <div className="grid-item">
          <Link to="/Music-Reviews">
            <img src={musicReviewsHero} alt="Music Reviews Hero" />
          </Link>
        </div>
        <div className="grid-item">
          {" "}
          <img src={blogHero} alt="Blog Hero" />
        </div>
        <div className="grid-item">
          {" "}
          <img alt="News Hero" src={newsHero} />
        </div>
      </div>
      {/* // <Footer /> */}
    </>
  );
}

export default MainPage;
