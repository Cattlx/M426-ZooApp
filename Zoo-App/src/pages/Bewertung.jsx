import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const TIERE_DATA = [
  { id: 1, name: "Afrikanischer Löwe", emoji: "🦁", kategorie: "Säugetiere", herkunft: "Savanne", rating: 4.8, gewicht: "180 kg", alter: "15 Jahre", bewertungen: 42, beschreibung: "Der Afrikanische Löwe ist ein majestätisches Raubtier und König der Tiere. Mit seiner imposanten Mähne und kraftvollen Körperbau dominiert er die afrikanischen Savannen. Er lebt in Rudeln und ist ein Spitzenjäger der afrikanischen Savanne." },
  { id: 2, name: "Elefant", emoji: "🐘", kategorie: "Säugetiere", herkunft: "Afrika", rating: 4.9, gewicht: "6000 kg", alter: "60 Jahre", bewertungen: 38, beschreibung: "Der Afrikanische Elefant ist das größte Landtier und zeichnet sich durch bemerkenswerte Intelligenz und starkes Sozialverhalten aus." },
  { id: 3, name: "Giraffe", emoji: "🦒", kategorie: "Säugetiere", herkunft: "Savanne", rating: 4.7, gewicht: "1200 kg", alter: "25 Jahre", bewertungen: 35, beschreibung: "Die Giraffe ist das höchste Landtier und ein elegantes Symbol Afrikas. Ihre lange Halswirbelsäule ermöglicht ihr das Fressen von Baumblättern." },
  { id: 4, name: "Pinguin", emoji: "🐧", kategorie: "Vogel", herkunft: "Antarktis", rating: 4.9, gewicht: "30 kg", alter: "20 Jahre", bewertungen: 41, beschreibung: "Der Pinguin ist ein faszinierender flugunfähiger Vogel mit perfekter Anpassung an das Wasserleben. Er lebt in großen Kolonien." },
  { id: 5, name: "Krokodil", emoji: "🐊", kategorie: "Reptil", herkunft: "Wasser", rating: 4.5, gewicht: "400 kg", alter: "45 Jahre", bewertungen: 28, beschreibung: "Das Krokodil ist eines der ältesten und gefährlichsten Reptilien der Welt. Es ist ein perfekter Jäger in Flüssen und Seen." },
  { id: 6, name: "Adler", emoji: "🦅", kategorie: "Vogel", herkunft: "Berge", rating: 4.6, gewicht: "5 kg", alter: "30 Jahre", bewertungen: 33, beschreibung: "Der Adler ist ein stolzer und majestätischer Raubvogel mit außergewöhnlichem Sehvermögen. Er ist das Wappentier vieler Länder." },
];

const INITIAL_REVIEWS = [
  { id: 1, tierId: 1, name: "Max", sterne: 5, text: "Der Löwe war beeindruckend!", datum: "12.04.2026" },
  { id: 2, tierId: 1, name: "Anna", sterne: 4, text: "Sehr schönes Gehege, der Löwe war aber beim Schlafen.", datum: "10.04.2026" },
  { id: 3, tierId: 2, name: "Lukas", sterne: 5, text: "Riesiger Elefant! Wirklich ein Erlebnis.", datum: "08.04.2026" },
  { id: 4, tierId: 3, name: "Sarah", sterne: 4, text: "Die Giraffen sind so elegant.", datum: "05.04.2026" },
  { id: 5, tierId: 4, name: "Tom", sterne: 5, text: "Pinguine sind einfach die Besten!", datum: "01.04.2026" },
  { id: 6, tierId: 5, name: "Julia", sterne: 4, text: "Das Krokodil war gruselig aber faszinierend.", datum: "28.03.2026" },
  { id: 7, tierId: 6, name: "David", sterne: 5, text: "Der Adler ist so majestätisch.", datum: "25.03.2026" },
];

