function Clubs() {
  return (
    <section>
      <h1>Clubs & Student Activities</h1>

      <p className="page-intro">
        Student clubs at SRIT play a vital role in fostering technical skills,
        creativity, leadership, and teamwork beyond the classroom.
      </p>

      <div className="card-grid">
        <div className="info-card">
          <h3>Technical Clubs</h3>
          <ul>
            <li>Coding Club – Programming, DSA, Web Development</li>
            <li>AI & ML Club – Machine learning and data science activities</li>
            <li>Robotics Club – Robotics design and automation projects</li>
            <li>IoT Club – Embedded systems and smart applications</li>
            <li>
              Cyber Security Club – Ethical hacking and security awareness
            </li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Cultural Clubs</h3>
          <ul>
            <li>Dance Club – Classical and contemporary dance</li>
            <li>Music Club – Vocal and instrumental music</li>
            <li>Drama Club – Theatre and stage performances</li>
            <li>Photography Club – Creative photography and media</li>
            <li>Literary Club – Debates, writing, and public speaking</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Sports Clubs</h3>
          <ul>
            <li>Cricket & Football Clubs</li>
            <li>Volleyball & Basketball Clubs</li>
            <li>Indoor Games – Chess, Table Tennis</li>
            <li>Athletics & Fitness Activities</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Events & Achievements</h3>
          <ul>
            <li>Technical fests, hackathons, and coding competitions</li>
            <li>Cultural festivals and inter-college events</li>
            <li>Sports meets and championships</li>
            <li>Workshops, seminars, and guest lectures</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Clubs;
