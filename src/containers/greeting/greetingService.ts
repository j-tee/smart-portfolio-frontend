import api from '@/services/api'
import type { Greetings } from '@/types/portfolio'

export const getGreeting = async (): Promise<Greetings> => {
  const response = await api.get<Greetings>('/api/portfolio/greetings/')
  return response.data
}

export const createGreeting = async (data: Greetings): Promise<string> => {
  const response = await api.post<string>('/api/portfolio/greetings/', data)
  return response.data
}

export const editGreeting = async (data: Greetings): Promise<string> => {
  const response = await api.put<string>('/api/portfolio/greetings/', data)
  return response.data
}

export const removeGreeting = async (): Promise<void> => {
  await api.delete('/api/portfolio/greetings/')
}
