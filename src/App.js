import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Job from "./components/pages/Job";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/job" element={<Job />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;