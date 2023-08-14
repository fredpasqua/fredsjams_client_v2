import newsHero from "../../assets/NewsHero.jpg";
function News() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <img src={newsHero} alt="Gear Reviews Hero" />
      </div>
    </div>
  );
}

export default News;
