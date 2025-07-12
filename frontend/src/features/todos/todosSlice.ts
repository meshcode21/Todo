import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const initialState: Todo[] = [{
    id: Date.now(),
    text: "mahesh",
    completed: false
}];

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{ text: string }>) => {
            state.push({
                id: Date.now(),
                text: action.payload.text,
                completed: false
            })
        },
        removeTodo: (state, action: PayloadAction<{ id: number }>) => {
            return state.filter(todo => todo.id !== action.payload.id);            
        },
        toggleTodo: (state, action: PayloadAction<{ id: number }>) => {
            const todo = state.find(todo => todo.id === action.payload.id)
            if (todo) todo.completed = !todo.completed;
        }
    }
})

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;