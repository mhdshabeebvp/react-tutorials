import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
// import "./Signup.css";
// import Signup from "./Signup";
function App() {
  return (
    // <div className="sign-up-container">
    //   <Signup />
    // </div>

    // routing methods in react
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
