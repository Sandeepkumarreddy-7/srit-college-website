function StudentLogin() {
  return (
    <section className="login-page">
      <h1>Student Login</h1>

      <form className="login-form">
        <input type="text" placeholder="Student ID" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default StudentLogin;
