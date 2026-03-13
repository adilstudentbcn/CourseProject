import { useState, useEffect, Suspense, type FC } from "react";
import Guesses from "./Guesses";
import Keyboard from "./Keyboard";
import { useSecretWord } from "../api/game";
import {
  type State,
  createState,
  getLetterState,
  isWinner,
  isGameOver,
} from "../logic";

const WordlishGameWrapper: FC = () => {
  return (
    <Suspense
      fallback={
        <div style={{ textAlign: "center", marginTop: "5rem" }}>
          Preparing your word...
        </div>
      }
    >
      <WordlishGame />
    </Suspense>
  );
};

const WordlishGame: FC = () => {
  const [word] = useSecretWord();
  const [state, setState] = useState<State>();

  useEffect(() => {
    if (!state || isGameOver(state)) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "backspace") {
        setState({ ...state, currentGuess: state.currentGuess.slice(0, -1) });
      }
      if (key === "enter" && state.currentGuess.length === 5) {
        setState({
          ...state,
          guesses: [...state.guesses, state.currentGuess],
          currentGuess: "",
        });
      }
      if (/^[a-z]$/.test(key) && state.currentGuess.length < 5) {
        setState({ ...state, currentGuess: state.currentGuess + key });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state]);

  // FIX: Early return moved below all React hooks
  if (!word) return null;

  if (!state) {
    return (
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <h1>Wordlish</h1>
        <button onClick={() => setState(createState(word))}>Begin Game</button>
      </div>
    );
  }

  const won = isWinner(state);
  const finished = isGameOver(state);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Wordlish</h1>
      {finished && (
        <div style={{ marginBottom: "1rem", textAlign: "center" }}>
          {won ? "You Won!" : `Game Over! The word was: ${state.word}`}
          <br />
          <button
            onClick={() => setState(createState(word))}
            style={{ marginTop: "0.5rem" }}
          >
            Play Again
          </button>
        </div>
      )}
      <Guesses
        guesses={state.guesses}
        currentGuess={state.currentGuess}
        getState={(letter, position) => getLetterState(state, letter, position)}
      />
      {!finished && (
        <Keyboard getState={(letter) => getLetterState(state, letter)} />
      )}
    </div>
  );
};

export default WordlishGameWrapper;
