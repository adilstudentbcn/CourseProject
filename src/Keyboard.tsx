const KEYBOARD_ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
]

const Keyboard: React.FC<{
  getState: (letter: string) => string
}> = ({ getState }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} style={{ textAlign: "center" }}>
          {row.map((letter) => (
            <span
              key={letter}
              style={{
                display: "inline-block",
                padding: "0.5rem",
                margin: "0.2rem",
                color: "white",
                background: getState(letter), 
                borderRadius: "4px",
                minWidth: "1.5rem",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard