import { configureStore } from '@reduxjs/toolkit'
import countReducer from '../reducers/countReducer';
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
      Contador: countReducer
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()