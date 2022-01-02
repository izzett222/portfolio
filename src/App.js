import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";
import ChatApp from "./views/ChatApp";
import LandingPage from "./views/LandingPage";
import MyTools from "./views/myTools";
import NotFound from './views/NotFound'

function App() {
  return (
    <Router>
    <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/chat-app" element={<ChatApp />} />
        <Route exact path="/my-tools" element={<MyTools />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default App;
