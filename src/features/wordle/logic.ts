const states = {
  unknown: "#cb6c88",
  absent: "#636381",
  present: "#b59f3b",
  correct: "#538d4e",
};

export type State = {
  word: string;
  guesses: string[];
  currentGuess: string;
};

export function createState(word: string): State {
  return {
    word: word.toLowerCase(),
    guesses: [],
    currentGuess: "",
  };
}

export function getLetterState(
  state: State,
  letter: string,
  position?: number
): string {
  if (letter === " " || letter === "") return states.unknown;

  if (position !== undefined) {
    if (state.word[position] === letter) {
      return states.correct;
    }
    if (state.word.includes(letter)) {
      return states.present;
    }
    return states.absent;
  }

  const allLettersGuessed = state.guesses.join("");
  if (!allLettersGuessed.includes(letter)) {
    return states.unknown;
  }

  const isCorrectSomewhere = state.guesses.some((guess) =>
    guess.split("").some((l, i) => l === letter && state.word[i] === letter)
  );
  if (isCorrectSomewhere) return states.correct;

  if (state.word.includes(letter)) return states.present;

  return states.absent;
}

export function isWinner(state: State): boolean {
  return state.guesses.includes(state.word);
}

export function isGameOver(state: State): boolean {
  return state.guesses.length === 6 || isWinner(state);
}
