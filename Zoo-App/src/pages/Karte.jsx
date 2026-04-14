import { useEffect, useMemo, useState } from "react";

const areas = [
  {
    id: 1,
    name: "Savanne",
    type: "Tierbereich",
    color: "savanne",
    description: "Hier findest du z. B. Giraffen, Zebras und andere Tiere der Savanne.",
  },
  {
    id: 2,
    name: "Arktis",
    type: "Tierbereich",
    color: "arktis",
    description: "Kalter Bereich mit Tieren aus arktischen Regionen.",
  },
  {
    id: 3,
    name: "Reptilien",
    type: "Tierbereich",
    color: "reptilien",
    description: "Schlangen, Echsen und weitere spannende Reptilien.",
  },
  {
    id: 5,
    name: "Wassertiere",
    type: "Tierbereich",
    color: "wasser",
    description: "Fische und andere Tiere aus Wasserwelten.",
  },
  {
    id: 6,
    name: "Afrika",
    type: "Erlebnisbereich",
    color: "afrika",
    description: "Themenbereich rund um afrikanische Tierwelten.",
  },

];

const places = [
  { id: 101, name: "WC", icon: "🚻", x: "14%", y: "76%", type: "Servicepunkt" },
  { id: 102, name: "Restaurant", icon: "🍽️", x: "77%", y: "78%", type: "Servicepunkt" },
  {
    id: 103,
    name: "Info",
    icon: "ℹ️",
    x: "93%",
    y: "39%",
    type: "Servicepunkt",
    description: "Informationspunkt für Hilfe, Tickets und Fragen.",
  },
];

export default function Karte() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);


  useEffect(() => {
    document.body.style.background = "linear-gradient(180deg, #f3f6f4 0%, #edf3ef 100%)";
    return () => {
      document.body.style.background =
        "radial-gradient(circle at top left, rgba(47, 128, 237, 0.18), transparent 22%), radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.16), transparent 20%), linear-gradient(180deg, #061b2f 0%, #0d2436 100%)";
    };
  }, []);

  const filteredAreas = useMemo(() => {
    return areas.filter((area) =>
      area.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const isVisible = (name) =>
    name.toLowerCase().includes(search.toLowerCase());


  return (
    <section className="map-page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Entdecken</p>
          <h1>Zookarte</h1>
          <p className="page-text">
            Finde schnell Tierbereiche, Attraktionen und wichtige Orte im Zoo.
          </p>
        </div>
      </div>

      <div className="map-search-wrap">
        <input
          type="text"
          placeholder="🔎 Gehege, Bereich oder Ort suchen..."
          className="map-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="map-layout">
        <div className="zoo-map-card">
          <div className="zoo-map">
            <div className="map-path path-top"></div>
            <div className="map-path path-middle"></div>
            <div className="map-path path-left-down"></div>
            <div className="map-path path-right-down"></div>

            {isVisible("Savanne") && (
              <button
                className="map-area savanne"
                onClick={() => setSelected(areas.find((a) => a.name === "Savanne"))}
              >
                Savanne
              </button>
            )}

            {isVisible("Arktis") && (
              <button
                className="map-area arktis"
                onClick={() => setSelected(areas.find((a) => a.name === "Arktis"))}
              >
                Arktis
              </button>
            )}

            {isVisible("Reptilien") && (
              <button
                className="map-area reptilien"
                onClick={() =>
                  setSelected(areas.find((a) => a.name === "Reptilien"))
                }
              >
                Reptilien
              </button>
            )}

            {isVisible("Vögel") && (
              <button
                className="map-area voegel"
                onClick={() => setSelected(areas.find((a) => a.name === "Vögel"))}
              >
                Vögel
              </button>
            )}

            {isVisible("Wassertiere") && (
              <button
                className="map-area wasser"
                onClick={() =>
                  setSelected(areas.find((a) => a.name === "Wassertiere"))
                }
              >
                Wassertiere
              </button>
            )}

            {isVisible("Afrika") && (
              <button
                className="map-area afrika"
                onClick={() => setSelected(areas.find((a) => a.name === "Afrika"))}
              >
                Afrika
              </button>
            )}

            {isVisible("Eingang / Shop") && (
              <button
                className="map-area shop"
                onClick={() =>
                  setSelected(areas.find((a) => a.name === "Eingang / Shop"))
                }
              >
                Eingang / Shop
              </button>
            )}

            {places
              .filter((place) =>
                place.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((place) => (
                <button
                  key={place.id}
                  className="map-marker"
                  style={{ left: place.x, top: place.y }}
                  onClick={() => setSelected(place)}
                  title={place.name}
                >
                  <span>{place.icon}</span>
                </button>
              ))}
          </div>
        </div>

        <aside className="map-sidebar">
          <div className="info-panel">
            <h2>Details</h2>
            {selected ? (
              <>
                <h3>{selected.name}</h3>
                <p className="info-type">{selected.type}</p>
                <p>{selected.description || "Kein zusätzlicher Beschreibungstext vorhanden."}</p>
              </>
            ) : (
              <p>
                Klicke auf einen Bereich oder Marker auf der Karte, um mehr Infos zu sehen.
              </p>
            )}
          </div>

          <div className="legend-panel">
            <h2>Legende</h2>
            <div className="legend-list">
              {areas.map((area) => (
                <div key={area.id} className="legend-item">
                  <span className={`legend-color ${area.color}`}></span>
                  <span>{area.name}</span>
                </div>
              ))}

              <div className="legend-item">
                <span className="legend-icon">📍</span>
                <span>Wichtiger Ort / Servicepunkt</span>
              </div>
            </div>
          </div>

          <div className="results-panel">
            <h2>Gefundene Bereiche</h2>
            <div className="results-list">
              {filteredAreas.length > 0 ? (
                filteredAreas.map((area) => (
                  <button
                    key={area.id}
                    className={`result-chip ${area.color}`}
                    onClick={() => setSelected(area)}
                  >
                    {area.name}
                  </button>
                ))
              ) : (
                <p>Keine Bereiche gefunden.</p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}