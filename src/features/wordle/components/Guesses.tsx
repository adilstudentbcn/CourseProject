import { type FC } from "react";
import styles from "./Guesses.module.css";

const NUM_GUESSES = 6;

const Guesses: FC<{
  guesses: string[];
  currentGuess: string;
  getState: (letter: string, position: number) => string;
}> = ({ guesses, currentGuess, getState }) => {
  return (
    <div className={styles.guesses}>
      {Array.from({ length: NUM_GUESSES }).map((_, rowIndex) => {
        const isCurrentGuess = rowIndex === guesses.length;
        const word = isCurrentGuess
          ? currentGuess.padEnd(5, " ")
          : guesses[rowIndex] || "     ";

        return (
          <div key={rowIndex} className={styles.row}>
            {word.split("").map((letter, letterIndex) => (
              <span
                key={letterIndex}
                className={styles.letter}
                style={{ background: getState(letter, letterIndex) }}
              >
                {letter === " " ? "_" : letter}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Guesses;
