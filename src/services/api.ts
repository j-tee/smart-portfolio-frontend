import axios, { AxiosHeaders } from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'
import { ACCESS_TOKEN } from '../utils/contants'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  headers: new AxiosHeaders({
    'Content-Type': 'application/json',
  }),
})

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem(ACCESS_TOKEN)

    // ✅ Use AxiosHeaders methods to safely set headers
    if (token) {
      if (config.headers && typeof config.headers.set === 'function') {
        config.headers.set('Authorization', `Bearer ${token}`)
      }
    }

    return config
  },
  error => Promise.reject(error)
)

export default api

// import axios from 'axios'
// import { ACCESS_TOKEN } from '../utils/contants'

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })

// api.interceptors.request.use(
//   config => {
//     const accessToken = localStorage.getItem(ACCESS_TOKEN)
//     if (accessToken) {
//       if (config.headers) {
//         config.headers.Authorization = `Bearer ${accessToken}`
//       }
//     }
//     return config
//   },
//   error => Promise.reject(error)
// )

// export default api
