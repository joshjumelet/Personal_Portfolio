import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
