# Chalk & Slate — Tic-Tac-Toe Game

![SkillCraft](https://img.shields.io/badge/SkillCraft-Technology-2C2C2C?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

A modern, responsive, and interactive Tic-Tac-Toe game built using React, Vite, React Router, Tailwind CSS, and CSS Modules as part of the SkillCraft Technology Web Development Internship — Task 03.

Chalk & Slate provides an engaging gaming experience with local multiplayer support, AI-powered gameplay, multiple difficulty levels, smooth animations, and a unique chalkboard-inspired design.

---

## Overview

Chalk & Slate is an interactive Tic-Tac-Toe platform designed to deliver a polished and enjoyable gaming experience.

The application enables users to:

- Play against another player on the same device
- Play against a computer opponent
- Choose from multiple AI difficulty levels
- Experience animated gameplay interactions
- Receive instant game results
- Restart and replay unlimited times
- Enjoy a fully responsive interface

The project demonstrates practical React development concepts including routing, state management, reusable components, game logic implementation, AI algorithms, and responsive UI design.

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
- AI difficulty selection
- Responsive design

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

- Mobile-friendly layout
- Interactive game board
- Smooth transitions
- Chalkboard-inspired visuals

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
3. Select AI difficulty if required.
4. Start the match.
5. Take turns placing marks on the board.
6. Try to complete a row, column, or diagonal.
7. View the game result instantly.
8. Restart and play again anytime.

---

## Game Logic

### Win Detection

The application checks:

- 3 horizontal rows
- 3 vertical columns
- 2 diagonals

### Draw Detection

The game automatically detects:

- Full board
- No winner available

### Computer AI

Difficulty behavior:

#### Easy

- Random valid move

#### Medium

- 50% random move
- 50% optimal move

#### Hard

- Minimax algorithm
- Optimal gameplay strategy
- Depth-weighted scoring

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

## Design Highlights

The visual identity of Chalk & Slate is inspired by traditional classroom chalkboards.

Features include:

- Slate-style dark background
- Hand-drawn chalk effects
- Chalk mark animations
- Script-style typography
- Animated winning strike-through line
- Clean and immersive game experience

---

## Learning Outcomes

- React Fundamentals
- Component Architecture
- State Management
- React Router
- Event Handling
- Game Logic Development
- Minimax Algorithm
- AI Opponent Development
- Tailwind CSS
- CSS Modules
- Responsive Design
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
