function CE() {
  return (
    <section>
      <p className="breadcrumb">
        <a href="/">Home</a> / <a href="/departments">Departments</a> / Civil
        Engineering
      </p>

      <h1>Civil Engineering</h1>

      <p className="page-intro">
        The Department of Civil Engineering focuses on planning, design,
        construction, and maintenance of infrastructure essential for
        sustainable development.
      </p>

      <div className="card-grid">
        <div className="info-card">
          <h3>Core Focus Areas</h3>
          <ul>
            <li>Structural Engineering</li>
            <li>Transportation Engineering</li>
            <li>Geotechnical Engineering</li>
            <li>Environmental Engineering</li>
            <li>Construction Planning & Management</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Laboratories</h3>
          <ul>
            <li>Structural Engineering Lab</li>
            <li>Geotechnical Engineering Lab</li>
            <li>Environmental Engineering Lab</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Career Opportunities</h3>
          <ul>
            <li>Civil Engineer</li>
            <li>Structural Engineer</li>
            <li>Site Engineer</li>
            <li>Project Manager</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CE;
