import { Suspense, type FC } from "react";
import { useScores } from "../../features/leaderboard/api/scores";

const LeaderboardWrapper: FC = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Global Leaderboards</h1>
      <Suspense fallback={<div>Loading scores...</div>}>
        <LeaderboardContent />
      </Suspense>
    </div>
  );
};

const LeaderboardContent: FC = () => {
  const [scores] = useScores();

  if (!scores || scores.length === 0) {
    return <div>No scores available.</div>;
  }

  return (
    <div
      style={{ marginTop: "2rem", border: "1px solid #555", padding: "1rem" }}
    >
      <h2>WORDLISH (Top 10)</h2>
      <ol style={{ display: "inline-block", textAlign: "left" }}>
        {scores.map((score) => (
          <li key={score.id}>
            {score.player} - {score.score} pts
          </li>
        ))}
      </ol>
    </div>
  );
};

export default LeaderboardWrapper;
