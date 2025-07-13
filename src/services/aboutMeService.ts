// src/services/aboutMeService.ts
import api from './api'
import type { AboutMe } from '../types/portfolio'

export const getAboutMe = async (): Promise<AboutMe> => {
  const response = await api.get<AboutMe>('/api/portfolio/aboutme/')
  return response.data
}
export const updateAboutMe = async (data: FormData): Promise<AboutMe> => {
  const response = await api.put<AboutMe>('/api/portfolio/aboutme/', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return response.data
}
