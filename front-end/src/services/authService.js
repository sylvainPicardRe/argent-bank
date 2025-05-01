// services/authService.js
import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/'

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}user/login`, credentials)
  return response.data.body
}

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}signup`, userData)
  return response.data
}

const authService = {
  login,
  register,
}

export default authService
