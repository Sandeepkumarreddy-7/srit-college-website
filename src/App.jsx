import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import Clubs from "./pages/Clubs";
import Circulars from "./pages/Circulars";
import ExamNotifications from "./pages/ExamNotifications";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/student-login" element={<StudentLogin />} />
                <Route path="/faculty-login" element={<FacultyLogin />} />
                <Route path="/clubs" element={<Clubs />} />
                <Route path="/circulars" element={<Circulars />} />
<Route path="/exam-notifications" element={<ExamNotifications />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
