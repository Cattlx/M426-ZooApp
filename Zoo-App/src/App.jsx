import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}