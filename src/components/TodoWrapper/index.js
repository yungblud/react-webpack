import React from 'react'
import s from './style.scss'
import TodoTitle from '../TodoTitle'
import TodoList from '../TodoList'

const todoList = [
    {
        id: 0,
        todo: 'walking around on a sunny day',
    },
    {
        id: 1,
        todo: 'take vitamin pills',
    },
    {
        id: 2,
        todo: 'watch netflix',
    },
    {
        id: 3,
        todo: 'eat ice cream',
    },
]

const TodoWrapper = () => {
    return (
        <div className={s.wrapper}>
            <TodoTitle />
            <TodoList todoList={todoList} />
        </div>
    )
}

export default TodoWrapper
