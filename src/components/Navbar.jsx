import { Link } from "react-router-dom";
import logo from "../assets/srit-logo.png";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img src={logo} alt="SRIT Logo" className="logo-img" />
        <span className="logo-text">SRIT</span>
      </div>

      <ul className="nav-links">
        <li className="dropdown">
          <span className="dropdown-title">Login</span>
          <ul className="dropdown-menu">
            <li>
              <Link to="/student-login">Student Login</Link>
            </li>
            <li>
              <Link to="/faculty-login">Faculty Login</Link>
            </li>
          </ul>
        </li>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/academics">Academics</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/clubs">Clubs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
