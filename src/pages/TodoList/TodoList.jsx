import React, { useState } from 'react'

import Header from '../../components/Header/Header'
import TodoItem from '../../components/TodoItem/TodoItem'

import style from './style.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { todoAdd } from '../../store/todoSlice'


export default function TodoList() {

  const [inputValue, setInputValue] = useState('')
  const todos = useSelector(state => state.todo)
  const dispatch = useDispatch()


  const onSubmitHandler = (event) => {
    event.preventDefault()
    if(inputValue.trim().length > 0) {
      dispatch(todoAdd(inputValue))
    }
    setInputValue('')
  }

  return (
    <div>
        <div className={style.container}>

          <form onSubmit={onSubmitHandler}>
            <input placeholder='please enter todo' type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button type='submit'>&#10004;</button>
          </form>

          { todos.length !== 0 ? 
          <ul className={style.todolist}>
            {
              todos.map(todo => <TodoItem 
                                  key={Date.now()+(Math.random())}
                                  todo={todo}
                                  />)
            }
          </ul>
          :
          <p>Not Todos...</p>
          }
        </div>
    </div>
  )
}
