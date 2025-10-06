import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import IndexPage from "./components/Index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route index element={<IndexPage />} /> */}
        <Route path="/" element={<Navigate to="/krishna" />} />

        <Route path="/krishna" element={<IndexPage />} />
      </Routes>
    </Router>
  );
}

export default App;
