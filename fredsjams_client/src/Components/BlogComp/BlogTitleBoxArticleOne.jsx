import Carousel from "react-bootstrap/Carousel";
import Data from "../../assets/articlesData.json";
import "./Blog.css";
function BlogCarousel() {
  return (
    <Carousel
      indicators={false}
      controls={false}
      className="carousel"
      slide={true}
      data-bs-theme="dark"
      fade={false}
    >
      <Carousel.Item className="titleOne">
        <p>Coming Soon!</p>
        <h1>{Data[1].title}</h1>
      </Carousel.Item>

      <Carousel.Item className="titleOne">
        <p>Coming Soon!</p>
        <h1>{Data[1].title}</h1>
      </Carousel.Item>
      <Carousel.Item className="titleOne">
        <p>Coming Soon!</p>
        <h1>{Data[2].title}</h1>
      </Carousel.Item>
    </Carousel>
  );
}

export default BlogCarousel;
