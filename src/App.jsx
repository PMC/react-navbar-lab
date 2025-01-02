import { useState } from "react";
import React from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, Services } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
