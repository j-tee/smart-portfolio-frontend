import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAboutMe } from '@/services/aboutMeService'
import type { AboutMe } from '../../types/portfolio'

interface AboutMeState {
  data: AboutMe | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: AboutMeState = {
  data: null,
  status: 'idle',
  error: null,
}

export const fetchAboutMe = createAsyncThunk('aboutMe/fetch', async () => {
  const response = await getAboutMe()
  return response
})

const aboutMeSlice = createSlice({
  name: 'aboutMe',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAboutMe.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchAboutMe.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchAboutMe.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export default aboutMeSlice.reducer
