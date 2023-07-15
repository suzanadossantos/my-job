import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Job from "./components/pages/Job";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/job" element={<Job />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;