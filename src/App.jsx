import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login"; // if file is login.jsx
import Signup from "./pages/Signup";
import VlcPlayer from "./components/MediaPlayer"; // Your actual player page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/player" element={<VlcPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;