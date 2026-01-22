function Clubs() {
  return (
    <section>
      <h1>Student Clubs & Activities</h1>
      <p className="page-intro">
        Student clubs at SRIT play a vital role in developing leadership,
        teamwork, creativity, and real-world skills.
      </p>

      <div className="card-grid">
        <div className="info-card">
          <h3>Technical & Professional Clubs</h3>
          <ul>
            <li>Software Development Club</li>
            <li>Coding & Competitive Programming Club</li>
            <li>Robotics & Innovation Club</li>
            <li>Cloud & DevOps Community</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Cultural & Creative Clubs</h3>
          <ul>
            <li>Photography & Media Club</li>
            <li>Music & Dance Club</li>
            <li>Fine Arts & Cultural Society</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Leadership & Community Clubs</h3>
          <ul>
            <li>Literary & Debate Club</li>
            <li>Sports & Fitness Club</li>
            <li>Social Service & NSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Clubs;
