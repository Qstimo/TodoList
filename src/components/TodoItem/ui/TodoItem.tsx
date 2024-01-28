import React from 'react'
import cls from './TodoItem.module.scss'
import { Todo } from '../../../pages/MainPage/types'
import { Button } from '../../../ui/Button'
import { ButtonTheme } from '../../../ui/Button/ui/Button'
import { classNames } from '../../../ui/helpers/Classnames/classnames'
import { TodoTask } from '../../TodoTask'
interface TodoItemProps {
    todo: Todo,
}
export const TodoItem = ({ todo }: TodoItemProps) => {
    const [deadline, setDeadline] = React.useState(false)
    return (
        <div className={classNames(cls.todo_item_container, { [cls.todo_item_deadline]: deadline, }, [])}>
            <TodoTask task={todo.mainTask} />
            <div className={cls.todo_item_task_container}>
                {todo.tasks.map((task, id) => <TodoTask key={id} task={task} />)}
            </div>
            {todo.deadline && <p className={cls.todo_item_data}>До {todo.deadline}</p>}
        </div>
    )
}