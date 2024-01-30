import React from 'react'
import cls from './TodoPanel.module.scss'
import { Button } from '../../../ui/Button'
import { ButtonTheme } from '../../../ui/Button/ui/Button'
import { Input } from '../../../ui/Input'
import { Todo } from '../../../pages/MainPage/types'
import { formatDate } from '../../helpers/NewData/NewData'
import { TodoInput } from './TodoInput/TodoInput'
import axios from '../../../components/helpers/axios'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../ReduxStore/store'
import { modalIsOpenSet } from '../../../ReduxStore/slices/ModalSlice'

const DEFAULT_TODO = {
    name: '',
    deadline: '',
}
const DEFAULT_TODO_TASK = [{
    id: 1,
    name: '',
    description: '',
    checked: false
}]

export const TodoPanel = () => {
    const navigate = useNavigate();

    const [todo, setTodo] = React.useState(DEFAULT_TODO)

    const [tasks, setTasks] = React.useState(DEFAULT_TODO_TASK)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setTodo({ ...todo, [name]: value })
    }
    const dispatch = useAppDispatch()
    const onClick = async () => {
        if (todo.name.length > 1 && tasks[0].name.length > 1) {
            try {
                const date = formatDate();
                const deadlineFom = formatDate(todo.deadline)
                const deadlineFomDate = new Date(deadlineFom)
                const dateForDate = new Date(date)
                const deadline = deadlineFomDate > dateForDate ? deadlineFom : ''
                const todoBody = {
                    ...todo, deadline, tasks, date: date,
                }
                const { data } = await axios.post('/todo', todoBody)
                setTasks(DEFAULT_TODO_TASK)
                setTodo(DEFAULT_TODO)
                dispatch(modalIsOpenSet())
                // setTimeout(() => {  }, 200);

            } catch (error) {
                console.warn(error);
                alert('Ошибка загрузки');
            }




        }
    }
    const onClickTask = () => {
        setTasks([...tasks, {
            id: tasks.length + 1,
            name: '',
            description: '',
            checked: false
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
                        <Input maxLength={80} value={todo.name} placeholder='Событие' onChange={onChange} name='name' id='name ' type="text" />
                    </label>
                </div>
                <div className={cls.tasks_container}>
                    {tasks.map((e, i) =>
                        <TodoInput
                            task={e}
                            tasks={tasks}
                            setTask={setTasks}
                            id={e.id}
                            key={i} />)}
                    <div className={cls.button_container}>
                        <Button onClick={onClickTask} theme={ButtonTheme.CLEAR_BLUE}>Добавить </Button>
                        <Button onClick={onClickTaskDelete} theme={ButtonTheme.CLEAR_BLUE}>Удалить </Button>
                    </div>
                    <div className={cls.field_container}>
                        <label className={cls.field_input_date} htmlFor="deadline ">
                            <p>Выполнить до:</p>
                            <Input value={todo.deadline} placeholder='Крайний срок' onChange={onChange} name='deadline' id='deadline ' type="datetime-local" />
                        </label>
                    </div>
                </div>
                <div className={cls.button_container}>
                    <Button
                        onClick={onClick}
                        theme={ButtonTheme.CLEAR_BLUE}>
                        Добавить</Button>
                </div>
            </div>
        </div>
    )
}