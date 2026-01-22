function FacultyLogin() {
  return (
    <section className="login-page">
      <h1>Faculty Login</h1>

      <form className="login-form">
        <input type="text" placeholder="Faculty ID" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default FacultyLogin;
