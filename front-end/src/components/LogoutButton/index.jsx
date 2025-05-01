import { useDispatch } from 'react-redux'
import { logout } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router'

function LogoutButton() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  return <button onClick={handleLogout}>Déconnexion </button>
}

export default LogoutButton
