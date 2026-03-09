import React from 'react';
import { Route, Routes, Link, Outlet } from "react-router"
import Home from "./Home"
import WordlishGame from "./WordlishGame" // FIXED: Pointing to your local file
import Leaderboard from "./Leaderboard"
import LeaderboardDetail from "./LeaderboardDetail"

const AppLayout: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <nav style={{ 
        padding: "1rem", 
        borderBottom: "1px solid #555", 
        display: "flex", 
        gap: "1rem", 
        justifyContent: "center" 
      }}>
        <Link to="/">Home</Link>
        <Link to="/play/wordlish">Play</Link>
        <Link to="/leaderboard">Leaderboards</Link>
      </nav>

      <main style={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        padding: "2rem",
        width: "100%" 
      }}>
        <Outlet />
      </main>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Routes>
      <Route Component={AppLayout}>
        <Route index Component={Home} />
        {/* FIXED: Using WordlishGame component here */}
        <Route path="/play/wordlish" Component={WordlishGame} />
        <Route path="/leaderboard" Component={Leaderboard} />
        <Route path="/leaderboard/:slug" Component={LeaderboardDetail} />
      </Route>
    </Routes>
  )
}

export default App