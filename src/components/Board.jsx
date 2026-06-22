import Cell from './Cell.jsx'
import styles from './Board.module.css'

// Maps each winning line's first/last cell index to percentage-based
// SVG coordinates (0-100 viewBox) so the strike-through line lands
// exactly across the three matched cells regardless of board size.
const LINE_COORDS = {
  '0,1,2': { x1: 4, y1: 16.6, x2: 96, y2: 16.6 },
  '3,4,5': { x1: 4, y1: 50, x2: 96, y2: 50 },
  '6,7,8': { x1: 4, y1: 83.3, x2: 96, y2: 83.3 },
  '0,3,6': { x1: 16.6, y1: 4, x2: 16.6, y2: 96 },
  '1,4,7': { x1: 50, y1: 4, x2: 50, y2: 96 },
  '2,5,8': { x1: 83.3, y1: 4, x2: 83.3, y2: 96 },
  '0,4,8': { x1: 8, y1: 8, x2: 92, y2: 92 },
  '2,4,6': { x1: 92, y1: 8, x2: 8, y2: 92 }
}

export default function Board({ board, onCellClick, winningLine, disabled }) {
  const lineCoords = winningLine ? LINE_COORDS[winningLine.join(',')] : null

  return (
    <div className={styles.board}>
      {board.map((value, idx) => (
        <Cell
          key={idx}
          value={value}
          onClick={() => onCellClick(idx)}
          disabled={disabled}
          isWinning={winningLine?.includes(idx)}
        />
      ))}

      {lineCoords && (
        <svg className={styles.winLine} viewBox="0 0 100 100" preserveAspectRatio="none">
          <line
            className={styles.winLinePath}
            x1={lineCoords.x1}
            y1={lineCoords.y1}
            x2={lineCoords.x2}
            y2={lineCoords.y2}
            pathLength="1"
          />
        </svg>
      )}
    </div>
  )
}
