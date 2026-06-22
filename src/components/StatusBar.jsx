import styles from './StatusBar.module.css'

export default function StatusBar({ status, currentPlayer, mode, isComputerThinking }) {
  let message

  if (status === 'draw') {
    message = "It's a draw"
  } else if (status === 'X' || status === 'O') {
    const winnerLabel =
      mode === 'computer' && status === 'O' ? 'Computer wins' : `${status} wins`
    message = winnerLabel
  } else if (isComputerThinking) {
    message = 'Computer is thinking…'
  } else if (mode === 'computer') {
    message = currentPlayer === 'X' ? 'Your turn' : "Computer's turn"
  } else {
    message = `${currentPlayer}'s turn`
  }

  const dotColor =
    status === 'X' || (!status && currentPlayer === 'X') ? '#6FA8DC' :
    status === 'O' || (!status && currentPlayer === 'O') ? '#E8896B' :
    '#5C6B66'

  return (
    <div className={`${styles.statusBar} flex items-center justify-center pb-4 mb-8`}>
      <span
        className={styles.turnDot}
        style={{ backgroundColor: dotColor }}
        aria-hidden="true"
      />
      <p className="font-marker text-2xl sm:text-3xl text-chalk">{message}</p>
    </div>
  )
}
