import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      title: 'One Todo',
      completed: false,
      id: 1,
    },
    {
      title: 'Two Todo',
      completed: false,
      id: 2,
    },
    {
      title: 'Three Todo',
      completed: false,
      id: 3,
    },
    {
      title: 'Four Todo',
      completed: false,
      id: 4,
    }
]

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todoRemove: (state, action) => state.filter(todo => todo.id !== action.payload),
        todoAdd: (state, action) => [...state].concat([{title: action.payload, completed: false, id: Date.now() + Math.random()}]),
        todoToggle: (state, action) => state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
    }
})

export const { todoRemove, todoAdd, todoToggle } = todoSlice.actions

export default todoSlice.reducer