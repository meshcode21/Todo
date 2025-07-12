// src/hooks/reduxHooks.ts
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { AppDispatch, RootState } from '@/app/store'

// ✅ Type-safe dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

// ✅ Type-safe selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
