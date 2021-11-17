import React from 'react'
import {TableModel} from "./Table";
import {TableItemsResponseType} from "../../api/table-api";
import s from './Table.module.css'
import {PATH} from '../../routes/routes';
import {NavLink} from 'react-router-dom';
import Statuses from "./Statuses";

export const tableModel = (): TableModel[] => [
    {
        header: index =>
            <th key={'id-title-' + index} className={s.headerTH}>
                Номер / Дата
            </th>,
        body: (item: TableItemsResponseType) =>

            <td key={'id-cell-' + item.id} className={s.headerTD}>
                <NavLink
                    to={PATH.ORDER_PAGE + '/' + item.id + '/' + item.order_type.name + '/' + item.account.name + '/' + item.status}>
                    {item.id}
                </NavLink>
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
            <td key={'status-cell-' + item.status}>{
                <Statuses data={item}/>
            }</td>
    },
]
