import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProjects } from '@/services/projectService'
import type { Project } from '@/types/portfolio'
import type { RootState } from '@/app/store'

interface ProjectState {
  data: Project[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: ProjectState = {
  data: [],
  status: 'idle',
  error: null,
}

// Thunk for fetching project list
export const fetchProjects = createAsyncThunk('projects/fetch', async () => {
  const response = getProjects()
  return response
})

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProjects.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to load projects'
      })
  },
})

export default projectSlice.reducer

// Optional selector
export const selectProjects = (state: RootState) => state.projects
