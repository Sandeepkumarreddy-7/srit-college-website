import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutOverview from "./pages/AboutOverview";
import Academics from "./pages/Academics";
import Departments from "./pages/Departments";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import Clubs from "./pages/Clubs";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutOverview />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/clubs" element={<Clubs />} />


      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
