import { useParams, Link } from "react-router"
import { getTopScorers } from "./mockData"

const LeaderboardDetail: React.FC = () => {
  const { slug } = useParams() 
  const top10 = getTopScorers(slug || "", 10)

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Top 10 for {slug?.toUpperCase()}</h1>
      <Link to="/leaderboard">← Back to all leaderboards</Link>
      
      <div style={{ marginTop: "2rem" }}>
        <ol style={{ display: "inline-block", textAlign: "left" }}>
          {top10.map(score => (
            <li key={score.id}>{score.player} - {score.score} pts</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default LeaderboardDetail