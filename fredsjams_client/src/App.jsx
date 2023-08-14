import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./Components/footer/footer.jsx";
import Navigate from "./Components/navbar/navbar.jsx";
import MainPage from "./Components/mainSelectors/MainPage.jsx";
import MusicReviews from "./Pages/MusicReviews/MusicReviews.jsx";
import GearReviews from "./Pages/gearReviews/GearReviews.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigate />
        <Routes>
          <Route exact path="/fredsjams_client_v2/" element={<MainPage />} />
          <Route path="/Music-Reviews/" element={<MusicReviews />} />
          <Route path="/Gear-Reviews/" element={<GearReviews />} />
          <Route path="/Notes/" element={<Notes />} />
          <Route path="/News/" element={<News />} />
          <Route path="/About/" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
