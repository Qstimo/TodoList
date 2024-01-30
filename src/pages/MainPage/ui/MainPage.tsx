import React from 'react'
import cls from './MainPage.module.scss'
import { TodoPanel } from '../../../components/TodoPanel'
import { Todo } from '../types'
import { formatDate } from '../../../components/helpers/NewData/NewData'
import { TodoList } from '../../../modules/TodoList'



export const MainPage = () => {
    return (
        <div className={cls.MainPage}>
            <div className="content">
                <TodoList />
            </div>
        </div>
    )
}