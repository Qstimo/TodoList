import React from 'react'
import cls from './MainPage.module.scss'
import { TodoPanel } from '../../../components/TodoPanel'
import { Todo } from '../types'
import { formatDate } from '../../../components/helpers/NewData/NewData'
import { TodoList } from '../../../modules/TodoList'

const tasks = [
    { id: 1, name: 'task1', description: 'description1', checked: false, data: '', deadline: '' },
    { id: 2, name: 'task2', description: 'description2', checked: false, data: '', deadline: '' },
    { id: 3, name: 'task3', description: 'description3', checked: true, data: '', deadline: '' },
    { id: 4, name: 'task4', description: 'description4', checked: false, data: '', deadline: '' },
]
const tasks1 = [
    {
        id: 1,
        mainTask: { name: 'task1', description: 'description1', checked: false },
        tasks: [
            { name: 'task1', description: 'description1', checked: false },
            { name: 'task1', description: 'description1', checked: false },
            { name: 'task1', description: 'description1', checked: false },
            { name: 'task1', description: 'description1', checked: false }
        ],
        data: '', deadline: ''
    },
    {
        id: 1,
        mainTask: { name: 'task1', description: 'description1', checked: false },
        tasks: [
            { name: 'task1', description: 'description1', checked: false },
            { name: 'task1', description: 'description1', checked: true },

        ],
        data: '', deadline: ''
    },


]

export const MainPage = () => {
    const [todos, setTodos] = React.useState(tasks1);
    const deleteTodo = (id: Todo['id']) => {
        // setTodos(todos.filter(e => e.id !== id))
    }
    const checkTodo = (id: Todo['id']) => {
        // setTodos(todos.map(todo => {
        //     if (todo.id === id) {
        //         return { ...todo, checked: !todo.checked }
        //     }
        //     return todo;
        // }))
    }

    console.log(todos)
    return (
        <div className={cls.MainPage}>
            <div className="content">
                <TodoPanel />
                <TodoList todos={todos} />
            </div>
        </div>
    )
}