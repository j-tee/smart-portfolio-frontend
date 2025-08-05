import api from '@/services/api'
import type { Greetings } from '@/types/portfolio'
import type { AxiosResponse } from 'axios'

export const getGreeting = async (): Promise<AxiosResponse<Greetings | Greetings[]>> => {
  const response = await api.get<Greetings | Greetings[]>('/api/portfolio/greetings/')
  console.log('Fetched greeting from service:', response)
  return response
}

export const createGreeting = async (data: Greetings): Promise<string> => {
  const response = await api.post<string>('/api/portfolio/greetings/', data)
  return response.data
}

export const editGreeting = async (data: Greetings): Promise<string> => {
  const response = await api.put<string>(`/api/portfolio/greetings/${data.id}/`, data)
  return response.data
}

export const removeGreeting = async (id: number): Promise<void> => {
  await api.delete(`/api/portfolio/greetings/${id}/`)
}
