import "./MusicReview.css";
function MusicReview(props) {
  const Name = props.title;
  const shortDescription = props.description;
  const image = props.image;
  const imageAlt = props.imageAlt;
  const releasedOn = props.releasedOn;
  const Artist = props.artist;
  const Rating = props.rating;
  const releaseYear = props.releaseYear;
  console.log(image);
  return (
    <div>
      <div className="reviewContainer">
        <h1 className="title">{Name}</h1>
        <div className="image-container">
          {" "}
          <img className="image" src={image} alt={imageAlt}></img>
          <div className="item-info-container">
            <ul className="info-list">
              <h2>{Artist}</h2>
              <li>Release Year: {releaseYear}</li>
              <li>Released On: {releasedOn}</li>
              <li>Rating: {Rating} </li>
              <li>Genre:</li>
              <li>Style:</li>
              <li>Format:</li>
            </ul>
          </div>
        </div>

        <div className="title-description-container">
          <hr></hr>
          <p> {shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default MusicReview;
