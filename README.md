# Chalk & Slate — Tic-Tac-Toe

![SkillCraft](https://img.shields.io/badge/SkillCraft-Technology-2C2C2C?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)

A modern, responsive, and interactive Tic-Tac-Toe game built using React, Vite, JavaScript, Tailwind CSS, React Router, and CSS Modules as part of the SkillCraft Technology Web Development Internship — Task 03.

Chalk & Slate provides an engaging gaming experience with local multiplayer support, AI-powered gameplay, multiple difficulty levels, animated winning effects, and a unique chalkboard-inspired design.

---

## Overview

Chalk & Slate is an interactive Tic-Tac-Toe platform designed to provide a fun and visually appealing gaming experience.

The application enables users to:

- Play against another player on the same device
- Challenge a computer opponent
- Select from multiple AI difficulty levels
- Experience smooth game animations
- View instant game results
- Restart and replay unlimited times
- Enjoy a responsive interface across devices

The project demonstrates practical React development concepts including state management, routing, reusable components, game logic implementation, AI algorithms, and responsive UI design.

---

## Internship Details

| Field | Details |
|---------|---------|
| Internship | SkillCraft Technology |
| Track | Web Development |
| Track Code | WD |
| Task Number | Task 03 |
| Task Name | Tic-Tac-Toe Game |
| Repository Name | SCT_WD_3 |
| Intern ID | SCT/JUNE26/2530 |
| Project Name | Chalk & Slate |

---

## Features

### Home Screen

- Welcome interface
- Game mode selection
- Difficulty selection
- Quick game start

### Multiple Game Modes

Supports:

- Player vs Player
- Player vs Computer

### AI Difficulty Levels

Users can choose:

- Easy Mode
- Medium Mode
- Hard Mode

### Smart Game Logic

Includes:

- Win detection
- Draw detection
- Turn management
- Automatic game completion

### Winning Animation

Features:

- Animated strike-through line
- Chalk drawing effects
- Visual winner indication

### Live Status Updates

Displays:

- Current player's turn
- Winner announcement
- Draw notifications
- Computer move updates

### Replay Functionality

Users can:

- Restart games
- Change game modes
- Play unlimited rounds

### Responsive User Interface

Features include:

- Responsive layout
- Modern design
- Mobile-friendly experience
- Interactive game board
- Smooth animations

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend Library |
| Vite | Development & Build Tool |
| JavaScript | Application Logic |
| React Router DOM | Client-Side Routing |
| Tailwind CSS | Utility-First Styling |
| CSS Modules | Component Styling |
| HTML5 | Structure |
| CSS3 | Styling Support |

---

## Folder Structure

```text
SCT_WD_3/
│
├── index.html
├── vite.config.js
├── package.json
├── eslint.config.js
├── .gitignore
│
└── src/
    │
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    │
    ├── game/
    │   └── logic.js
    │
    ├── components/
    │   ├── Board.jsx
    │   ├── Board.module.css
    │   ├── Cell.jsx
    │   ├── StatusBar.jsx
    │   ├── StatusBar.module.css
    │   └── Button.jsx
    │
    └── pages/
        ├── HomePage.jsx
        ├── HomePage.module.css
        ├── GamePage.jsx
        └── GamePage.module.css
```

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/dk0009-pv/SCT_WD_3.git
```

### Navigate to Project

```bash
cd SCT_WD_3
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Open Application

```text
http://localhost:5173/
```

---

## Usage Guide

1. Launch the application.
2. Choose a game mode.
3. Select AI difficulty if playing against the computer.
4. Start the game.
5. Take turns placing X and O marks.
6. Try to complete a row, column, or diagonal.
7. View the game result instantly.
8. Restart and play again anytime.

---

## Game Logic

### Win Detection

The application checks:

- 3 horizontal rows
- 3 vertical columns
- 2 diagonal combinations

### Draw Detection

The game automatically detects when:

- All cells are filled
- No winning combination exists

### Computer AI

Difficulty behavior:

#### Easy

- Random valid moves

#### Medium

- Mix of random and optimal moves

#### Hard

- Minimax algorithm
- Optimal gameplay strategy
- Depth-based scoring

---

## Routes

| Path | Page |
|--------|--------|
| `/` | Home Screen |
| `/play/pvp` | Two Player Mode |
| `/play/computer?difficulty=easy` | Computer Mode (Easy) |
| `/play/computer?difficulty=medium` | Computer Mode (Medium) |
| `/play/computer?difficulty=hard` | Computer Mode (Hard) |

---

## Design Notes

The visual identity of Chalk & Slate is inspired by traditional classroom chalkboards.

Features include:

- Slate-style dark background
- Hand-drawn chalk effects
- Chalk mark animations
- Script-style typography
- Animated winning strike-through line
- Immersive game environment

---

## Learning Outcomes

- React Fundamentals
- State Management
- React Router
- Component Architecture
- Event Handling
- Game Logic Development
- Minimax Algorithm
- AI Opponent Development
- CSS Modules
- Tailwind CSS
- Responsive UI Design
- Git & GitHub Workflow

---

## Repository

Repository: https://github.com/dk0009-pv/SCT_WD_3

---

## Author

**Dinesh Kumar Pulagalla**

GitHub: https://github.com/dk0009-pv

Repository: SCT_WD_3

---

## Acknowledgement

This project was developed as part of the SkillCraft Technology Web Development Internship (Task 03).

---

## Footer Credit

Built by Dinesh Kumar Pulagalla · SkillCraft Technology Web Development Task 03
