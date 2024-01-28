import React from 'react'
import cls from './Header.module.scss'
interface HeaderProps {
    countTodo: number;
}
export const Header = ({ countTodo }: HeaderProps) => {
    return (
        <div className={cls.Header}>
            <header className='content'>
                <div className={cls.Header_container}              >
                    <h3>Не завершённых задач: {countTodo}</h3>
                </div>
            </header>
        </div>
    )
}