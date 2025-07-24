import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createGreeting, editGreeting, getGreeting, removeGreeting } from './greetingService'
import type { Greetings } from '@/types/portfolio'
// import Greeting from './Greeting'

interface GreetingState {
  greetings: Greetings[]
  greet:Greetings | null
  message: string | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

// interface GreetingResponse {
//   greeting: string
// }

const initialState: GreetingState = {
  greet: null,
  greetings: [],
  message: null,
  status: 'idle',
  error: null,
}

export const fetchGreeting = createAsyncThunk('greeting/fetch', async () => {
  const response = await getGreeting()
  return response
})

export const addGreeting = createAsyncThunk('greeting/add', async (data: Greetings) => {
  const response = await createGreeting(data)
  return response
})

export const updateGreeting = createAsyncThunk(
  'greeting/update',
  async (data: Greetings) => {
    const response = await editGreeting(data)
    return response
  }
)

export const deleteGreeting = createAsyncThunk('greeting/delete', async () => {
  await removeGreeting()
})

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGreeting.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.greet = action.payload
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Something went wrong'
      })
    builder
      .addCase(addGreeting.pending, state => {
        state.status = 'loading'
      })
      .addCase(addGreeting.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.message = action.payload
      })
      .addCase(addGreeting.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to add greeting'
      })
    builder
      .addCase(updateGreeting.pending, state => {
        state.status = 'loading'
      })
      .addCase(updateGreeting.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.message = action.payload
      })
      .addCase(updateGreeting.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to update greeting'
      })
    builder
      .addCase(deleteGreeting.pending, state => {
        state.status = 'loading'
      })
      .addCase(deleteGreeting.fulfilled, state => {
        state.status = 'succeeded'
        state.message = null // Clear the message after deletion
      })
      .addCase(deleteGreeting.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to delete greeting'
      })
  },
})

export default greetingSlice.reducer
