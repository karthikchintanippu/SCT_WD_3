import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './HomePage.module.css'

export default function HomePage() {
  const navigate = useNavigate()
  const [difficulty, setDifficulty] = useState('hard')

  function startGame(mode) {
    if (mode === 'computer') {
      navigate(`/play/computer?difficulty=${difficulty}`)
    } else {
      navigate('/play/pvp')
    }
  }

  return (
    <main className={styles.page}>
      <div className="w-full max-w-sm">
        <header className="text-center mb-12">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-chalk-dust mb-3">
            Three in a row
          </p>
          <h1 className={`${styles.title} ${styles.titleStroke} text-6xl sm:text-7xl text-chalk inline-block px-2`}>
            Chalk &amp; Slate
          </h1>
        </header>

        <div className="flex flex-col gap-4">
          <button
            type="button"
            className={styles.modeCard}
            onClick={() => startGame('pvp')}
          >
            <p className="font-marker text-3xl text-chalk mb-1">Two players</p>
            <p className="font-body text-sm text-chalk-dust">
              Take turns on the same board. X goes first.
            </p>
          </button>

          <div className={styles.modeCard} role="group" aria-label="Play against computer">
            <p className="font-marker text-3xl text-chalk mb-1">Vs. computer</p>
            <p className="font-body text-sm text-chalk-dust mb-5">
              You play X. Choose how sharp the computer plays.
            </p>

            <div className="flex gap-2 mb-5" role="radiogroup" aria-label="Difficulty">
              {['easy', 'medium', 'hard'].map((level) => (
                <button
                  key={level}
                  type="button"
                  role="radio"
                  aria-checked={difficulty === level}
                  onClick={(e) => { e.stopPropagation(); setDifficulty(level) }}
                  className={`flex-1 capitalize text-xs font-semibold py-2 rounded-md border transition-colors duration-150 ${
                    difficulty === level
                      ? 'bg-chalk text-slate-deep border-chalk'
                      : 'bg-transparent text-chalk-dust border-chalk-line hover:border-chalk-dust'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => startGame('computer')}
              className="w-full bg-x text-slate-deep font-semibold text-sm py-3 rounded-md hover:brightness-110 transition"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
