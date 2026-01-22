import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Departments from "./pages/Departments";
import CSE from "./pages/Departments/CSE";
import ECE from "./pages/Departments/ECE";
import EEE from "./pages/Departments/EEE";
import ME from "./pages/Departments/ME";
import CE from "./pages/Departments/CE";
import Clubs from "./pages/Clubs";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />

        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/cse" element={<CSE />} />
        <Route path="/departments/ece" element={<ECE />} />
        <Route path="/departments/eee" element={<EEE />} />
        <Route path="/departments/me" element={<ME />} />
        <Route path="/departments/ce" element={<CE />} />

        <Route path="/clubs" element={<Clubs />} />
        <Route path="/contact" element={<Contact />} />
        <Route
  path="/"
  element={
    <>
      <Navbar transparent />
      <Home />
    </>
  }
/>

<Route
  path="*"
  element={
    <>
      <Navbar />
      <Routes>
        {/* other routes */}
      </Routes>
    </>
  }
/>

      </Routes>
      

      <Footer />
    </BrowserRouter>
  );
}

export default App;
