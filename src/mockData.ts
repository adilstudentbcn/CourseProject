
const scores = {
  wordlish: [
    { id: 1, player: "Alice", score: 100 },
    { id: 2, player: "Bob", score: 95 },
    { id: 3, player: "Charlie", score: 90 },
    { id: 4, player: "Dave", score: 85 },
    { id: 5, player: "Eve", score: 80 },
    { id: 6, player: "Frank", score: 75 },
    { id: 7, player: "Grace", score: 70 },
    { id: 8, player: "Hank", score: 65 },
    { id: 9, player: "Ivy", score: 60 },
    { id: 10, player: "Jack", score: 55 },
    { id: 11, player: "Karen", score: 50 },
  ]
}


export const getGames = () => {
  return Object.keys(scores)
}

export const getTopScorers = (gameSlug: string, limit: number) => {
  const gameScores = scores[gameSlug as keyof typeof scores] || []
  return gameScores.sort((a, b) => b.score - a.score).slice(0, limit)
}