// services/authService.js
import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/'

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}user/login`, credentials)
  return response.data.body
}

export const fetchUserProfile = async (token) => {
  const response = await axios.post(
    `${API_URL}user/profile`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  )
  return response.data.body
}

export const updateUserProfile = async (firstName, lastName) => {
  const token = localStorage.getItem('token')
  try {
    const response = await axios.put(
      `${API_URL}user/profile`,
      { firstName, lastName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    console.log(response.data)
  } catch (error) {
    console.log('Erreur lors de la mise à jour du profil:', error)
  }
}

const authService = {
  login,
  fetchUserProfile,
  updateUserProfile,
}

export default authService
