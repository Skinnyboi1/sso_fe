import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from "../lib/pages/profile";
import './App.css';

export default

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  )
}