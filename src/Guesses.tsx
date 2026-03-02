const NUM_GUESSES = 6

const Guesses: React.FC<{
  guesses: string[]
  currentGuess: string 
  getState: (letter: string, position: number) => string
}> = ({ guesses, currentGuess, getState }) => {
  return (
    <div>
      {Array.from({ length: NUM_GUESSES }).map((_, rowIndex) => {
  
        const isCurrentGuess = rowIndex === guesses.length

    
        const word = isCurrentGuess 
          ? currentGuess.padEnd(5, " ") 
          : (guesses[rowIndex] || "     ")
        
        return (
          <div key={rowIndex} style={{ textAlign: "center" }}>
            {word.split("").map((letter, letterIndex) => (
              <span
                key={letterIndex}
                style={{
                  display: "inline-block",
                  width: "2rem",
                  height: "2rem",
                  lineHeight: "2rem",
                  textAlign: "center",
                  margin: "0.25rem",
                  color: "white",
                  background: getState(letter, letterIndex),
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  border: "1px solid #555"
                }}
              >
              
                {letter === " " ? "_" : letter}
              </span>
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Guesses