import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    getLoggedInUser,
    logoutUser,
    updateLoggedInUser,
} from "../utils/auth";

export default function Profile() {
    const navigate = useNavigate();
    const user = getLoggedInUser();

    const [formData, setFormData] = useState({
        vorname: user?.vorname || "",
        nachname: user?.nachname || "",
        email: user?.email || "",
        password: user?.password || "",
    });

    const [message, setMessage] = useState("");

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSave(e) {
        e.preventDefault();

        const updatedUser = {
            ...user,
            ...formData,
        };

        updateLoggedInUser(updatedUser);
        setMessage("Deine Daten wurden gespeichert.");
    }

    function handleLogout() {
        logoutUser();
        navigate("/login");
    }

    return (
        <section className="auth-page">
            <div className="auth-card">
                <div className="auth-icon">🦁</div>

                <h1>Mein Profil</h1>
                <p>Hier kannst du deine persönlichen Daten ansehen und bearbeiten.</p>

                {message && <p className="auth-success">{message}</p>}

                <form className="auth-form" onSubmit={handleSave}>
                    <label>Vorname</label>
                    <input
                        name="vorname"
                        value={formData.vorname}
                        onChange={handleChange}
                        required
                    />

                    <label>Nachname</label>
                    <input
                        name="nachname"
                        value={formData.nachname}
                        onChange={handleChange}
                        required
                    />

                    <label>E-Mail</label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Passwort</label>
                    <input
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Daten speichern</button>
                </form>

                <button className="logout-button" onClick={handleLogout}>
                    Ausloggen
                </button>
            </div>
        </section>
    );
}