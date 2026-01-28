function CSE() {
  return (
    <section>
      <p className="breadcrumb">
        <a href="/">Home</a> / <a href="/departments">Departments</a> / CSE
      </p>

      <h1>Computer Science & Engineering</h1>

      <p className="page-intro">
        The CSE department focuses on software development, AI, cloud computing,
        and industry-ready skills.
      </p>

      {/* BIG CARDS */}
      <div className="dept-big-grid">
        <div className="dept-big-card">
          <h3>Core Areas</h3>
          <ul>
            <li>DSA</li>
            <li>AI & ML</li>
            <li>Cloud Computing</li>
            <li>Web Development</li>
          </ul>
        </div>

        <div className="dept-big-card">
          <h3>Laboratories</h3>
          <ul>
            <li>Programming Lab</li>
            <li>DBMS Lab</li>
            <li>AI & ML Lab</li>
          </ul>
        </div>

        <div className="dept-big-card">
          <h3>Career Paths</h3>
          <ul>
            <li>Software Engineer</li>
            <li>Data Scientist</li>
            <li>Cloud Engineer</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CSE;
