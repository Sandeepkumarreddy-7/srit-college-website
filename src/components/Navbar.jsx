import { Link, useLocation } from "react-router-dom";
import logo from "../assets/srit-logo.png";
import { useEffect, useState } from "react";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    if (isHome) {
      window.addEventListener("scroll", onScroll);
    } else {
      setScrolled(true);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <nav
      className={`navbar 
        ${isHome ? "navbar-home" : "navbar-solid"} 
        ${scrolled ? "navbar-scrolled" : ""}
      `}
    >
      {/* LOGO */}
      <div className="logo-container">
        <img src={logo} alt="SRIT Logo" className="logo-img" />
        <span className="logo-text">SRIT</span>
      </div>

      {/* NAV LINKS */}
      <ul className="nav-links">
        {/* LOGIN DROPDOWN (ORANGE BUTTON – SAME AS BEFORE) */}
        <li className="dropdown login-dropdown">
          <span className="dropdown-title login-btn">Login</span>
          <ul className="dropdown-menu">
            <li><Link to="/student-login">Student Login</Link></li>
            <li><Link to="/faculty-login">Faculty Login</Link></li>
          </ul>
        </li>

        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>

        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>

        <li className={location.pathname === "/academics" ? "active" : ""}>
          <Link to="/academics">Academics</Link>
        </li>

        {/* ===== MEGA MENU – DEPARTMENTS ===== */}
        <li className="mega-dropdown">
          <span className="mega-title">Departments</span>

          <div className="mega-menu">
            <div className="mega-column">
              <h4>Computer Science</h4>
              <Link to="/departments/cse">CSE</Link>
              <Link to="/departments/aids">AI & Data Science</Link>
            </div>

            <div className="mega-column">
              <h4>Electronics</h4>
              <Link to="/departments/ece">ECE</Link>
              <Link to="/departments/eee">EEE</Link>
            </div>

            <div className="mega-column">
              <h4>Core Engineering</h4>
              <Link to="/departments/me">Mechanical</Link>
              <Link to="/departments/ce">Civil</Link>
            </div>
          </div>
        </li>

        <li className={location.pathname === "/clubs" ? "active" : ""}>
          <Link to="/clubs">Clubs</Link>
        </li>

        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
  