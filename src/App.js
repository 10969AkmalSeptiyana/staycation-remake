import "assets/scss/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/properties/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
