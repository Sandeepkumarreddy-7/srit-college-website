import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Departments from "./pages/Departments";
import Clubs from "./pages/Clubs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/departments/*" element={<Departments />} />
        <Route path="/clubs" element={<Clubs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
