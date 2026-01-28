import { NavLink, Outlet } from "react-router-dom";

function Departments() {
  return (
    <section className="departments-layout">
      {/* LEFT SIDEBAR */}
      <aside className="dept-sidebar">
        <h2>Departments</h2>

        <NavLink to="cse" className="dept-link">CSE</NavLink>
        <NavLink to="aids" className="dept-link">AI & DS</NavLink>
        <NavLink to="ece" className="dept-link">ECE</NavLink>
        <NavLink to="eee" className="dept-link">EEE</NavLink>
        <NavLink to="me" className="dept-link">Mechanical</NavLink>
        <NavLink to="ce" className="dept-link">Civil</NavLink>
      </aside>

      {/* RIGHT CONTENT */}
      <div className="dept-content">
        <Outlet />
      </div>
    </section>
  );
}

export default Departments;
