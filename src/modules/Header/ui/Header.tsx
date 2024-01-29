import React from 'react'
import cls from './Header.module.scss'
import { Modal } from '../../../components/Modal/Modal';
import { TodoPanel } from '../../../components/TodoPanel';
import { Button, ButtonTheme } from '../../../ui/Button/ui/Button';
interface HeaderProps {
    countTodo: number;
}
export const Header = ({ countTodo }: HeaderProps) => {
    const [isAuthModal, setIsAuthModal] = React.useState(false);
    const onToggleModal = React.useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, []);
    return (
        <div className={cls.Header}>
            <header className='content'>
                <div className={cls.Header_container}              >
                    <h3></h3>
                    <Button
                        theme={ButtonTheme.BLUE}
                        onClick={onToggleModal}
                    >
                        Новая задача
                    </Button>
                    <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                        <TodoPanel />
                    </Modal>
                </div>
            </header>
        </div>
    )
}