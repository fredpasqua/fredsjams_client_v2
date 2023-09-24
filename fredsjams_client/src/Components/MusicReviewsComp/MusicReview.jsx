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
  const genre = props.genre;
  const style = props.style;
  const format = props.format;
  console.log(image);
  return (
    <div>
      <div className="reviewContainer">
        <h1 className="title">{Name}</h1>
        <div className="music-review-top-container">
          {" "}
          <img className="image" src={image} alt={imageAlt}></img>
          <div className="item-info-container">
            <ul className="info-list">
              <h2>{Artist}</h2>
              <li>Release Year: {releaseYear}</li>
              <li>Label: {releasedOn}</li>
              <li>Rating: {Rating} </li>
              <li>Genre: {genre}</li>
              <li>Style: {style}</li>
              <li>Format: {format}</li>
            </ul>
          </div>
        </div>

        <div className="title-description-container">
          <hr></hr>
          <h3 className="date">Posted: June 1, 2023</h3>
          <h3 className="date">Reviewer: Staff Reviewer</h3>
          <p> {shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default MusicReview;
