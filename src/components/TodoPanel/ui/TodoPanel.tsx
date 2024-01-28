import React from 'react'
import cls from './TodoPanel.module.scss'
import { Button } from '../../../ui/Button'
import { ButtonTheme } from '../../../ui/Button/ui/Button'
import { Input } from '../../../ui/Input'
import { Todo } from '../../../pages/MainPage/types'
import { formatDate } from '../../helpers/NewData/NewData'
import { TodoInput } from './TodoInput/TodoInput'
interface TodoPanelProps {
}
const DEFAULT_TODO = {
    name: '',
    deadline: '',
}
const DEFAULT_TODO_TASK = [{
    id: 1,
    task: '',
    description: '',
}]
export const TodoPanel = () => {
    const [todo, setTodo] = React.useState(DEFAULT_TODO)
    const [tasks, setTasks] = React.useState(DEFAULT_TODO_TASK)
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setTodo({ ...todo, [name]: value })
    }

    const onClick = () => {
        if (todo.name.length > 1 && tasks[0].task.length > 1) {
            const data = formatDate();
            const deadlineFom = formatDate(todo.deadline)
            const deadlineFomDate = new Date(deadlineFom)
            const dateForDate = new Date(data)
            const deadline = deadlineFomDate > dateForDate ? deadlineFom : ''
            const todoBody = { ...todo, deadline, tasks, data: data, }
            console.log(todoBody)
            setTasks(DEFAULT_TODO_TASK)
            setTodo(DEFAULT_TODO)
        }
    }
    const onClickTask = () => {
        setTasks([...tasks, {
            id: tasks.length + 1,
            task: '',
            description: '',
        }])
    }
    const onClickTaskDelete = () => {
        setTasks(tasks.filter((_, i) => i !== tasks.length - 1))
    }
    return (
        <div className={cls.TodoPanel}>
            <div className={cls.fields_container}>
                <div className={cls.field_container}>
                    <label htmlFor="name ">
                        <Input value={todo.name} placeholder='Событие' onChange={onChange} name='name' id='name ' type="text" />
                    </label>
                </div>
                <div className={cls.tasks_container}>
                    {tasks.map((e, i) => <TodoInput
                        task={e}
                        tasks={tasks}
                        setTask={setTasks}
                        id={e.id}
                        key={i} />)}
                    <div className={cls.button_container}>
                        <Button onClick={onClickTask} theme={ButtonTheme.CLEAR_BLUE}>Добавить подзадачу</Button>
                        <Button onClick={onClickTaskDelete} theme={ButtonTheme.CLEAR_BLUE}>Удалить подзадачу</Button>
                    </div>
                    <div className={cls.field_container}>
                        <label className={cls.field_input_date} htmlFor="deadline ">
                            <p>Выполнить до:</p>
                            <Input value={todo.deadline} placeholder='Крайний срок' onChange={onChange} name='deadline' id='deadline ' type="datetime-local" />
                        </label>
                    </div>
                </div>
                <div className={cls.button_container}>
                    <Button onClick={onClick} theme={ButtonTheme.CLEAR_BLUE}>Добавить</Button>
                </div>
            </div>
        </div>
    )
}