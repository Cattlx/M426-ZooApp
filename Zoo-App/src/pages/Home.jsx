import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className="page home-page">
            <div className="hero hero-large">
                <div className="hero-content">
                    <span className="hero-badge">Willkommen im Zoo Erlebnis</span>
                    <h1>Entdecke Tiere, Abenteuer und unvergessliche Momente</h1>
                    <p className="hero-text">
                        Unsere Zoo-Website gibt dir einen spannenden Einblick in die Tierwelt,
                        hilft dir bei der Planung deines Besuchs und zeigt dir die beliebtesten
                        Bereiche, Tiere und Attraktionen. Egal ob du dich für majestätische
                        Löwen, beeindruckende Elefanten oder lustige Pinguine interessierst –
                        hier findest du alle wichtigen Informationen auf einen Blick.
                    </p>


                </div>
            </div>

            <div className="home-section intro-grid">
                <div className="info-box">
                    <h2>Ein Ort für die ganze Familie</h2>
                    <p>
                        Der Zoo ist ein Ort, an dem Kinder, Jugendliche und Erwachsene die
                        Tierwelt hautnah erleben können. Unsere Website soll Besuchern schon vor
                        dem eigentlichen Zoobesuch einen lebendigen Eindruck vermitteln und dabei
                        helfen, den Tag besser zu planen.
                    </p>
                    <p>
                        Neben spannenden Tierinformationen findest du auf der Website eine
                        Übersicht der wichtigsten Orte im Zoo, Bewertungen anderer Besucher und
                        eine Karte zur Orientierung.
                    </p>
                </div>

                <div className="info-box highlight-box">
                    <h2>Was dich auf der Website erwartet</h2>
                    <ul className="feature-list">
                        <li>Eine übersichtliche Startseite mit allen wichtigen Infos</li>
                        <li>Eine Tierliste mit Bildern und Detailseiten</li>
                        <li>Eine Karte zur besseren Orientierung im Zoo</li>
                        <li>Bewertungen und Erfahrungen anderer Besucher</li>
                        <li>Bereiche für Registrierung und persönliches Profil</li>
                    </ul>
                </div>
            </div>

            <div className="home-section">
                <h2>Unsere Highlights</h2>
                <div className="highlight-grid">
                    <div className="feature-card">
                        <h3>Tiere aus aller Welt</h3>
                        <p>
                            Entdecke verschiedene Tierarten aus Savannen, Wäldern, Polarregionen
                            und vielen weiteren Lebensräumen. Jedes Tier hat seine eigene
                            Detailseite mit spannenden Informationen.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>Einfach orientieren</h3>
                        <p>
                            Mit der Karte findest du schnell wichtige Orte wie Eingänge,
                            Attraktionen, Wege, Restaurant oder Spielplatz. So kannst du deinen
                            Besuch entspannter planen.
                        </p>
                    </div>

                    <div className="feature-card">
                        <h3>Bewertungen lesen</h3>
                        <p>
                            Besucher können den Zoo mit Sternen bewerten und ihre Meinung als Text
                            hinterlassen. Dadurch erhalten neue Besucher einen ehrlichen Eindruck.
                        </p>
                    </div>
                </div>
            </div>

            <div className="home-section visit-section">
                <div>
                    <h2>Plane deinen Besuch</h2>
                    <p>
                        Ein Zoobesuch ist am schönsten, wenn man schon vorher weiß, was man
                        sehen möchte. Vielleicht willst du zuerst zu den Großkatzen, danach zu
                        den Elefanten und später noch beim Restaurant oder auf dem Spielplatz
                        vorbeischauen. Mit unserer Website kannst du dir bereits im Voraus einen
                        Überblick verschaffen.
                    </p>
                    <p>
                        Besonders Familien profitieren davon, wenn sie wichtige Stationen schon
                        kennen. So bleibt mehr Zeit für das eigentliche Erlebnis vor Ort.
                    </p>
                </div>


            </div>

            <div className="home-section closing-box">
                <h2>Warum diese Website?</h2>
                <p>
                    Diese Website wurde entwickelt, um Informationen, Orientierung und
                    Benutzerfunktionen an einem Ort zusammenzuführen. Besucher sollen schnell
                    finden, was sie suchen, und gleichzeitig Lust bekommen, den Zoo selbst zu
                    entdecken. Durch die klare Struktur, anschauliche Inhalte und praktische
                    Funktionen entsteht ein moderner und benutzerfreundlicher Webauftritt.
                </p>
            </div>
        </section>
    );
}