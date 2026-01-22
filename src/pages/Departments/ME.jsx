function ME() {
  return (
    <section>
      <p className="breadcrumb">
        <a href="/">Home</a> / <a href="/departments">Departments</a> /
        Mechanical Engineering
      </p>
      <h1>Mechanical Engineering</h1>

      <p className="page-intro">
        The Department of Mechanical Engineering focuses on design,
        manufacturing, thermal sciences, and mechanical systems that support
        industrial growth and innovation.
      </p>

      <div className="card-grid">
        <div className="info-card">
          <h3>Core Focus Areas</h3>
          <ul>
            <li>Design Engineering</li>
            <li>Manufacturing Technology</li>
            <li>Thermal Engineering</li>
            <li>Robotics & Automation</li>
            <li>Industrial Engineering</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Laboratories</h3>
          <ul>
            <li>Thermal Engineering Lab</li>
            <li>CAD / CAM Lab</li>
            <li>Manufacturing Processes Lab</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Career Opportunities</h3>
          <ul>
            <li>Design Engineer</li>
            <li>Manufacturing Engineer</li>
            <li>Quality Engineer</li>
            <li>Automation Engineer</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ME;
