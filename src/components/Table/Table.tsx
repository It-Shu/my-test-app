import React from 'react'
import s from './Table.module.css'

export const Table = () => {


    return (
        <div >
            <table>
                <thead className={s.head}>
                    <p>Номер / Дата</p>
                    <p>Тип задания / Автор</p>
                    <p>Аккаунт / Терминал</p>
                    <p>Статус</p>
                </thead>

                <tbody>

                </tbody>
            </table>
        </div>
    )
}
