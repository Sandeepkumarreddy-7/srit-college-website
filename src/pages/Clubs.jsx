function Clubs() {
  return (
    <section className="clubs">
      <h1>Student Clubs</h1>
      <p className="clubs-subtitle">
        Encouraging innovation, leadership, and creativity beyond academics.
      </p>

      <div className="clubs-grid">
        <div className="club-card">
          <h3>Technical Club</h3>
          <p>Hackathons, Toastmaster, workshops, and project development.</p>
        </div>

        <div className="club-card">
          <h3>Cultural Club</h3>
          <p>Shutterbugs</p>
        </div>

        <div className="club-card">
          <h3>Sports Club</h3>
          <p>Indoor & outdoor sports, tournaments, and fitness activities.</p>
        </div>

        <div className="club-card">
          <h3>Innovation Club</h3>
          <p>Startup ideas, product building, and research initiatives.</p>
        </div>
      </div>
    </section>
  );
}

export default Clubs;
