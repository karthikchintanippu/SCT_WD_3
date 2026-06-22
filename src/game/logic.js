/**
 * game/logic.js
 * Pure, framework-agnostic tic-tac-toe rules.
 * Board is represented as an array of 9 cells: 'X' | 'O' | null.
 * Index layout:
 *   0 1 2
 *   3 4 5
 *   6 7 8
 */

export const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
]

/**
 * Returns { winner: 'X'|'O', line: [a,b,c] } if there's a winner,
 * otherwise null.
 */
export function getWinner(board) {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line }
    }
  }
  return null
}

export function isBoardFull(board) {
  return board.every((cell) => cell !== null)
}

/**
 * Returns 'X' | 'O' | 'draw' | null (null = game still in progress)
 */
export function getGameStatus(board) {
  const result = getWinner(board)
  if (result) return result.winner
  if (isBoardFull(board)) return 'draw'
  return null
}

export function getEmptyCells(board) {
  return board.reduce((acc, cell, idx) => {
    if (cell === null) acc.push(idx)
    return acc
  }, [])
}

/**
 * Minimax with depth preference (faster wins, slower losses) so the
 * computer plays optimally but doesn't feel robotic when it could
 * win sooner.
 */
function minimax(board, player, computerMark, humanMark, depth) {
  const status = getGameStatus(board)
  if (status === computerMark) return { score: 10 - depth }
  if (status === humanMark) return { score: depth - 10 }
  if (status === 'draw') return { score: 0 }

  const moves = []
  for (const idx of getEmptyCells(board)) {
    const nextBoard = board.slice()
    nextBoard[idx] = player
    const nextPlayer = player === 'X' ? 'O' : 'X'
    const result = minimax(nextBoard, nextPlayer, computerMark, humanMark, depth + 1)
    moves.push({ idx, score: result.score })
  }

  if (player === computerMark) {
    return moves.reduce((best, m) => (m.score > best.score ? m : best))
  }
  return moves.reduce((best, m) => (m.score < best.score ? m : best))
}

/**
 * Difficulty levels:
 *  - 'easy'   : fully random legal move
 *  - 'medium' : 50% optimal, 50% random
 *  - 'hard'   : optimal (minimax) every time
 */
export function getComputerMove(board, computerMark, humanMark, difficulty = 'hard') {
  const empty = getEmptyCells(board)
  if (empty.length === 0) return null

  if (difficulty === 'easy') {
    return empty[Math.floor(Math.random() * empty.length)]
  }

  if (difficulty === 'medium' && Math.random() < 0.5) {
    return empty[Math.floor(Math.random() * empty.length)]
  }

  const best = minimax(board, computerMark, computerMark, humanMark, 0)
  return best.idx
}

export const EMPTY_BOARD = Array(9).fill(null)
