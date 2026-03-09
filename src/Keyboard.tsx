import styles from "./Keyboard.module.css" 
const KEYBOARD_ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
]

const Keyboard: React.FC<{
  getState: (letter: string) => string
}> = ({ getState }) => {
  return (
    <div className={styles.keyboard}>
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((letter) => (
            <span
              key={letter}
              className={styles.key} 
              style={{
                background: getState(letter),  
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