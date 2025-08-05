import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    todoID: Number;
    todoTitle: string;
}

const initialState: Todo[] = [];

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setTodos: (_state, action: PayloadAction<any[]>) => {
            return action.payload.map((todo) => ({ todoID: todo.id, todoTitle: todo.title }))
        },
        addTodo: (state, action: PayloadAction<{ id: Number, title: string }>) => {
            state.push({
                todoID: action.payload.id,
                todoTitle: action.payload.title,
            })
        },
        removeTodo: (state, action: PayloadAction<{ id: number }>) => {
            return state.filter(todo => todo.todoID !== action.payload.id);
        }
    }
})

export const { setTodos, addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;