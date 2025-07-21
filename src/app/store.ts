// app/store.ts
import { configureStore } from '@reduxjs/toolkit'
import aboutReducer from '@/features/aboutMe/aboutMeSlice'
import projectReducer from '@/features/projects/projectSlice'
import greetingReducer from '@/containers/greeting/greetingSlice'

export const store = configureStore({
  reducer: {
    about: aboutReducer,
    projects: projectReducer,
    greetings: greetingReducer,
  },
})

// Types for use throughout your app
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