export default function Bewertung() {
  const { id } = useParams();
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [formName, setFormName] = useState("");
  const [formText, setFormText] = useState("");
  const [formSterne, setFormSterne] = useState(0);
  const [hoverSterne, setHoverSterne] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    document.body.style.background = "linear-gradient(180deg, #f0f4f0 0%, #e8f0e8 100%)";
    return () => {
      document.body.style.background =
        "radial-gradient(circle at top left, rgba(47, 128, 237, 0.18), transparent 22%), radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.16), transparent 20%), linear-gradient(180deg, #061b2f 0%, #0d2436 100%)";
    };
  }, []);

  if (!id) {
    return (
      <section className="page bewertung-page">
        <div className="bewertung-empty">
          <span className="bewertung-empty-icon">⭐</span>
          <h1>Bewertungen</h1>
          <p>Wähle ein Tier aus, um Bewertungen zu lesen oder selbst eine zu schreiben.</p>
          <Link to="/tiere" className="button button-primary" style={{ marginTop: "1rem" }}>
            Tiere entdecken
          </Link>
        </div>
      </section>
    );
  }

  const tier = TIERE_DATA.find((t) => t.id === parseInt(id));

  if (!tier) {
    return (
      <section className="page bewertung-page">
        <Link to="/tiere" className="back-link">← Zurück zu den Tieren</Link>
        <h1>Tier nicht gefunden</h1>
      </section>
    );
  }

  const tierReviews = reviews.filter((r) => r.tierId === tier.id);
  const avgRating = tierReviews.length > 0
    ? (tierReviews.reduce((sum, r) => sum + r.sterne, 0) / tierReviews.length).toFixed(1)
    : "—";

  const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: tierReviews.filter((r) => r.sterne === star).length,
  }));
  const maxCount = Math.max(...ratingCounts.map((r) => r.count), 1);

  const renderStars = (count) => {
    return "★".repeat(count) + "☆".repeat(5 - count);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formName.trim() || !formText.trim() || formSterne === 0) return;

    const newReview = {
      id: Date.now(),
      tierId: tier.id,
      name: formName.trim(),
      sterne: formSterne,
      text: formText.trim(),
      datum: new Date().toLocaleDateString("de-CH"),
    };

    setReviews([newReview, ...reviews]);
    setFormName("");
    setFormText("");
    setFormSterne(0);
    setHoverSterne(0);
    setShowForm(false);
  };

  return (
    <section className="page bewertung-page">
      <Link to={`/tiere/${tier.id}`} className="back-link">← Zurück zu {tier.name}</Link>

      <div className="bewertung-hero">
        <span className="bewertung-emoji">{tier.emoji}</span>
        <h1>{tier.name}</h1>
        <span className="detail-badge">{tier.herkunft}</span>
      </div>

      <div className="bewertung-overview">
        <div className="bewertung-overview-left">
          <span className="bewertung-overview-score">{avgRating}</span>
          <span className="bewertung-overview-stars">{renderStars(Math.round(Number(avgRating) || 0))}</span>
          <span className="bewertung-overview-count">{tierReviews.length} Bewertungen</span>
        </div>
        <div className="bewertung-overview-bars">
          {ratingCounts.map(({ star, count }) => (
            <div key={star} className="bewertung-bar-row">
              <span className="bewertung-bar-label">{star} ★</span>
              <div className="bewertung-bar-track">
                <div
                  className="bewertung-bar-fill"
                  style={{ width: `${(count / maxCount) * 100}%` }}
                />
              </div>
              <span className="bewertung-bar-count">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {!showForm && (
        <button className="bewertung-cta" onClick={() => setShowForm(true)}>
          + Bewertung schreiben
        </button>
      )}

      {showForm && (
        <div className="bewertung-form-card">
          <h2>Bewertung schreiben</h2>
          <form onSubmit={handleSubmit} className="bewertung-form">
            <div className="star-selector">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`star-btn ${star <= (hoverSterne || formSterne) ? "active" : ""}`}
                  onClick={() => setFormSterne(star)}
                  onMouseEnter={() => setHoverSterne(star)}
                  onMouseLeave={() => setHoverSterne(0)}
                >
                  ★
                </button>
              ))}
              <span className="star-label">
                {formSterne > 0 ? `${formSterne} von 5 Sternen` : "Sterne wählen"}
              </span>
            </div>

            <input
              type="text"
              placeholder="Dein Name"
              className="bewertung-input"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
            />

            <textarea
              placeholder="Schreibe deine Bewertung..."
              className="bewertung-textarea"
              rows={4}
              value={formText}
              onChange={(e) => setFormText(e.target.value)}
            />

            <div className="bewertung-form-actions">
              <button
                type="submit"
                className="button button-primary bewertung-submit"
                disabled={!formName.trim() || !formText.trim() || formSterne === 0}
              >
                Absenden
              </button>
              <button
                type="button"
                className="bewertung-cancel"
                onClick={() => setShowForm(false)}
              >
                Abbrechen
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bewertung-list">
        <h2>Alle Bewertungen ({tierReviews.length})</h2>
        {tierReviews.length === 0 ? (
          <p className="bewertung-empty-text">Noch keine Bewertungen vorhanden. Sei der Erste!</p>
        ) : (
          <div className="bewertung-cards">
            {tierReviews.map((review) => (
              <article key={review.id} className="bewertung-card">
                <div className="bewertung-card-avatar">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div className="bewertung-card-body">
                  <div className="bewertung-card-header">
                    <strong className="bewertung-card-name">{review.name}</strong>
                    <span className="bewertung-card-date">{review.datum}</span>
                  </div>
                  <span className="bewertung-card-stars">{renderStars(review.sterne)}</span>
                  <p className="bewertung-card-text">{review.text}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
