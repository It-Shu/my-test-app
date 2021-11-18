import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, FC} from 'react'
import s from './Select.module.sass'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: number[]
    onChangeOption: (option: string) => void
}

export const Select: FC<SuperSelectPropsType> = props => {
    const {options, onChange, onChangeOption, ...restProps} = props

    const mappedOptions = options ? options.map(op => (
        <option key={op} value={op} className={s.option}>
            {op}
        </option>
    )) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback} {...restProps} className={s.select}>
            {mappedOptions}
        </select>
    )
}
