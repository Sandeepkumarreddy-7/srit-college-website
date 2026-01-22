import { NavLink, Outlet } from "react-router-dom";

function DepartmentsLayout() {
  return (
    <div className="dept-layout">
      {/* Sidebar */}
      <aside className="dept-sidebar">
        <h3>Departments</h3>
        <NavLink to="/departments/cse">CSE</NavLink>
        <NavLink to="/departments/ece">ECE</NavLink>
        <NavLink to="/departments/eee">EEE</NavLink>
        <NavLink to="/departments/me">ME</NavLink>
        <NavLink to="/departments/ce">CE</NavLink>
      </aside>

      {/* Content */}
      <main className="dept-content">
        <Outlet />
      </main>
    </div>
  );
}

export default DepartmentsLayout;
