import { useDispatch } from 'react-redux'
import { logout } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

function LogoutButton() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  return (
    <button className="main-nav-item" onClick={handleLogout}>
      <FontAwesomeIcon icon={faSignOut} className="main-nav-item-icon" />
      Sign Out
    </button>
  )
}

export default LogoutButton
