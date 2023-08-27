import "./GearReviewsPage.css";
import GearReview from "../../Components/GearReviewsComp/GearReview.jsx";
import data from "../../assets/gearData.json";
import { useLayoutEffect } from "react";
function GearReviews() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div>
        <h1>Turntables, Speakers, and More...</h1>
        {data.map((item) => (
          <GearReview
            key={item.Model}
            title={item.Brand + " " + item.Model}
            description={`
          This area is for the review by a gear reviewer.  You can submit your own review`}
            releaseYear={item.ReleaseYear}
            type={item.Type}
            driveMethod={item.DriveMethod}
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
