import api from './api'

export const fetchAboutMe = async () => {
  const response = await api.get('/api/portfolio/aboutme/')
  return response.data
}

export const updateAboutMe = async (id: number, data: FormData) => {
  const response = await api.put(`/api/portfolio/aboutme/${id}/`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return response.data
}

export const fetchSkills = async () => {
  const response = await api.get('/api/portfolio/skills/')
  return response.data
}

export const createSkill = async (data: { name: string }) => {
  const response = await api.post('/api/portfolio/skills/', data)
  return response.data
}

export const fetchTechStack = async () => {
  const response = await api.get('/api/portfolio/tech-stack/')
  return response.data
}
export const createTechStack = async (data: { name: string }) => {
  const response = await api.post('/api/portfolio/tech-stack/', data)
  return response.data
}
