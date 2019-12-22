import React from 'react'
import s from './style.scss'
import TodoTitle from '../TodoTitle'
import TodoList from '../TodoList'

const TodoWrapper = () => {
    return (
        <div className={s.wrapper}>
            <TodoTitle />
            <TodoList />
        </div>
    )
}

export default TodoWrapper
