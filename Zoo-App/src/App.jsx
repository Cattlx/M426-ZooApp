import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Tiere from "./pages/Tiere";
import TierDetail from "./pages/TierDetail";
import Karte from "./pages/Karte";
import Bewertung from "./pages/Bewertung";
import Login from "./pages/Login";

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
					<NavLink to="/login" className="button-link">
						Login
					</NavLink>
				</nav>
			</header>

			<main className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/tiere" element={<Tiere />} />
					<Route path="/tiere/:id" element={<TierDetail />} />
					<Route path="/karte" element={<Karte />} />
					<Route path="/bewertung/:id" element={<Bewertung />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</main>
		</div>
	);
}

