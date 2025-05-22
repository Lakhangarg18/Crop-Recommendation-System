import { useState } from "react";

import CropRecommendation from "./CropRecommendation";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact.jsx";
import Weather from "./components/Weather.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="crop-recommendation" element={<CropRecommendation />} />
          <Route path="weather-forecast" element={<Weather />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
