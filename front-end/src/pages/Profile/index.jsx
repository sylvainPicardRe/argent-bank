import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../../features/auth/authSlice'
import Transaction from '../../components/Transaction'
import ProfileUpdateForm from '../../components/ProfileUpdateForm'

const Profile = () => {
  const dispatch = useDispatch()
  const { user, loading, error } = useSelector((state) => state.auth)
  const [isEditing, setIsEditing] = useState(false)

  const toggleEdit = () => {
    setIsEditing((prev) => !prev)
  }

  useEffect(() => {
    dispatch(fetchUserProfile())
  }, [dispatch])

  if (loading) return <p>Chargement du profil...</p>
  if (error) return <p>Erreur : {error}</p>
  if (!user) return <p>Aucun utilisateur trouvé.</p>

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back <br />
          {!isEditing ? `${user.firstName} ${user.lastName} !` : ''}
        </h1>
        {!isEditing ? (
          <>
            <button className="edit-button" onClick={toggleEdit}>
              Edit Name
            </button>
          </>
        ) : (
          <ProfileUpdateForm
            setIsEditing={setIsEditing}
            toggleEdit={toggleEdit}
          />
        )}

        <h2 className="sr-only">Accounts</h2>
        <Transaction type={'Checking'} number={8349} amount={'2, 082.79'} />
        <Transaction type={'Savings'} number={6712} amount={'10,928.42'} />
        <Transaction type={'Credit Card'} number={8349} amount={'184.30'} />
      </div>
    </main>
  )
}

export default Profile
