import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className="page home-page">
            <div className="hero hero-large">
                <div className="hero-content">
                    <span className="hero-badge">Willkommen im Zoo</span>
                    <h1>Entdecke die Tierwelt</h1>
                    <p className="hero-text">
                        Dein digitaler Begleiter durch den Zoo.
                    </p>
                    <div className="hero-actions">
                        <Link to="/tiere" className="button button-primary">
                            Tiere entdecken
                        </Link>
                        <Link to="/karte" className="button button-secondary">
                            Karte ansehen
                        </Link>
                    </div>
                </div>
                <div className="hero-banner-box">
                    <div className="hero-banner-placeholder">
                        <span>Hero-Bild / Banner</span>
                    </div>
                </div>
            </div>

            <div className="home-section highlight-panel">
                <h2>Highlights</h2>
                <div className="highlight-grid">
                    <article className="feature-card feature-card-large">
                        <div className="feature-card-top">
                            <span className="feature-icon">🦁</span>
                            <strong>Löwe</strong>
                        </div>
                        <p>Savanne</p>
                    </article>
                    <article className="feature-card feature-card-large">
                        <div className="feature-card-top">
                            <span className="feature-icon">🐘</span>
                            <strong>Elefant</strong>
                        </div>
                        <p>Afrika</p>
                    </article>
                </div>
            </div>
        </section>
    );
}