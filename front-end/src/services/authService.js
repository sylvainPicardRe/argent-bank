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

const authService = {
  login,
  fetchUserProfile,
}

export default authService
