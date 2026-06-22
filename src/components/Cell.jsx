import styles from './Board.module.css'

export default function Cell({ value, onClick, disabled, isWinning }) {
  const filled = value !== null

  return (
    <button
      type="button"
      className={`${styles.cell} ${filled ? styles.filled : ''} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled || filled}
      aria-label={value ? `Cell filled with ${value}` : 'Empty cell'}
    >
      {value === 'X' && <span className={styles.markX}>X</span>}
      {value === 'O' && <span className={styles.markO}>O</span>}
    </button>
  )
}
