function AdminDashboard() {
  return (
    <section className="admin">
      <h1>Admin Dashboard</h1>
      <p>This panel is for authorized administrators only.</p>

      <div className="admin-grid">
        <div className="admin-card">
          <h3>Upload Circular</h3>
          <button>Upload</button>
        </div>

        <div className="admin-card">
          <h3>Upload Exam Notification</h3>
          <button>Upload</button>
        </div>

        <div className="admin-card">
          <h3>Add Event</h3>
          <button>Add</button>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
