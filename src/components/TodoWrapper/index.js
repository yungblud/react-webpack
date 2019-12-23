import React, { useState, useEffect } from 'react'
import axios from 'axios'
import s from './style.scss'
import TodoTitle from '../TodoTitle'
import TodoList from '../TodoList'

// const todoList = [
//     {
//         id: 0,
//         todo: 'walking around on a sunny day',
//     },
//     {
//         id: 1,
//         todo: 'take vitamin pills',
//     },
//     {
//         id: 2,
//         todo: 'watch netflix',
//     },
//     {
//         id: 3,
//         todo: 'eat ice cream',
//     },
// ]

const TodoWrapper = () => {
    const [todoList, setTodoList] = useState([])

    const getTodoList = async () => {
        try {
            const { data: todoList } = await axios.get(
                'https:///jsonplaceholder.typicode.com/todos'
            )
            setTodoList(todoList.splice(0, 10))
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getTodoList()
    }, [])

    return (
        <div className={s.wrapper}>
            <TodoTitle />
            <TodoList todoList={todoList} />
        </div>
    )
}

export default TodoWrapper
