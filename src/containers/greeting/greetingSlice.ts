import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createGreeting, editGreeting, getGreeting, removeGreeting } from './greetingService'
import type { Greetings } from '@/types/portfolio'
// import Greeting from './Greeting'

interface GreetingState {
  greetings: Greetings[]
  greet:Greetings | null
  message: string | null
  status: string
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

export const fetchGreeting = createAsyncThunk('greeting/fetch', async (_,{rejectWithValue}) => {
  try{
    const response = await getGreeting()
    console.log('Fetched greeting from slice:', response)
    return response.data
  } catch (error) {
    console.error('Failed to fetch greeting:', error)
    return rejectWithValue('Failed to fetch greeting')
  }
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

export const deleteGreeting = createAsyncThunk('greeting/delete', async (id: number) => {
  const response = await removeGreeting(id)
  return response
})

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGreeting.pending, (state, action) => {
        state.status = action.meta.requestStatus
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
       return {
          ...state,
          status: action.meta.requestStatus,
          greet: action.payload ? (Array.isArray(action.payload) ? action.payload[0] : action.payload) : null,
          greetings: Array.isArray(action.payload) ? action.payload : [action.payload],
          error: null,
        }
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch greeting'
        return {
          ...state,
          greet: null,
          greetings: [],
          message: null,
          error: action.error.message || 'Failed to fetch greeting',
       }
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
