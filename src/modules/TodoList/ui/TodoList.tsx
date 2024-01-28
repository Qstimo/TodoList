import React from 'react'
import cls from './TodoList.module.scss'
import { Todo } from '../../../pages/MainPage/types'
import { TodoItem } from '../../../components/TodoItem';
interface TodoListProps {
    todos: Todo[];
}
export const TodoList = ({ todos }: TodoListProps) => {
    return (
        <div className={cls.TodoList}>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    )
}