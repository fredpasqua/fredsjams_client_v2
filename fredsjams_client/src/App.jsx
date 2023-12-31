import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Footer from "./Components/footer/footer.jsx";
import Navigation from "./Components/navbar/navbar.jsx";
import MainPage from "./Components/mainSelectors/MainPage.jsx";
import MusicReviews from "./Pages/MusicReviews/MusicReviews.jsx";
import GearReviews from "./Pages/gearReviews/GearReviewsPage.jsx";
import Notes from "./Pages/Notes/Notes.jsx";
import News from "./Pages/News/News.jsx";
import About from "./Pages/About/About.jsx";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Music-Reviews/" element={<MusicReviews />} />
          <Route path="/Gear-Reviews/" element={<GearReviews />} />
          <Route path="/Notes/" element={<Notes />} />
          <Route path="/News/" element={<News />} />
          <Route path="/About/" element={<About />} />
        </Routes>

        <Footer />
      </HashRouter>
    </>
  );
}

export default App
