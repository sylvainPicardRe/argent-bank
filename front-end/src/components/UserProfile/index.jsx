import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../../features/auth/authSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router'

function UserProfile() {
  const dispatch = useDispatch()
  const { user, loading, error } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(fetchUserProfile())
  }, [dispatch])

  if (loading) return <p>Chargement du profil...</p>
  if (error) return <p>Erreur : {error}</p>
  if (!user) return <p>Aucun utilisateur trouvé.</p>
  return (
    <Link className="main-nav-item">
      <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
      {user.firstName}
    </Link>
  )
}

export default UserProfile
