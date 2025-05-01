import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { login } from '../../features/auth/authSlice'

import '../../styles/LoginForm.scss'

function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error } = useSelector((state) => state.auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }))
    navigate('/profile')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Se souvenir de moi</label>
      </div>

      <button className="sign-in-button" type="submit">
        {loading ? 'Chargement...' : 'Se connecter'}
      </button>
      {error && (
        <div className="alert" role="alert">
          {error}
        </div>
      )}
    </form>
  )
}

export default LoginForm
