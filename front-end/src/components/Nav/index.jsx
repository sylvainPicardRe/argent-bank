import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import LogoutButton from '../LogoutButton'

import logo from '../../assets/argentBankLogo.png'
import '../../styles/Nav.scss'

function Nav() {
  const token = useSelector((state) => state.auth.token)
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="logo de l'application argent bank"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <LogoutButton />
        ) : (
          <Link to="/login" className="main-nav-item">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="main-nav-item-icon"
            />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Nav
