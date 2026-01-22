<p className="breadcrumb">
  Home / Departments / Artificial Intelligence & Data Science
</p>;

import { Link } from "react-router-dom";

function Departments() {
  return (
    <section>
      <h1>Departments</h1>
      <p className="page-intro">
        Each department at SRIT functions as an independent academic unit
        dedicated to excellence in teaching, research, and innovation.
      </p>

      <div className="card-grid">
        <Link to="/departments/cse" className="info-card link-card">
          <h3>Computer Science & Engineering</h3>
          <p>Software systems, AI, data science, and core computing.</p>
        </Link>
        <Link to="/departments/cse" className="info-card link-card">
          <h3>Computer Science & Engineering</h3>
          <p>Software systems, AI, data science, and core computing.</p>
        </Link>

        <Link to="/departments/aids" className="info-card link-card">
          <h3>Artificial Intelligence & Data Science</h3>
          <p>Machine learning, analytics, and intelligent systems.</p>
        </Link>

        <Link to="/departments/ece" className="info-card link-card">
          <h3>Electronics & Communication Engineering</h3>
          <p>Communication systems, VLSI, and electronics.</p>
        </Link>

        <Link to="/departments/eee" className="info-card link-card">
          <h3>Electrical & Electronics Engineering</h3>
          <p>Power systems, control engineering, and automation.</p>
        </Link>

        <Link to="/departments/me" className="info-card link-card">
          <h3>Mechanical Engineering</h3>
          <p>Design, manufacturing, and thermal engineering.</p>
        </Link>

        <Link to="/departments/ce" className="info-card link-card">
          <h3>Civil Engineering</h3>
          <p>Infrastructure, construction, and sustainability.</p>
        </Link>
      </div>
    </section>
  );
}

export default Departments;
