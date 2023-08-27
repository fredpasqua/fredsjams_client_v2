import MusicReview from "../../Components/MusicReviewsComp/MusicReview";
import data from "../../assets/data.json";
import "./MusicReviews.css";
import { useLayoutEffect } from "react";

function MusicReviews() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div>
        <h1>Music Reviews, LPs, CDs, Streaming and More...</h1>
        {data.map((item) => (
          <MusicReview
            key={item.Album}
            title={item.Album}
            description={`
          This area is for the review by a music critical listener.  You can submit your own review`}
            artist={item.Artist}
            releasedOn={"Columbia House Records"}
            releaseYear={item.ReleaseYear}
            rating={item.Rating}
            genre={item.Genre}
            style={item.Style}
            format={item.Format}
            image={item.ImageUrl}
          />
        ))}
      </div>
    </>
  );
}

export default MusicReviews;
