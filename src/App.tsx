import { Suspense, type FC } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import WordlishGame from "./features/wordle/components/WordlishGame";
import LeaderboardDetail from "./pages/LeaderboardDetail";

const App: FC = () => {
  return (
    <BrowserRouter basename="/CourseProject">
      <nav
        style={{
          padding: "1rem",
          borderBottom: "1px solid #555",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/play/wordlish">Play</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </nav>

      <Suspense
        fallback={
          <div style={{ textAlign: "center", marginTop: "5rem" }}>
            Loading Application...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play/wordlish" element={<WordlishGame />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/leaderboard/:game" element={<LeaderboardDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;