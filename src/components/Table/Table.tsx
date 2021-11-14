import React, {FC} from 'react'
import s from './Table.module.css'
import {TableItemsResponseType} from "../../api/table-api";

type TableType = {
    tasks: TableItemsResponseType[]
    loading: boolean
}


export const Table: FC<TableType> = ({tasks, loading}) => {

    const mapFunc = (task: TableItemsResponseType, i: number) => {
        return <tr key={task.id || i} className={s.tableData}>
            <td>{task.id}</td>
            {/*<td>{task.created_date}</td>*/}

                <td>{task.order_type.name}</td>
            <div>
                <td>{task.created_user.name}</td>
            </div>


            <td>{task.account.name}</td>
            <td>{task.terminal.name}</td>

            <td>{task.status}</td>
        </tr>
    }

    if (loading) {
        return <h2>LOADING...</h2>
    }


    return (
        <div>
            <table>
                <caption>Тестовое задание Sergei Shustov</caption>
                <tr className={s.head}>
                    <th className={s.headColumn}>Номер / Дата</th>
                    <th className={s.headColumn}>Тип задания / Автор</th>
                    <th className={s.headColumn}>Аккаунт / Терминал</th>
                    <th className={s.headColumn}>Статус</th>
                </tr>

                <tr className={s.order}>
                    {tasks.map(mapFunc)}
                </tr>


            </table>
        </div>
    )
}
