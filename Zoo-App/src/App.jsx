import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Tiere from "./pages/Tiere";
import TierDetail from "./pages/TierDetail";
import Karte from "./pages/Karte";
import Bewertung from "./pages/Bewertung";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div className="app-shell">
      <header className="navbar">
        <div className="logo">ZooApp</div>
        <nav>
          <NavLink to="/" end>
            Start
          </NavLink>
          <NavLink to="/tiere">Tiere</NavLink>
          <NavLink to="/karte">Karte</NavLink>
          <NavLink to="/bewertung">Bewertung</NavLink>
          <NavLink to="/registrieren" className="button-link">
            Registrieren
          </NavLink>
          <NavLink to="/profil">Profil</NavLink>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiere" element={<Tiere />} />
          <Route path="/tiere/:id" element={<TierDetail />} />
          <Route path="/karte" element={<Karte />} />
          <Route path="/bewertung/:id" element={<Bewertung />} />
          <Route path="/registrieren" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profil"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

