import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import LandingPage from "./views/LandingPage";
import NotFound from './views/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default App;
