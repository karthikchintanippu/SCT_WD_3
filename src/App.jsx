import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import GamePage from './pages/GamePage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/play/:mode" element={<GamePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
