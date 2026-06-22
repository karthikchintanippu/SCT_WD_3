# Chalk & Slate — Tic-Tac-Toe

A tic-tac-toe game built with **Vite + React**, **React Router**, **Tailwind CSS**, and **CSS Modules**. Play against a friend on the same device, or against the computer at three difficulty levels.

## Stack

- **Vite** — dev server and build tool
- **React 18** — UI
- **React Router v6** — routes for the home/mode-select screen and the game screen
- **Tailwind CSS** — layout, spacing, and utility styling
- **CSS Modules** — bespoke visuals that don't fit utility classes (the hand-drawn grid lines, the chalk-mark draw-in animation, the winning strike-through line)

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  game/
    logic.js          # Pure game rules: win detection, draw detection, minimax computer AI
  components/
    Board.jsx          # Renders the 3x3 grid + winning-line SVG overlay
    Board.module.css
    Cell.jsx            # A single square
    StatusBar.jsx        # "X's turn" / "Computer wins" / etc.
    StatusBar.module.css
    Button.jsx
  pages/
    HomePage.jsx          # Mode select: two players, or vs. computer (+ difficulty)
    HomePage.module.css
    GamePage.jsx            # Game state, click handling, computer-turn effect
    GamePage.module.css
  App.jsx                    # Routes
  main.jsx                     # Entry point, wraps App in BrowserRouter
  index.css                      # Tailwind directives + base styles
```

## How the game logic works

- `logic.js` is framework-agnostic — it operates on a plain 9-element array (`null | 'X' | 'O'`) and has no React imports, so it's easy to unit test on its own.
- `getWinner(board)` checks all 8 winning lines (3 rows, 3 columns, 2 diagonals) and returns the winner and the matching line, or `null`.
- `getGameStatus(board)` returns `'X'`, `'O'`, `'draw'`, or `null` (game still in progress).
- The computer opponent uses **minimax** with depth-weighted scoring, so it plays optimally on "hard" but prefers faster wins and slower losses. "Easy" picks a random legal move; "medium" mixes random and optimal moves 50/50.

## Routes

| Path                          | Page                                  |
|--------------------------------|----------------------------------------|
| `/`                             | Home — choose two-player or vs. computer |
| `/play/pvp`                      | Two-player game                        |
| `/play/computer?difficulty=hard`  | Game vs. computer at the chosen difficulty |

## Design notes

The visual language is "chalk on slate" — a deep slate background, hand-drawn-feeling marks set in a script display face (Caveat), and a signature moment: the winning line draws itself across the board as a single animated stroke, like someone striking through the row by hand.
