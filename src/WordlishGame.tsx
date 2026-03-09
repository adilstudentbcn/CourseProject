import { useState, useEffect } from "react"
import Guesses from "./Guesses"
import Keyboard from "./Keyboard"
import {
  type State,
  createState,
  getLetterState,
  isWinner,
  isGameOver,
} from "./logic"

const WordlishGame: React.FC = () => {
  const [state, setState] = useState<State>()

  
  useEffect(() => {
    if (!state || isGameOver(state)) return 

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()

    
      if (key === "backspace") {
        setState({
          ...state,
          currentGuess: state.currentGuess.slice(0, -1),
        })
      }

      
      if (key === "enter" && state.currentGuess.length === 5) {
        setState({
          ...state,
          guesses: [...state.guesses, state.currentGuess],
          currentGuess: "",
        })
      }

  
      if (/^[a-z]$/.test(key) && state.currentGuess.length < 5) {
        setState({
          ...state,
          currentGuess: state.currentGuess + key,
        })
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown) 
  }, [state])

  
  if (!state) {
    return (
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <h1>Wordlish</h1>
        <button onClick={() => setState(createState())}>Begin Game</button>
      </div>
    )
  }

  // Check game status
  const won = isWinner(state)
  const finished = isGameOver(state)

  
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Wordlish</h1>

    
      {finished && (
        <div
          style={{
            marginBottom: "1rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textAlign: "center",
          }}
        >
          {won ? "You Won!" : `Game Over! The word was: ${state.word}`}
          <br />
          <button
            onClick={() => setState(createState())}
            style={{ marginTop: "0.5rem" }}
          >
            Play Again
          </button>
        </div>
      )}

      <Guesses
        guesses={state.guesses}
        currentGuess={state.currentGuess}
        getState={(letter: string, position: number) =>
          getLetterState(state, letter, position)
        }
      />

    
      {!finished && (
        <Keyboard getState={(letter: string) => getLetterState(state, letter)} />
      )}
    </div>
  )
}

export default WordlishGame