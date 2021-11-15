import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, FC} from 'react'


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: number[]
    onChangeOption: (option: string) => void
}

export const Select: FC<SuperSelectPropsType> = props => {
    const {options, onChange, onChangeOption, ...restProps} = props

    const mappedOptions = options ? options.map(option => (
        <option key={option} value={option}>
            {option}
        </option>
    )) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}
