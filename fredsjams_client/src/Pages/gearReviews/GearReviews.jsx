import "./GearReviews.css";
import reviewHero from "../../assets/ReviewsHero.jpg";
function GearReviews() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <h1>Coming Soon</h1>
          <img src={reviewHero} alt="Gear Reviews Hero" />
        </div>
      </div>
    </>
  );
}

export default GearReviews;
