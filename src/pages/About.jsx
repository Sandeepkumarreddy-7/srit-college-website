function About() {
  return (
    <section className="about-page">
      {/* ABOUT INTRO */}
      <div className="about-intro">
        <h1>About SRIT</h1>
        <p>
          Srinivasa Ramanujan Institute of Technology (SRIT) is dedicated to academic
          excellence, innovation, and holistic development. The institution
          empowers students with strong technical foundations, ethical values,
          and industry-ready skills.
        </p>
      </div>

      {/* PRINCIPAL MESSAGE */}
      <div className="principal fade-in">
        <h2>Principal’s Message</h2>
        <p className="principal-text">
          “At SRIT, we believe education is not just about knowledge, but about
          shaping responsible professionals and leaders. Our focus is on
          outcome-based education, research culture, and industry collaboration
          to prepare students for global challenges.”
        </p>
      </div>

      {/* MANAGEMENT */}
      <div className="management fade-in">
        <h2>Management</h2>
        <p>
          SRIT is managed by visionary leaders committed to excellence in
          technical education, research, and innovation. The management
          continuously supports infrastructure development and faculty growth.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="timeline fade-in">
        <h2>Our Journey</h2>
        <ul>
          <li><span>2008</span> – Institution Established</li>
          <li><span>2012</span> – First Batch Graduated</li>
          <li><span>2016</span> – NBA Accreditation</li>
          <li><span>2020</span> – NAAC Accreditation</li>
          <li><span>2023</span> – Expanded Research & Placements</li>
        </ul>
      </div>

      {/* ACCREDITATIONS */}
      <div className="accreditation fade-in">
        <h2>Accreditations & Approvals</h2>
        <div className="accreditation-grid">
          <div className="accreditation-card">AICTE Approved</div>
          <div className="accreditation-card">Affiliated to JNTU</div>
          <div className="accreditation-card">NBA Accredited</div>
          <div className="accreditation-card">NAAC Accredited</div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats fade-in">
        <div className="stat-card">
          <h2>15+</h2>
          <p>Years of Excellence</p>
        </div>
        <div className="stat-card">
          <h2>3000+</h2>
          <p>Students</p>
        </div>
        <div className="stat-card">
          <h2>200+</h2>
          <p>Faculty Members</p>
        </div>
        <div className="stat-card">
          <h2>500+</h2>
          <p>Placements Every Year</p>
        </div>
      </div>
    </section>
  );
}

export default About;
