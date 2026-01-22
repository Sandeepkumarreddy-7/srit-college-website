function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Welcome to SRIT College</h1>
        <p>
          Empowering students through quality education, innovation,
          and industry-ready skills.
        </p>
        <button className="hero-btn">Explore Courses</button>
      </section>
      {/* ACCREDITATIONS SECTION */}
<section className="accreditations">
  <h2>Accreditations & Recognitions</h2>

  <div className="accreditation-cards">
    <div className="accreditation-card">
      <h3>NBA Accredited</h3>
      <p>
        Accredited by the National Board of Accreditation (NBA) for maintaining
        high standards in technical education.
      </p>
    </div>

    <div className="accreditation-card">
      <h3>NAAC – ‘A’ Grade</h3>
      <p>
        Awarded ‘A’ Grade by NAAC for excellence in academics, infrastructure,
        and institutional governance.
      </p>
    </div>
  </div>
</section>
{/* NOTICES & ANNOUNCEMENTS */}
<section className="notices">
  <h2>Notices & Announcements</h2>

  <div className="notice-list">
    <div className="notice-item">
      <a href="/circulars">📢 Circulars</a>
      <span>View latest college circulars and announcements</span>
    </div>

    <div className="notice-item">
      <a href="/exam-notifications">📝 Exam Notifications</a>
      <span>Check examination schedules and updates</span>
    </div>
  </div>
</section>



      {/* COURSES SECTION */}
      <section className="courses">
        <h2>Our Branches</h2>

        <div className="course-grid">
          <div className="course-card">
            <h3>Computer Science & Engineering</h3>
            <p>
              Focused on software development, AI, data science, and
              modern computing technologies.
            </p>
          </div>

          <div className="course-card">
            <h3>Electronics & Communication Engineering</h3>
            <p>
              Covers embedded systems, VLSI, communication networks,
              and electronics design.
            </p>
          </div>

          <div className="course-card">
            <h3>Electrical & Electronics Engineering</h3>
            <p>
              Emphasizes power systems, control systems, and
              electrical technologies.
            </p>
          </div>

          <div className="course-card">
            <h3>Mechanical Engineering</h3>
            <p>
              Deals with design, manufacturing, thermal sciences,
              and industrial engineering.
            </p>

          </div>
          <div className="course-card">
            <h3>Civil Engineering</h3>
            <p>
              Deals with design, manufacturing, thermal sciences,
              and industrial engineering.
            </p>
            
          </div>
        </div>
      </section>  
      {/* PLACEMENTS SECTION */}
<section className="stats">
  <div className="stat-card">
    <h2>3000+</h2>
    <p>Students</p>
  </div>
  <div className="stat-card">
    <h2>90%</h2>
    <p>Placement Rate</p>
  </div>
  <div className="stat-card">
    <h2>150+</h2>
    <p>Recruiters</p>
  </div>
  <div className="stat-card">
    <h2>₹12 LPA</h2>
    <p>Highest Package</p>
  </div>
</section>

    </>
  );
}

export default Home;
