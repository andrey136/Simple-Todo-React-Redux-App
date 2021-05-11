import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'todo',
    initialState: {
        todoList: [
            {
                todo: "Go to the movies",
                done: false,
                id: nanoid()
            },
            {
                todo: "Do homework",
                done: false,
                id: nanoid()
            }
        ]
    },
    reducers: {
        // addToDo: (state, todoItemAction) => {
        //     state.todoList = [...state.todoList, todoItemAction.payload]
        // },
        addToDo: {
            reducer(state, action){
                console.log(state, 'Action State')
                state.todoList.push(action.payload)
            },
            prepare(todo){
                return {
                    payload: {
                        id: nanoid(),
                        todo,
                        done: false
                    }
                }
            }
        }
    }
})

// postAdded: {
//     reducer(state, action){
//         state.push(action.payload);
//     },
//     prepare(title, content, userId){
//         return {
//             payload: {
//                 id: nanoid(),
//                 title,
//                 date: new Date().toISOString() ,
//                 content,
//                 user: userId,
//             }
            
//         }
//     }
// },

export const { addToDo } = slice.actions

export const todoSelect = state => state.todo.todoList

export default slice.reducer