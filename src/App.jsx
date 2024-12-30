import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing React Router components

import Navbar from "./components/Navbar.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import Footer from "./components/Footer.jsx";
import Form from "./components/Form.jsx";
import SuccessPage from "./pages/SuccessPage.jsx"; // Import Success Page

import "./index.css";

function App() {
  return (
    <div className="bg-custom-gray dark:bg-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/contact" element={<Form />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
