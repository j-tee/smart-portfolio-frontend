import api from './api'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../utils/contants'

interface LoginCredentials {
  email: string
  password: string
}

interface TwoFAVerificationData {
  email: string
  otp: string
}

interface RegisterData {
  name: string
  username: string
  email: string
  password: string
}

// Step 1: Attempt login
export const login = async (credentials: LoginCredentials) => {
  const response = await api.post('/api/token/', credentials)

  if (response.data.requires_2fa) {
    return { requires2FA: true }
  }

  // If no 2FA, store tokens
  const { access, refresh } = response.data
  localStorage.setItem(ACCESS_TOKEN, access)
  localStorage.setItem(REFRESH_TOKEN, refresh)

  return { requires2FA: false, ...response.data }
}

// Step 2: Verify 2FA OTP
export const verify2FA = async (data: TwoFAVerificationData) => {
  const response = await api.post('/api/verify-2fa/', data)
  const { access, refresh } = response.data

  localStorage.setItem(ACCESS_TOKEN, access)
  localStorage.setItem(REFRESH_TOKEN, refresh)

  return response.data
}

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN)
  localStorage.removeItem(REFRESH_TOKEN)
}

export const register = async (data: RegisterData) => {
  const response = await api.post('/api/accounts/register/', data)
  return response.data
}

export const refreshToken = async () => {
  const refresh = localStorage.getItem(REFRESH_TOKEN)
  if (!refresh) throw new Error('Refresh token missing')

  const response = await api.post('/api/token/refresh/', { refresh })
  localStorage.setItem(ACCESS_TOKEN, response.data.access)
  return response.data
}
