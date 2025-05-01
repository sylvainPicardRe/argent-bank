import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserProfile = () => {
  const [profile, setProfile] = useState(null)
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.post(
          'http://localhost:3001/api/v1/user/profile',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        setProfile(response.data.body)
      } catch (error) {
        console.error('Erreur lors de la récupération du profil:', error)
      }
    }

    fetchProfile()
  }, [token])

  if (!profile) {
    return <div>Chargement du profil...</div>
  }

  return (
    <div>
      <h2>Profil de l'utilisateur</h2>
      <p>ID: {profile.id}</p>
      <p>Email: {profile.firstName}</p>
    </div>
  )
}

export default UserProfile
