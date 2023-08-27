import notes from "../../assets/BlogHero.jpg";
import "./Notes.css";
function Notes() {
  return (
    <>
      {" "}
      <div className="grid-container">
        <div className="grid-item">
          {" "}
          <img src={notes} alt="notes image" />
        </div>
      </div>
      <h1>Coming Soon</h1>
    </>
  );
}

export default Notes;
