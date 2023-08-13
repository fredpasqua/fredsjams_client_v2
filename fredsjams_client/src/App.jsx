import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainPage from "./Components/mainSelectors/MainPage.jsx";
import MusicReviews from "./Pages/MusicReviews.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/fredsjams_client_v2/" element={<MainPage />} />
      <Route path="/Music-Reviews/" element={<MusicReviews />} />
      {/* <Route path="music-reviews" element={<MusicReviews />} />
      <Route path="gear-reviews" element={<GearReviews />} /> */}
    </>
  )
);
function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
