import "./GearReviewsPage.css";
import GearReview from "../../Components/GearReviewsComp/GearReview.jsx";
import data from "../../assets/gearData.json";
import { useLayoutEffect, useState } from "react";
function GearReviews() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const [searchInput, setSearchInput] = useState("");
  const [articles] = useState(data);
  const [filteredArticles, setFilteredArticles] = useState([]);

  const handleSearchInput = (event) => {
    const input = event.target.value;
    setSearchInput(input);

    const filtered = articles.filter((article) => {
      const searchText = `${article.Brand} ${article.Type} ${article.Model} ${article.Features} ${article.DriveMethod} ${article.Speeds}`;
      return searchText.toLowerCase().includes(input.toLowerCase());
    });

    setFilteredArticles(filtered);
  };

  return (
    <>
      <div className="gearReview">
        <h1>Turntables, Speakers, and More...</h1>
        <div>
          <p>Filter Results</p>
          <input
            type="text"
            placeholder="Search articles"
            value={searchInput}
            onChange={handleSearchInput}
          />
        </div>

        {filteredArticles.map((item) => (
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
