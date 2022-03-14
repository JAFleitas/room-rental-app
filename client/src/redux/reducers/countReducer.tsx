import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Definiendo interface del estado inicial
interface CounterState {
    value: number
  }

  // Estado Inicial
  const initialState: CounterState = {
    value: 0,
  }

export const countReducer = createSlice({
  name: 'Contador',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value = state.value - action.payload;
    },
  },
})

export const { increment, decrement } = countReducer.actions

export default countReducer.reducer