import React from 'react'
import cls from './TodoTask.module.scss'
import { classNames } from '../../../ui/helpers/Classnames/classnames'
import { Task } from '../../../pages/MainPage/types'
import { Button, ButtonTheme } from '../../../ui/Button/ui/Button'
interface TodoTaskProps {
    task: Task
}
export const TodoTask = ({ task }: TodoTaskProps) => {
    return (
        <div className={classNames(cls.todo_item_task_container, { [cls.todo_item_checked]: task.checked }, [])}>
            <label htmlFor={task.name} className={cls.todo_item_task_label}>
                <input checked={task.checked} type="checkbox" name={task.name} id={task.name} />
                <span className={cls.checkBox}></span>
                <h4 className={cls.todo_item_task_title}>{task.name}</h4>
                <p className={cls.todo_item_description}>{task.description}</p>
            </label>
            <div className={cls.todo_item_button_container}>
                <Button disabled={task.checked} theme={ButtonTheme.CLEAR_GREEN}> Редактировать</Button>
                <Button disabled={task.checked} theme={ButtonTheme.GREEN}> Удалить</Button>
            </div>
            <hr />
        </div>
    )
}