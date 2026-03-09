import { Link } from "react-router"
import { getGames, getTopScorers } from "./mockData"

const Leaderboard: React.FC = () => {
  const games = getGames()

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Global Leaderboards</h1>
      {games.map(game => (
        <div key={game} style={{ marginTop: "2rem", border: "1px solid #555", padding: "1rem" }}>
          <h2>{game.toUpperCase()} (Top 3)</h2>
          <ol style={{ display: "inline-block", textAlign: "left" }}>
            {getTopScorers(game, 3).map(score => (
              <li key={score.id}>{score.player} - {score.score} pts</li>
            ))}
          </ol>
          <br />
          <Link to={`/leaderboard/${game}`} style={{ marginTop: "1rem", display: "inline-block" }}>
            View Top 10 →
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Leaderboard