import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'todo',
    initialState: {
        todoList: ["Go to the movies", "Do homework"]
    },
    reducers: {
        addToDo: (state, todoItemAction) => {
            state.todoList = [...state.todoList, todoItemAction.payload]
        }
    }
})

export const { addToDo } = slice.actions

export const todoSelect = state => state.todo.todoList

export default slice.reducer