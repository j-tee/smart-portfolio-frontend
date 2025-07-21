import api from '@/services/api'

export const getGreeting = async (): Promise<string> => {
  const response = await api.get<string>('/api/greeting/')
  return response.data
}

export const createGreeting = async (data: { message: string }): Promise<string> => {
  const response = await api.post<string>('/api/greeting/', data)
  return response.data
}

export const editGreeting = async (data: { message: string }): Promise<string> => {
  const response = await api.put<string>('/api/greeting/', data)
  return response.data
}

export const removeGreeting = async (): Promise<void> => {
  await api.delete('/api/greeting/')
}
