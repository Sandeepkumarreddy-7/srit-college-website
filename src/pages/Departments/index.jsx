import { Link } from "react-router-dom";

function Departments() {
  return (
    <section className="departments">
      <h1>Departments</h1>
      <p>Select a department to explore details.</p>

      <div className="departments-grid">
        <Link to="/departments/cse" className="dept-card">CSE</Link>
        <Link to="/departments/ece" className="dept-card">ECE</Link>
        <Link to="/departments/eee" className="dept-card">EEE</Link>
        <Link to="/departments/me" className="dept-card">ME</Link>
        <Link to="/departments/ce" className="dept-card">CE</Link>
      </div>
    </section>
  );
}

export default Departments;
