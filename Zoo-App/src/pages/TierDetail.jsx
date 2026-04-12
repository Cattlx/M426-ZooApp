import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

const TIERE_DATA = [
  { id: 1, name: "Afrikanischer Löwe", emoji: "🦁", kategorie: "Säugetiere", herkunft: "Savanne", rating: 4.8, gewicht: "180 kg", alter: "15 Jahre", bewertungen: 42, beschreibung: "Der Afrikanische Löwe ist ein majestätisches Raubtier und König der Tiere. Mit seiner imposanten Mähne und kraftvollen Körperbau dominiert er die afrikanischen Savannen. Er lebt in Rudeln und ist ein Spitzenjäger der afrikanischen Savanne." },
  { id: 2, name: "Elefant", emoji: "🐘", kategorie: "Säugetiere", herkunft: "Afrika", rating: 4.9, gewicht: "6000 kg", alter: "60 Jahre", bewertungen: 38, beschreibung: "Der Afrikanische Elefant ist das größte Landtier und zeichnet sich durch bemerkenswerte Intelligenz und starkes Sozialverhalten aus." },
  { id: 3, name: "Giraffe", emoji: "🦒", kategorie: "Säugetiere", herkunft: "Savanne", rating: 4.7, gewicht: "1200 kg", alter: "25 Jahre", bewertungen: 35, beschreibung: "Die Giraffe ist das höchste Landtier und ein elegantes Symbol Afrikas. Ihre lange Halswirbelsäule ermöglicht ihr das Fressen von Baumblättern." },
  { id: 4, name: "Pinguin", emoji: "🐧", kategorie: "Vogel", herkunft: "Antarktis", rating: 4.9, gewicht: "30 kg", alter: "20 Jahre", bewertungen: 41, beschreibung: "Der Pinguin ist ein faszinierender flugunfähiger Vogel mit perfekter Anpassung an das Wasserleben. Er lebt in großen Kolonien." },
  { id: 5, name: "Krokodil", emoji: "🐊", kategorie: "Reptil", herkunft: "Wasser", rating: 4.5, gewicht: "400 kg", alter: "45 Jahre", bewertungen: 28, beschreibung: "Das Krokodil ist eines der ältesten und gefährlichsten Reptilien der Welt. Es ist ein perfekter Jäger in Flüssen und Seen." },
  { id: 6, name: "Adler", emoji: "🦅", kategorie: "Vogel", herkunft: "Berge", rating: 4.6, gewicht: "5 kg", alter: "30 Jahre", bewertungen: 33, beschreibung: "Der Adler ist ein stolzer und majestätischer Raubvogel mit außergewöhnlichem Sehvermögen. Er ist das Wappentier vieler Länder." },
];

export default function TierDetail() {
  const { id } = useParams();
  const tier = TIERE_DATA.find(t => t.id === parseInt(id));

  useEffect(() => {
    document.body.style.background = "linear-gradient(180deg, #f0f4f0 0%, #e8f0e8 100%)";
    return () => {
      document.body.style.background = "radial-gradient(circle at top left, rgba(47, 128, 237, 0.18), transparent 22%), radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.16), transparent 20%), linear-gradient(180deg, #061b2f 0%, #0d2436 100%)";
    };
  }, []);

  if (!tier) {
    return (
      <section className="page tier-detail-page">
        <Link to="/tiere" className="back-link">← Zurück</Link>
        <h1>Tier nicht gefunden</h1>
      </section>
    );
  }

  const renderStars = (rating) => {
    return "★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating));
  };

  return (
    <section className="page tier-detail-page">
      <Link to="/tiere" className="back-link">← Zurück</Link>
      
      <div className="detail-hero">
        <div className="detail-emoji-large">{tier.emoji}</div>
        <h1>{tier.name}</h1>
        <div className="detail-badge">{tier.herkunft}</div>
      </div>

      <div className="detail-description">
        <p>{tier.beschreibung}</p>
      </div>

      <div className="detail-info-grid">
        <div className="info-box">
          <span className="info-label">Gewicht</span>
          <span className="info-value">{tier.gewicht}</span>
        </div>
        <div className="info-box">
          <span className="info-label">Lebensalter</span>
          <span className="info-value">{tier.alter}</span>
        </div>
      </div>

      <div className="detail-specs">
        <div className="spec-item">
          <span className="spec-label">Gewicht:</span>
          <span className="spec-value">{tier.herkunft} A3</span>
        </div>
      </div>

      <div className="detail-ratings">
        <h2>Bewertungen</h2>
        <div className="rating-display">
          <span className="rating-stars">{renderStars(tier.rating)}</span>
          <span className="rating-text">{tier.rating} / 5 ({tier.bewertungen} Bewertungen)</span>
        </div>
        <button className="button-review">+ Bewertung schreiben</button>
      </div>
    </section>
  );
}
