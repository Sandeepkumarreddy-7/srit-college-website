function Home() {
  return (
    <>
    <section className="hero">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="hero-video"
  >
    <source src="/videos/hero-bg.mp4" type="video/mp4" />

  </video>

  <div className="hero-overlay">
    <h1>Welcome to SRIT</h1>
    <p>
      Empowering students with knowledge, innovation, and industry-ready skills.
    </p>
    <div className="hero-badges">
  <span>NBA Accredited</span>
  <span>NAAC A+</span>
  <span>Autonomous</span>
</div>

    <button className="hero-btn">Explore Courses</button>
  </div>
</section>


      {/* COURSES SECTION */}
     <section id="academics" className="courses">

        <h2 className="section-title">Our Academic Programs</h2>

        <div className="course-grid">
          <div className="course-card fade-in">
            <h3>Computer Science & Engineering</h3>
            <p>
              Software development, AI, data science, cloud computing,
              and modern technologies.
            </p>
          </div>

          <div className="course-card fade-in">
            <h3>Electronics & Communication Engineering</h3>
            <p>
              Embedded systems, VLSI, communication networks, and electronics.
            </p>
          </div>

          <div className="course-card fade-in">
            <h3>Electrical & Electronics Engineering</h3>
            <p>e
              Power systems, control systems, and electrical technologies.
            </p>
          </div>

          <div className="course-card fade-in">
            <h3>Mechanical Engineering</h3>
            <p>
              Design, manufacturing, thermal sciences, and industrial engineering.
            </p>

          </div>
          <div className="course-card fade-in">
            <h3>Civil Engineering</h3>
            <p>
              Structural engineering, construction management, and environmental
              engineering.
            </p>
          </div>
        </div>
      </section>

    {/* PLACEMENT PARTNERS */}
<section className="placements">
  <h2 className="section-title">Our Placement Partners</h2>

  <div className="logo-slider">
    <div className="logo-track">
<div className="logo-track">
  <img src="/logos/tcs.png" alt="TCS" />
  <img src="/logos/infosys.png" alt="Infosys" />
  <img src="/logos/wipro.png" alt="Wipro" />
  <img src="/logos/accenture.png" alt="Accenture" />
  <img src="/logos/cognizant.png" alt="Cognizant" />

  <img src="/logos/amazon.png" alt="Amazon" />

</div>

    </div>
  </div>
</section>

      {/* ACCREDITATIONS SECTION */}
      <section className="accreditations">
        <h2 className="section-title">Accreditations & Recognitions</h2>

        <div className="accreditation-cards">
          <div className="accreditation-card fade-in">
            <h3>NBA Accredited</h3>
            <p>
              Accredited by the National Board of Accreditation (NBA)
              for maintaining high standards in technical education.
            </p>
          </div>

          <div className="accreditation-card fade-in">
            <h3>NAAC – ‘A’ Grade</h3>
            <p>
              Awarded ‘A’ Grade by NAAC for excellence in academics,
              infrastructure, and governance.
            </p>
          </div>
        </div>
      </section>

      {/* STUDENT CLUBS SECTION */}
      <section className="clubs">
        <h2 className="section-title">Student Clubs</h2>
        <p className="clubs-subtitle">
          Encouraging leadership, creativity, and innovation beyond academics.
        </p>

        <div className="clubs-grid">
          <div className="club-card fade-in">
            <h3>Technical Club</h3>
            <p>Hackathons, coding contests, workshops, and projects.</p>
          </div>

          <div className="club-card fade-in">
            <h3>Cultural Club</h3>
            <p>Dance, music, drama, and cultural events.</p>
          </div>

          <div className="club-card fade-in">
            <h3>Sports Club</h3>
            <p>Indoor & outdoor sports, tournaments, and fitness activities.</p>
          </div>

          <div className="club-card fade-in">
            <h3>Innovation Club</h3>
            <p>Startup ideas, research initiatives, and product development.</p>
          </div>
        </div>
      </section>

      {/* NOTICES & ANNOUNCEMENTS */}
      <section className="notices">
        <h2 className="section-title">Notices & Announcements</h2>

        <div className="notice-list">
          <div className="notice-item fade-in">
            <a href="/circulars">📢 Circulars</a>
            <span>View latest college circulars and announcements</span>
          </div>

          <div className="notice-item fade-in">
            <a href="/exam-notifications">📝 Exam Notifications</a>
            <span>Check examination schedules and updates</span>
          </div>
        </div>
        {/* EVENTS & CALENDAR */}
<section className="events">
  <h2 className="section-title">Upcoming Events</h2>

  <div className="events-grid">
    <div className="event-card fade-in">
      <h4>Jan 25, 2026</h4>
      <p>Cloud Computing Workshop</p>
    </div>

    <div className="event-card fade-in">
      <h4>Feb 02, 2026</h4>
      <p>NBA Accreditation Review Visit</p>
    </div>

    <div className="event-card fade-in">
      <h4>Feb 10, 2026</h4>
      <p>Internal Hackathon – SDC</p>
    </div>

    <div className="event-card fade-in">
      <h4>Mar 05, 2026</h4>
      <p>End Semester Examinations</p>
    </div>
  </div>
  {/* WHY SRIT SECTION */}
<section className="why-srit">
  <h2 className="section-title">Why SRIT?</h2>

  <div className="why-grid">
    <div className="why-card fade-in">
      <h3>Experienced Faculty</h3>
      <p>Highly qualified faculty with strong academic and industry background.</p>
    </div>

    <div className="why-card fade-in">
      <h3>Industry-Oriented Curriculum</h3>
      <p>Programs aligned with industry needs and emerging technologies.</p>
    </div>

    <div className="why-card fade-in">
      <h3>Excellent Placements</h3>
      <p>Strong placement support with top recruiters.</p>
    </div>
  </div>
</section>
{/* QUICK LINKS */}
<section className="quick-links">
  <h2 className="section-title">Quick Links</h2>

  <div className="quick-grid">
    <a href="/academics">Academics</a>
    <a href="/departments">Departments</a>
    <a href="/clubs">Student Clubs</a>
    <a href="/contact">Contact Us</a>
  </div>
</section>
{/* PRINCIPAL MESSAGE */}
<section className="principal">
  <h2 className="section-title">Message from the Principal</h2>
  <p className="principal-text fade-in">
    “At SRIT, we strive to nurture innovation, discipline, and excellence,
    preparing students to meet global challenges with confidence.”
  </p>
</section>

</section>

      </section>
  
    </>
  );
}

export default Home;
