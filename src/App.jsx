import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Department pages
import Departments from "./pages/Departments";
import CSE from "./pages/Departments/CSE";
import AIDS from "./pages/Departments/AIDS";
import ECE from "./pages/Departments/ECE";
import EEE from "./pages/Departments/EEE";
import ME from "./pages/Departments/ME";
import CE from "./pages/Departments/CE";
import Clubs from "./pages/Clubs";

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
          <Route path="/Clubs" element={<Clubs />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
