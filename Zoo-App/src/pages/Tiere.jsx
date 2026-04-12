import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TIERE_DATA = [
  { id: 1, name: "Löwe", emoji: "🦁", kategorie: "Säugetiere", herkunft: "Savanne", rating: 4.8, gewicht: "180 kg", alter: "15 Jahre", beschreibung: "Der Afrikanische Löwe ist ein majestätisches Raubtier und König der Tiere. Mit seiner imposanten Mähne und kraftvollen Körperbau dominiert er die afrikanischen Savannen." },
  { id: 2, name: "Elefant", emoji: "🐘", kategorie: "Säugetiere", herkunft: "Afrika", rating: 4.9, gewicht: "6000 kg", alter: "60 Jahre", beschreibung: "Der Afrikanische Elefant ist das größte Landtier und zeichnet sich durch bemerkenswerte Intelligenz und starkes Sozialverhalten aus." },
  { id: 3, name: "Giraffe", emoji: "🦒", kategorie: "Säugetiere", herkunft: "Savanne", rating: 4.7, gewicht: "1200 kg", alter: "25 Jahre", beschreibung: "Die Giraffe ist das höchste Landtier und ein elegantes Symbol Afrikas. Ihre lange Halswirbelsäule ermöglicht ihr das Fressen von Baumblättern." },
  { id: 4, name: "Pinguin", emoji: "🐧", kategorie: "Vogel", herkunft: "Antarktis", rating: 4.9, gewicht: "30 kg", alter: "20 Jahre", beschreibung: "Der Pinguin ist ein faszinierender flugunfähiger Vogel mit perfekter Anpassung an das Wasserleben. Er lebt in großen Kolonien." },
  { id: 5, name: "Krokodil", emoji: "🐊", kategorie: "Reptil", herkunft: "Wasser", rating: 4.5, gewicht: "400 kg", alter: "45 Jahre", beschreibung: "Das Krokodil ist eines der ältesten und gefährlichsten Reptilien der Welt. Es ist ein perfekter Jäger in Flüssen und Seen." },
  { id: 6, name: "Adler", emoji: "🦅", kategorie: "Vogel", herkunft: "Berge", rating: 4.6, gewicht: "5 kg", alter: "30 Jahre", beschreibung: "Der Adler ist ein stolzer und majestätischer Raubvogel mit außergewöhnlichem Sehvermögen. Er ist das Wappentier vieler Länder." },
];

export default function Tiere() {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    document.body.style.background = "linear-gradient(180deg, #f0f4f0 0%, #e8f0e8 100%)";
    return () => {
      document.body.style.background = "radial-gradient(circle at top left, rgba(47, 128, 237, 0.18), transparent 22%), radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.16), transparent 20%), linear-gradient(180deg, #061b2f 0%, #0d2436 100%)";
    };
  }, []);

  const filteredTiere = TIERE_DATA.filter(tier =>
    filter === "" || tier.kategorie === filter
  );

  const kategories = ["Säugetiere", "Vogel", "Reptil"];

  return (
    <section className="page tiere-list-page">
      <div className="tiere-header">
        <h1>Tiere</h1>
        <div className="search-filters">
          <input 
            type="text" 
            placeholder="Suchen..." 
            className="search-input"
          />
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === "" ? "active" : ""}`}
              onClick={() => setFilter("")}
            >
              ABS
            </button>
            {kategories.map(cat => (
              <button 
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="tiere-grid">
        {filteredTiere.map(tier => (
          <Link 
            key={tier.id} 
            to={`/tiere/${tier.id}`}
            className="tier-teaser-link"
          >
            <article className="tier-teaser">
              <div className="tier-emoji">{tier.emoji}</div>
              <h3>{tier.name}</h3>
              <p className="tier-kategorie">{tier.kategorie}</p>
              <div className="tier-rating">⭐ {tier.rating}</div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
