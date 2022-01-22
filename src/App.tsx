import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DocuSign from "./pages/DocuSign";
import Email from "./pages/Email";
import Password from "./pages/Password";
import PopularCategories from "./pages/PopularCategories";
import Register from "./pages/Register";
import Verification from "./pages/Verification";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/email" element={<Email />} />
        <Route path="/password" element={<Password />} />
        <Route path="/popular-categories" element={<PopularCategories />} />
        <Route path="/docu-sign" element={<DocuSign />} />
      </Routes>
    </Router>
  );
};

export default App;
