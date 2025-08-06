import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/features/auth/authSlice'
import todosReducer from '@/features/todos/todosSlice'
import utilsReducer from "@/features/todos/utilsSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
    utils: utilsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch