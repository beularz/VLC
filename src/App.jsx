import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login"; // if file is login.jsx
import Signup from "./pages/Signup";
import VlcPlayer from "./components/MediaPlayer"; // Your actual player page
import ResetPassword from "./components/ResetPassword";
import NewPassword from "./pages/NewPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/player" element={<VlcPlayer />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password/:token" element={<NewPassword />} />
        

      </Routes>
    </Router>
  );
}

export default App;