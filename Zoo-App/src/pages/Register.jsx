import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../utils/auth";

export default function Register() {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        vorname: "",
        nachname: "",
        email: "",
        password: "",
        confirmPassword: "",
        agb: false,
    });

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError("");

        if (!formData.agb) {
            setError("Du musst die AGB akzeptieren.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Die Passwörter stimmen nicht überein.");
            return;
        }

        const result = registerUser(formData);

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

                <h1>Konto erstellen</h1>
                <p>Werde Teil der ZooApp Community</p>

                {error && <p className="auth-error">{error}</p>}

                <form className="auth-form" onSubmit={handleSubmit}>
                    <label>Vorname</label>
                    <input name="vorname" onChange={handleChange} placeholder="Dein Vorname" required />

                    <label>Nachname</label>
                    <input name="nachname" onChange={handleChange} placeholder="Dein Nachname" required />

                    <label>E-Mail</label>
                    <input name="email" type="email" onChange={handleChange} placeholder="name@beispiel.ch" required />

                    <label>Passwort</label>
                    <input name="password" type="password" onChange={handleChange} placeholder="********" required />

                    <label>Passwort bestätigen</label>
                    <input name="confirmPassword" type="password" onChange={handleChange} placeholder="********" required />

                    <label className="checkbox-row">
                        <input name="agb" type="checkbox" onChange={handleChange} />
                        Ich akzeptiere die AGB
                    </label>

                    <button type="submit">Jetzt registrieren</button>
                </form>

                <div className="auth-switch">
                    Bereits Konto? <Link to="/login">Einloggen</Link>
                </div>
            </div>
        </section>
    );
}