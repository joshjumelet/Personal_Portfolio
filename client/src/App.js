import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
