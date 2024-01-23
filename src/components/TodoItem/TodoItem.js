import React from 'react'

import style from './style.module.css'
import { useDispatch } from 'react-redux'
import { todoRemove, todoToggle } from '../../store/todoSlice'

export default function TodoItem({ todo }) {

  const dispatch = useDispatch()

  return (
    <li className={style.item}>
      <label className={style.labelCheckbox}>
        <input type='checkbox' checked={todo.completed} className={style.check__input} onChange={() => dispatch(todoToggle(todo.id))}/>
        <span className={style.check__box}></span>
      </label>
        <span className={todo.completed ? style.title__completed : style.title}>{todo.title}</span>
        <button className={style.todoItemBtn} onClick={() => dispatch(todoRemove(todo.id))}>
            <span>&#10060;</span>
        </button>
    </li>
  )
}
