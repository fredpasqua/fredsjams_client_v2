import newsHero from "../../assets/NewsHero.jpg";
function News() {
  return (
    <>
      {" "}
      <div className="grid-container">
        <div className="grid-item">
          <img src={newsHero} alt="Gear Reviews Hero" />
        </div>
      </div>
      <h1>Coming Soon</h1>
    </>
  );
}

export default News;
