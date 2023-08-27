import "./GearReviewsPage.css";
import GearReview from "../../Components/GearReviewsComp/GearReview.jsx";
import data from "../../assets/gearData.json";
function GearReviews() {
  return (
    <>
      <div>
        <h1>Gear Reviews: Turntables, Speakers, Stylus, Furniture etc...</h1>
        {data.map((item) => (
          <GearReview
            key={item.Model}
            title={item.Brand + " " + item.Model}
            description={`
          This area is for the review by a gear reviewer.  You can submit your own review`}
            releaseYear={item.ReleaseYear}
            type={item.Type}
            driveMethod={item.DriveMethoed}
            speeds={item.Speeds}
            features={item.Features}
            image={item.ImageUrl}
            imageAlt={"Image of " + item.Brand + " " + item.Model}
          />
        ))}
      </div>
    </>
  );
}

export default GearReviews;
