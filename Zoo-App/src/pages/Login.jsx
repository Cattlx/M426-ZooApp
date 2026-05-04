import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const result = loginUser(formData.email, formData.password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/");
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-icon">🦁</div>

        <h1>Einloggen</h1>
        <p>Melde dich bei deinem ZooApp Konto an</p>

        {error && <p className="auth-error">{error}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>E-Mail</label>
          <input name="email" type="email" onChange={handleChange} placeholder="name@beispiel.ch" required />

          <label>Passwort</label>
          <input name="password" type="password" onChange={handleChange} placeholder="********" required />

          <button type="submit">Einloggen</button>
        </form>

        <div className="auth-switch">
          Noch kein Konto? <Link to="/registrieren">Registrieren</Link>
        </div>
      </div>
    </section>
  );
}