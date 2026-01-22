import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <h2 className="logo-text">SRIT</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* LOGIN DROPDOWN */}
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

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/academics">Academics</Link>
        </li>

        <li>
          <Link to="/departments">Departments</Link>
        </li>

        <li>
          <Link to="/clubs">Clubs</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
  