import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PrivateRoute from '../components/PrivateRoute'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
