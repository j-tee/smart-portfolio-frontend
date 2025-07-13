import api from './api'

export const getProjects = async () => {
  const response = await api.get('/api/portfolio/projects/')
  return response.data
}

export const getProjectById = async (id: number) => {
  const response = await api.get(`/api/portfolio/projects/${id}/`)
  return response.data
}

export const createProject = async (projectData: FormData) => {
  const response = await api.post('/api/portfolio/projects/', projectData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return response.data
}

export const updateProject = async (id: number, projectData: FormData) => {
  const response = await api.put(`/api/portfolio/projects/${id}/`, projectData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return response.data
}

export const deleteProject = async (id: number) => {
  const response = await api.delete(`/api/portfolio/projects/${id}/`)
  return response.data
}

export const fetchProjectTechStack = async (id: number) => {
  const response = await api.get(`/api/portfolio/projects/${id}/tech-stack/`)
  return response.data
}
