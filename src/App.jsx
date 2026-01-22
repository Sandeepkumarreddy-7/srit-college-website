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
import AdminDashboard from "./pages/AdminDashboard";
import ScrollToTop from "./components/ScrollToTop";


// Department pages
import Departments from "./pages/Departments";
import CSE from "./pages/Departments/CSE";
import AIDS from "./pages/Departments/AIDS";
import ECE from "./pages/Departments/ECE";
import EEE from "./pages/Departments/EEE";
import ME from "./pages/Departments/ME";
import CE from "./pages/Departments/CE";

function App() {
  return (
    <BrowserRouter>

      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<div>Home</div>} />

          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/cse" element={<CSE />} />
          <Route path="/departments/aids" element={<AIDS />} />
          <Route path="/departments/ece" element={<ECE />} />
          <Route path="/departments/eee" element={<EEE />} />
          <Route path="/departments/me" element={<ME />} />
          <Route path="/departments/ce" element={<CE />} />
        </Routes>
      </>

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
<Route path="/admin-dashboard" element={<AdminDashboard />} />

        
      </Routes>
      <ScrollToTop />
      <Footer />

    </BrowserRouter>
  );
}

export default App;
