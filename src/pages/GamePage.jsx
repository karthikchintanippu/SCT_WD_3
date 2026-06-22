import { useState, useEffect, useCallback } from 'react'
import { useParams, useSearchParams, useNavigate, Link } from 'react-router-dom'
import Board from '../components/Board.jsx'
import StatusBar from '../components/StatusBar.jsx'
import Button from '../components/Button.jsx'
import { EMPTY_BOARD, getWinner, getGameStatus, getComputerMove } from '../game/logic.js'
import styles from './GamePage.module.css'

const HUMAN_MARK = 'X'
const COMPUTER_MARK = 'O'

export default function GamePage() {
  const { mode } = useParams() // 'pvp' | 'computer'
  const [searchParams] = useSearchParams()
  const difficulty = searchParams.get('difficulty') || 'hard'
  const navigate = useNavigate()

  const [board, setBoard] = useState(EMPTY_BOARD)
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [scores, setScores] = useState({ X: 0, O: 0, draw: 0 })
  const [isComputerThinking, setIsComputerThinking] = useState(false)

  const status = getGameStatus(board)
  const winResult = getWinner(board)
  const winningLine = winResult ? winResult.line : null
  const isGameOver = status !== null

  // Redirect to home if mode is invalid (e.g. someone edits the URL by hand)
  useEffect(() => {
    if (mode !== 'pvp' && mode !== 'computer') {
      navigate('/', { replace: true })
    }
  }, [mode, navigate])

  // Record the result exactly once per finished game
  useEffect(() => {
    if (!status) return
    setScores((prev) => {
      if (status === 'draw') return { ...prev, draw: prev.draw + 1 }
      return { ...prev, [status]: prev[status] + 1 }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  const handleCellClick = useCallback((idx) => {
    if (isGameOver || board[idx] !== null) return
    if (mode === 'computer' && currentPlayer !== HUMAN_MARK) return

    setBoard((prev) => {
      const next = prev.slice()
      next[idx] = currentPlayer
      return next
    })
    setCurrentPlayer((p) => (p === 'X' ? 'O' : 'X'))
  }, [board, currentPlayer, isGameOver, mode])

  // Computer's turn: triggers after the human moves, with a short
  // delay so it reads as a real "turn" rather than an instant snap.
  useEffect(() => {
    if (mode !== 'computer') return
    if (isGameOver) return
    if (currentPlayer !== COMPUTER_MARK) return

    setIsComputerThinking(true)
    const timer = setTimeout(() => {
      const move = getComputerMove(board, COMPUTER_MARK, HUMAN_MARK, difficulty)
      if (move !== null && move !== undefined) {
        setBoard((prev) => {
          const next = prev.slice()
          next[move] = COMPUTER_MARK
          return next
        })
        setCurrentPlayer(HUMAN_MARK)
      }
      setIsComputerThinking(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [mode, currentPlayer, board, isGameOver, difficulty])

  function handleRematch() {
    setBoard(EMPTY_BOARD)
    setCurrentPlayer('X')
  }

  const xScoreLabel = mode === 'computer' ? 'You' : 'X'
  const oScoreLabel = mode === 'computer' ? 'Computer' : 'O'

  return (
    <main className={styles.page}>
      <div className="w-full max-w-sm flex flex-col items-center">

        <div className="w-full flex items-center justify-between mb-6">
          <Link to="/" className="font-body text-xs text-chalk-dust hover:text-chalk transition-colors">
            ← Back
          </Link>
          <div className="flex gap-2">
            <span className={`${styles.scorePill} font-body text-xs text-chalk-dust`}>
              <span className="text-x font-semibold">{xScoreLabel}</span> {scores.X}
            </span>
            <span className={`${styles.scorePill} font-body text-xs text-chalk-dust`}>
              Draws {scores.draw}
            </span>
            <span className={`${styles.scorePill} font-body text-xs text-chalk-dust`}>
              <span className="text-o font-semibold">{oScoreLabel}</span> {scores.O}
            </span>
          </div>
        </div>

        <StatusBar
          status={status}
          currentPlayer={currentPlayer}
          mode={mode}
          isComputerThinking={isComputerThinking}
        />

        <Board
          board={board}
          onCellClick={handleCellClick}
          winningLine={winningLine}
          disabled={isGameOver || isComputerThinking || (mode === 'computer' && currentPlayer !== HUMAN_MARK)}
        />

        <div className="mt-10 flex gap-3">
          <Button variant="primary" onClick={handleRematch}>
            {isGameOver ? 'Play again' : 'Restart'}
          </Button>
          <Button variant="outline" onClick={() => navigate('/')}>
            Change mode
          </Button>
        </div>
      </div>
    </main>
  )
}
