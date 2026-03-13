import { useParams, Link } from "react-router";
import { useScores } from "../../features/leaderboard/api/scores";

const LeaderboardDetail: React.FC = () => {
  const { game } = useParams();

  // We use the new async hook instead of mockData
  const [scores] = useScores();

  // Handle the "Waiting" state if the component isn't inside a Suspense yet
  if (!scores)
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        Loading scores...
      </div>
    );

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{game?.toUpperCase()} Top 10</h1>
      <ol style={{ display: "inline-block", textAlign: "left" }}>
        {scores.map((score) => (
          <li key={score.id}>
            {score.player} - {score.score} pts
          </li>
        ))}
      </ol>
      <br />
      <Link
        to="/leaderboard"
        style={{ marginTop: "1rem", display: "inline-block" }}
      >
        ← Back to Leaderboards
      </Link>
    </div>
  );
};

export default LeaderboardDetail;
