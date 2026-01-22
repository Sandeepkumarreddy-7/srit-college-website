import { Link } from "react-router-dom";
import logo from "../assets/srit-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="SRIT Logo" className="logo-img" />
        <span className="logo-text">SRIT</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
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


        {/* ABOUT */}
        <li className="dropdown">
          <Link to="/about">About</Link>
          <ul className="dropdown-menu">
            <li><Link to="/about">Overview</Link></li>
          </ul>
        </li> 

        {/* ACADEMICS */}
        <li className="dropdown">
          <Link to="/academics">Academics</Link>
          <ul className="dropdown-menu">
            <li><Link to="/departments">Departments</Link></li>
          </ul>
        </li>

        <li><Link to="/contact">Contact</Link></li>
        <li className="dropdown">
          
        </li>
        <li><Link to="/clubs">Clubs</Link></li>
        
      </ul>
    </nav>
     
  );

}

export default Navbar;
