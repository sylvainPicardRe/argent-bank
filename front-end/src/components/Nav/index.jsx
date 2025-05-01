import { NavLink } from 'react-router-dom'

import logo from '../../assets/argentBankLogo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import '../../styles/Nav.scss'

function Nav() {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="logo de l'application argent bank"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="/login" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} className="main-nav-item-icon" />
          Sign In
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav
