import "./MusicReview.css";
function MusicReview(props) {
  const Name = props.title;
  const shortDescription = props.description;
  const image = props.image;
  const imageAlt = props.imageAlt;

  console.log(image);
  return (
    <div>
      <div className="reviewContainer">
        <div className="image-container">
          {" "}
          <img className="image" src={image} alt={imageAlt}></img>
          <div className="item-info-container">
            work on getting some stuff here. Dates, record label, star rating...
          </div>
        </div>

        <div className="title-description-container">
          <h1 className="title">{Name}</h1>
          <br></br>
          <div>
            <p> {shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicReview;
