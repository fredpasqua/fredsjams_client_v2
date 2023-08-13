import './mainSelector.css';
import reviewHero from '../../assets/ReviewsHero.jpg';
import musicReviewsHero from '../../assets/MusicReviewsHero.jpg';
import newsHero from '../../assets/NewsHero.jpg';
import blogHero from '../../assets/BlogHero.jpg';
function MainPage() {
  return (
    <div className="grid-container">
      <div className="grid-item">  
        <img
        src={reviewHero}
        alt="Gear Reviews Hero"/>
      </div>
     
    
      <div className="grid-item">
        <img
          src={musicReviewsHero}
          alt="Music Reviews Hero"
        />
     </div>
      <div className="grid-item">  <img
        src={blogHero}
        alt="Blog Hero"
    
      /></div>
      <div className="grid-item"> <img
        
        alt="News Hero"
        src={newsHero}
    
      /></div>
     
    </div>
    
  )
}

export default MainPage