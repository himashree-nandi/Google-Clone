import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/SearchPage/SearchPage";
// import { BrowserRouter ,Route,Router } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
