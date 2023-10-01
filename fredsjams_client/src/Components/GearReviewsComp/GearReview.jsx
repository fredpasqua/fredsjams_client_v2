import "./GearReviews.css";
function GearReview(props) {
  const title = props.title;
  const shortDescription = props.description;
  const image = props.image;
  const imageAlt = props.imageAlt;
  const driveMethod = props.driveMethod;
  const releaseYear = props.releaseYear;
  const type = props.type;
  const speeds = props.speeds;
  const features = props.features;
  console.log(image);
  return (
    <div>
      <div className="reviewContainer">
        <h1 className="title">{title}</h1>
        <div className="product-imageinfo-container">
          <div className="image-container">
            {" "}
            <img
              className="image"
              src={image}
              alt={imageAlt}
              loading="lazy"
            ></img>
          </div>

          <div className="item-info-container">
            <ul className="info-list">
              <li>Release Year: {releaseYear}</li>
              <li>Type: {type}</li>
              <li>Drive Method: {driveMethod} </li>
              <li>Speeds: {speeds}</li>
              <li>Features: {features}</li>
            </ul>
          </div>
        </div>

        <div className="title-description-container">
          <hr></hr>
          <h3 className="date">Posted: June 1, 2023</h3>
          <h3 className="date">Reviewer: Staff Reviewer</h3>
          <h3 className="descriptionHeader"> Description: </h3>
          <p>{shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default GearReview;
