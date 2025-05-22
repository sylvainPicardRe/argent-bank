import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchUserProfile,
  updateUserProfile,
} from '../../features/auth/authSlice'

import '../../styles/ProfileUpdateForm.scss'

const ProfileUpdateForm = ({ setIsEditing, toggleEdit }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName)
      setLastName(user.lastName)
    }
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    toggleEdit()
    try {
      await dispatch(updateUserProfile({ firstName, lastName })).unwrap()
      setIsEditing(false)
      dispatch(fetchUserProfile())
    } catch (err) {
      console.error('Erreur lors de la mise à jour :', err)
    }
    setIsEditing(false)
    dispatch(fetchUserProfile())
  }

  return (
    <>
      <form className="edit-form" onSubmit={handleSubmit}>
        <input
          id="firstName"
          type="text"
          placeholder={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="edit-form__input"
        />
        <input
          id="lastName"
          type="text"
          placeholder={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="edit-form__input"
        />
      </form>
      <div className="buttons-wrapper">
        <button
          type="submit"
          className="save-button edit-button btn"
          onClick={handleSubmit}
        >
          Save
        </button>
        <button
          type="submit"
          className="cancel-button edit-button btn"
          onClick={toggleEdit}
        >
          Cancel
        </button>
      </div>
    </>
  )
}

export default ProfileUpdateForm
