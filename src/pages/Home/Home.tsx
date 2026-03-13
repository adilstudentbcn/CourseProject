import { Link } from "react-router";
import { type FC } from "react";

const Home: FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Welcome to the Arcade</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "2rem",
          alignItems: "center",
        }}
      >
        <Link to="/play/wordlish"> Play Wordlish</Link>
        <Link to="/leaderboard"> View Leaderboards</Link>
      </div>
    </div>
  );
};

export default Home;
