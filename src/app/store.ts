// app/store.ts
import { configureStore } from '@reduxjs/toolkit'
import aboutReducer from '../features/about/aboutSlice'
import projectReducer from '../features/projects/projectSlice'

export const store = configureStore({
  reducer: {
    about: aboutReducer,
    projects: projectReducer,
  },
})

// Types for use throughout your app
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
