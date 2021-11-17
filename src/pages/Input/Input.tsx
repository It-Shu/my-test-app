import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent ,useState} from "react";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputTextProps = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: (page: number) => void
}

export const Input: FC<InputTextProps> = props => {
    const {
        type,
        onChange,
        onChangeText,
        onKeyPress,
        onEnter,
        ...restProps
    } = props

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e)
        onEnter && e.key === 'Enter' && onEnter(1)
    }

    // const inputClassNames = `${s.input}${error ? s.errorInput : ''}${className ? className : ''}`
    // const spanClassNames = `${s.error}${spanClassName ? spanClassName : ''}`

    return (
        <div >
            <input type={type}
                   onChange={onChangeCallback}
                   onKeyPress={onKeyPressCallback}
                   placeholder={'Enter some text...'}
                   {...restProps}/>
        </div>
    )
}
