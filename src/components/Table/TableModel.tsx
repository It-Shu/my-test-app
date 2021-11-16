import {Link} from 'react-router-dom'
import React from 'react'
import {TableModel} from "./Table";
import {TableItemsResponseType} from "../../api/table-api";
import s from './Table.module.css'

export const tableModel = (): TableModel[] => [
    {
        header: index =>
            <th key={'id-title-' + index} className={s.headerTH}>
                Номер / Дата
            </th>,
        body: (item: TableItemsResponseType) =>

            <td key={'id-cell-' + item.id} className={s.headerTD}>
                {item.id}
                {/*<Link to={PATH.ORDER_PAGE + '/' + item.id}>{item.id}</Link>*/}
                <br/>
                {item.created_date}
            </td>

    },
    {
        header: index =>
            <th key={'order-title-' + index} className={s.headerTH}>
                Тип задания / Автор
            </th>,
        body: (item: TableItemsResponseType) =>

            <td key={'order-cell-' + item.order_type.name} className={s.headerTD}>
                {item.order_type.name}
                <br/>
                {item.created_user.name}
            </td>


    },
    {
        header: index =>
            <th key={'account-title-' + index} className={s.headerTH}>
                Аккаунт / Терминал
            </th>,
        body: (item: TableItemsResponseType) =>

            <td key={'account-cell-' + item.account.name} className={s.headerTD}>
                {item.account.name}
                <br/>
                {item.terminal.name}
            </td>


    },
    {
        header: index =>
            <th key={'status-title-' + index} className={s.headerTH}>
                Статус
            </th>,
        body: (item: TableItemsResponseType) =>
            <td key={'status-cell-' + item.status} className={s.headerTD}>{item.status}</td>
    },
]
