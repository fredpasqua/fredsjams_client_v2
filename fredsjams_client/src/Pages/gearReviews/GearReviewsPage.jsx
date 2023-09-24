import "./GearReviewsPage.css";
import GearReview from "../../Components/GearReviewsComp/GearReview.jsx";
import data from "../../assets/gearData.json";

import { useLayoutEffect, useState, useEffect } from "react";

function GearReviews() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const [searchInput, setSearchInput] = useState("");
  const [articles, setArticles] = useState(data);
  const [filteredArticles, setFilteredArticles] = useState(data);

  const handleSearchInput = (event) => {
    const input = event.target.value;
    setSearchInput(input);

    const filtered = articles.filter((article) => {
      const searchText = `${article.Brand} ${article.Type} ${article.Model} ${article.Features} ${article.DriveMethod} ${article.Speeds} ${article.Content}`;
      return searchText.toLowerCase().includes(input.toLowerCase());
    });

    setFilteredArticles(filtered);
  };
  const handleClearSearchInput = (event) => {
    const input = "";
    setSearchInput(input);

    const filtered = articles.filter((article) => {
      const searchText = `${article.Brand} ${article.Type} ${article.Model} ${article.Features} ${article.DriveMethod} ${article.Speeds} ${article.Content}`;
      return searchText.toLowerCase().includes(input.toLowerCase());
    });

    setFilteredArticles(filtered);
  };
  return (
    <>
      <div className="gearReview">
        <h1>Turntables, Speakers, and More...</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search articles"
            value={searchInput}
            onChange={handleSearchInput}
            className="searchInput"
          />

          <button
            value=""
            className="searchButton"
            onClick={() => handleClearSearchInput()}
          >
            Clear Search
          </button>
          <p className="article-count">
            viewing {filteredArticles.length} reviews from {articles.length}{" "}
            total searched.
          </p>
        </div>

        {filteredArticles.map((item) => (
          <GearReview
            key={item.Model}
            title={item.Brand + " " + item.Model}
            description={item.Content}
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
