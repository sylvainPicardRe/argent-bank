import { BrowserRouter as Router, Routes, Route } from 'react-router'

import Home from '../pages/Home'
import Login from '../pages/Login'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
