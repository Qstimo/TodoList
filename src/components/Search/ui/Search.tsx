import React from 'react'
import cls from './Search.module.scss'
import { classNames } from '../../../ui/helpers/Classnames/classnames'
import { Input } from '../../../ui/Input'
import { searchTask, selectSearch } from '../../../ReduxStore/slices/SearchSlice'
import { useAppDispatch } from '../../../ReduxStore/store'
import { useSelector } from 'react-redux'
import debounce from 'lodash.debounce'

interface SearchProps {
    className?: string
}
export const Search = ({ className = '' }: SearchProps) => {
    const [value, setValue] = React.useState('')
    const search = useSelector(selectSearch);
    const dispatch = useAppDispatch();
    const changeSearchDebounce = React.useCallback((
        debounce((str: string) => {
            dispatch(searchTask(str));
        }, 400)
    ), [])
    const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const ev = e.target.value;
        setValue(ev);
        changeSearchDebounce(ev);
    }
    return (
        <div className={classNames(cls.Search, {}, [className])}>
            <Input value={value} onChange={changeSearch} placeholder='Поиск' />
        </div>
    )
}