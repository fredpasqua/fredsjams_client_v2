import notes from "../../assets/BlogHero.jpg";
import "./Notes.css";
import BlogCarousel from "../../Components/BlogComp/BlogTitleBoxArticleOne";
function Notes() {
  return (
    <>
      <div className="headerImageContainer">
        <div className="imageContainer">
          {" "}
          <img
            src={notes}
            alt="notes image"
            style={{ width: "400px", borderRadius: "10%", height: "350px" }}
          />
        </div>

        <div className="sliderContainer">
          <BlogCarousel className="carousel" />
        </div>
      </div>
    </>
  );
}

export default Notes;
